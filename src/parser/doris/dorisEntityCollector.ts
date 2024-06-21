import { EntityContextType } from '../common/types';
import { StmtContextType, EntityCollector } from '../common/entityCollector';
import { DorisParserListener } from '../../lib/doris/DorisParserListener';
import {
    CreateTableContext,
    CreateViewContext,
    FromClauseContext,
    FunctionNameIdentifierContext,
    InsertTableContext,
    MaterializedViewNameContext,
    SelectClauseContext,
    SelectColumnClauseContext,
    StatementContext,
    TableNameContext,
} from '../../lib/doris/DorisParser';

export class DorisEntityCollector extends EntityCollector implements DorisParserListener {
    /** ====== Entity Begin */
    exitTableNameCreate(ctx: TableNameContext) {
        this.pushEntity(ctx, EntityContextType.TABLE_CREATE);
    }

    exitTableName(ctx: TableNameContext) {
        this.pushEntity(ctx, EntityContextType.TABLE);
    }

    exitColumnNameCreate(ctx: SelectColumnClauseContext) {
        this.pushEntity(ctx, EntityContextType.COLUMN_CREATE);
    }

    exitViewNameCreate(ctx: CreateViewContext) {
        this.pushEntity(ctx, EntityContextType.VIEW_CREATE);
    }

    exitViewName(ctx: CreateViewContext) {
        this.pushEntity(ctx, EntityContextType.VIEW);
    }

    // exitDbSchemaNameCreate(ctx: DbSchemaNameCreateContext) {
    //     this.pushEntity(ctx, EntityContextType.DATABASE_CREATE);
    // }

    // exitDbSchemaName(ctx: DbSchemaNameContext) {
    //     this.pushEntity(ctx, EntityContextType.DATABASE);
    // }

    exitFunctionNameCreate(ctx: FunctionNameIdentifierContext) {
        this.pushEntity(ctx, EntityContextType.FUNCTION_CREATE);
    }

    /** ==== Statement begin */
    enterStatement(ctx: StatementContext) {
        this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    }

    exitStatement() {
        this.popStmt();
    }

    enterCreateTableStatement(ctx: CreateTableContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }

    exitCreateTableStatement() {
        this.popStmt();
    }

    enterSelectStatement(ctx: SelectClauseContext) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }

    exitSelectStatement(ctx: SelectClauseContext) {
        this.popStmt();
    }

    enterFromSelectStmt(ctx: FromClauseContext) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }

    exitFromSelectStmt(ctx: FromClauseContext) {
        this.popStmt();
    }

    enterCreateViewStatement(ctx: CreateViewContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    }

    exitCreateViewStatement(ctx: CreateViewContext) {
        this.popStmt();
    }

    enterCreateMaterializedViewStatement(ctx: MaterializedViewNameContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    }

    exitCreateMaterializedViewStatement(ctx: MaterializedViewNameContext) {
        this.popStmt();
    }

    enterInsertStmt(ctx: InsertTableContext) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }

    exitInsertStmt(ctx: InsertTableContext) {
        this.popStmt();
    }

    // enterFromInsertStmt(ctx: FromInsertStmtContext) {
    //     this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    // }

    // exitFromInsertStmt(ctx: FromInsertStmtContext) {
    //     this.popStmt();
    // }

    // enterCreateDatabaseStatement(ctx: CreateDatabaseStatementContext) {
    //     this.pushStmt(ctx, StmtContextType.CREATE_DATABASE_STMT);
    // }

    // exitCreateDatabaseStatement(ctx: CreateDatabaseStatementContext) {
    //     this.popStmt();
    // }

    enterFunctionNameCreate(ctx: FunctionNameIdentifierContext) {
        this.pushStmt(ctx, StmtContextType.CREATE_FUNCTION_STMT);
    }

    exitCreateFunctionStatement(ctx: FunctionNameIdentifierContext) {
        this.popStmt();
    }
}
