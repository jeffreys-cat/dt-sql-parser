import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { BasicSQL } from '../common/basicSQL';
import { DorisLexer } from '../../lib/doris/DorisLexer';
import { DorisParser, ProgramContext } from '../../lib/doris/DorisParser';
import { DorisSplitListener } from './dorisSplitListener';
import { DorisEntityCollector } from './dorisEntityCollector';
import { CandidatesCollection } from 'antlr4-c3';
import { MySqlParser } from '../../lib/mysql/MySqlParser';
import { StmtContextType } from '../common/entityCollector';
import { Suggestions, SyntaxSuggestion, EntityContextType } from '../common/types';

export class Doris extends BasicSQL<DorisLexer, ProgramContext, DorisParser> {
    protected createLexerFromCharStream(charStreams: CharStream): DorisLexer {
        return new DorisLexer(charStreams);
    }

    protected createParserFromTokenStream(tokenStream: CommonTokenStream): DorisParser {
        return new DorisParser(tokenStream);
    }

    protected preferredRules: Set<number> = new Set([DorisParser.RULE_supportedCreateStatement]);

    protected get splitListener() {
        return new DorisSplitListener();
    }

    protected createEntityCollector(input: string, caretTokenIndex?: number) {
        return new DorisEntityCollector(input, caretTokenIndex);
    }

    protected processCandidates(
        candidates: CandidatesCollection,
        allTokens: Token[],
        caretTokenIndex: number,
        tokenIndexOffset: number
    ): Suggestions<Token> {
        const originalSyntaxSuggestions: SyntaxSuggestion<Token>[] = [];
        const keywords: string[] = [];

        for (const candidate of candidates.rules) {
            const [ruleType, candidateRule] = candidate;
            const startTokenIndex = candidateRule.startTokenIndex + tokenIndexOffset;
            const tokenRanges = allTokens.slice(
                startTokenIndex,
                caretTokenIndex + tokenIndexOffset + 1
            );

            let syntaxContextType: EntityContextType | StmtContextType | undefined = void 0;
            switch (ruleType) {
                case MySqlParser.RULE_databaseName: {
                    syntaxContextType = EntityContextType.DATABASE;
                    break;
                }
                case MySqlParser.RULE_databaseNameCreate: {
                    syntaxContextType = EntityContextType.DATABASE_CREATE;
                    break;
                }
                case MySqlParser.RULE_tableName: {
                    syntaxContextType = EntityContextType.TABLE;
                    break;
                }
                case MySqlParser.RULE_tableNameCreate: {
                    syntaxContextType = EntityContextType.TABLE_CREATE;
                    break;
                }
                case MySqlParser.RULE_viewName: {
                    syntaxContextType = EntityContextType.VIEW;
                    break;
                }
                case MySqlParser.RULE_viewNameCreate: {
                    syntaxContextType = EntityContextType.VIEW_CREATE;
                    break;
                }
                case MySqlParser.RULE_functionName: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                case MySqlParser.RULE_functionNameCreate: {
                    syntaxContextType = EntityContextType.FUNCTION_CREATE;
                    break;
                }
                case MySqlParser.RULE_columnName: {
                    syntaxContextType = EntityContextType.COLUMN;
                    break;
                }
                case MySqlParser.RULE_columnNameCreate: {
                    syntaxContextType = EntityContextType.COLUMN_CREATE;
                    break;
                }
                default:
                    break;
            }

            if (syntaxContextType) {
                originalSyntaxSuggestions.push({
                    syntaxContextType,
                    wordRanges: tokenRanges,
                });
            }
        }

        for (const candidate of candidates.tokens) {
            const symbolicName = this._parser.vocabulary.getSymbolicName(candidate[0]);
            const displayName = this._parser.vocabulary.getDisplayName(candidate[0]);
            if (displayName && symbolicName && symbolicName.startsWith('KW_')) {
                const keyword =
                    displayName.startsWith("'") && displayName.endsWith("'")
                        ? displayName.slice(1, -1)
                        : displayName;
                keywords.push(keyword);
            }
        }

        return {
            syntax: originalSyntaxSuggestions,
            keywords,
        };
    }
}
