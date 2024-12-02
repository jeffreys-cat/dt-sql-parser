// Generated from dt-sql-parser/src/grammar/doris/DorisParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { ProgramContext } from "./DorisParser.js";
import { MultiStatementsContext } from "./DorisParser.js";
import { SingleStatementContext } from "./DorisParser.js";
import { StatementBaseAliasContext } from "./DorisParser.js";
import { CallProcedureContext } from "./DorisParser.js";
import { CreateProcedureContext } from "./DorisParser.js";
import { DropProcedureContext } from "./DorisParser.js";
import { ShowProcedureStatusContext } from "./DorisParser.js";
import { ShowCreateProcedureContext } from "./DorisParser.js";
import { ShowConfigContext } from "./DorisParser.js";
import { StatementDefaultContext } from "./DorisParser.js";
import { SupportedDmlStatementAliasContext } from "./DorisParser.js";
import { SupportedCreateStatementAliasContext } from "./DorisParser.js";
import { SupportedAlterStatementAliasContext } from "./DorisParser.js";
import { MaterializedViewStatementAliasContext } from "./DorisParser.js";
import { SupportedJobStatementAliasContext } from "./DorisParser.js";
import { ConstraintStatementAliasContext } from "./DorisParser.js";
import { SupportedCleanStatementAliasContext } from "./DorisParser.js";
import { SupportedDropStatementAliasContext } from "./DorisParser.js";
import { SupportedSetStatementAliasContext } from "./DorisParser.js";
import { SupportedUnsetStatementAliasContext } from "./DorisParser.js";
import { SupportedRefreshStatementAliasContext } from "./DorisParser.js";
import { SupportedShowStatementAliasContext } from "./DorisParser.js";
import { SupportedLoadStatementAliasContext } from "./DorisParser.js";
import { SupportedCancelStatementAliasContext } from "./DorisParser.js";
import { SupportedRecoverStatementAliasContext } from "./DorisParser.js";
import { SupportedAdminStatementAliasContext } from "./DorisParser.js";
import { UnsupportedContext } from "./DorisParser.js";
import { UnsupportedStatementContext } from "./DorisParser.js";
import { CreateMTMVContext } from "./DorisParser.js";
import { RefreshMTMVContext } from "./DorisParser.js";
import { AlterMTMVContext } from "./DorisParser.js";
import { DropMTMVContext } from "./DorisParser.js";
import { PauseMTMVContext } from "./DorisParser.js";
import { ResumeMTMVContext } from "./DorisParser.js";
import { CancelMTMVTaskContext } from "./DorisParser.js";
import { ShowCreateMTMVContext } from "./DorisParser.js";
import { CreateScheduledJobContext } from "./DorisParser.js";
import { PauseJobContext } from "./DorisParser.js";
import { DropJobContext } from "./DorisParser.js";
import { ResumeJobContext } from "./DorisParser.js";
import { CancelJobTaskContext } from "./DorisParser.js";
import { AddConstraintContext } from "./DorisParser.js";
import { DropConstraintContext } from "./DorisParser.js";
import { ShowConstraintContext } from "./DorisParser.js";
import { InsertTableContext } from "./DorisParser.js";
import { UpdateContext } from "./DorisParser.js";
import { DeleteContext } from "./DorisParser.js";
import { LoadContext } from "./DorisParser.js";
import { ExportContext } from "./DorisParser.js";
import { ReplayContext } from "./DorisParser.js";
import { CreateTableContext } from "./DorisParser.js";
import { CreateViewContext } from "./DorisParser.js";
import { CreateTableLikeContext } from "./DorisParser.js";
import { CreateRowPolicyContext } from "./DorisParser.js";
import { AlterViewContext } from "./DorisParser.js";
import { AlterStorageVaultContext } from "./DorisParser.js";
import { AlterRoleContext } from "./DorisParser.js";
import { AlterWorkloadGroupContext } from "./DorisParser.js";
import { AlterWorkloadPolicyContext } from "./DorisParser.js";
import { DropCatalogRecycleBinContext } from "./DorisParser.js";
import { DropEncryptkeyContext } from "./DorisParser.js";
import { DropRoleContext } from "./DorisParser.js";
import { DropSqlBlockRuleContext } from "./DorisParser.js";
import { DropUserContext } from "./DorisParser.js";
import { DropWorkloadGroupContext } from "./DorisParser.js";
import { DropFileContext } from "./DorisParser.js";
import { DropWorkloadPolicyContext } from "./DorisParser.js";
import { ShowVariablesContext } from "./DorisParser.js";
import { ShowAuthorsContext } from "./DorisParser.js";
import { ShowBrokerContext } from "./DorisParser.js";
import { ShowDynamicPartitionContext } from "./DorisParser.js";
import { ShowEventsContext } from "./DorisParser.js";
import { ShowLastInsertContext } from "./DorisParser.js";
import { ShowDeleteContext } from "./DorisParser.js";
import { ShowGrantsContext } from "./DorisParser.js";
import { ShowGrantsForUserContext } from "./DorisParser.js";
import { ShowLoadProfileContext } from "./DorisParser.js";
import { ShowViewContext } from "./DorisParser.js";
import { ShowPluginsContext } from "./DorisParser.js";
import { ShowRepositoriesContext } from "./DorisParser.js";
import { ShowCreateTableContext } from "./DorisParser.js";
import { ShowRolesContext } from "./DorisParser.js";
import { ShowPartitionIdContext } from "./DorisParser.js";
import { ShowPrivilegesContext } from "./DorisParser.js";
import { ShowProcContext } from "./DorisParser.js";
import { ShowSmallFilesContext } from "./DorisParser.js";
import { ShowStorageEnginesContext } from "./DorisParser.js";
import { ShowCreateCatalogContext } from "./DorisParser.js";
import { ShowSqlBlockRuleContext } from "./DorisParser.js";
import { ShowCreateViewContext } from "./DorisParser.js";
import { ShowCreateMaterializedViewContext } from "./DorisParser.js";
import { ShowBackendsContext } from "./DorisParser.js";
import { ShowReplicaDistributionContext } from "./DorisParser.js";
import { ShowTriggersContext } from "./DorisParser.js";
import { ShowDiagnoseTabletContext } from "./DorisParser.js";
import { ShowFrontendsContext } from "./DorisParser.js";
import { ShowTableIdContext } from "./DorisParser.js";
import { ShowWhitelistContext } from "./DorisParser.js";
import { ShowTabletsBelongContext } from "./DorisParser.js";
import { SyncContext } from "./DorisParser.js";
import { CreateRoutineLoadAliasContext } from "./DorisParser.js";
import { HelpContext } from "./DorisParser.js";
import { InstallPluginContext } from "./DorisParser.js";
import { UninstallPluginContext } from "./DorisParser.js";
import { LockTablesContext } from "./DorisParser.js";
import { UnlockTablesContext } from "./DorisParser.js";
import { WarmUpClusterContext } from "./DorisParser.js";
import { BackupContext } from "./DorisParser.js";
import { RestoreContext } from "./DorisParser.js";
import { UnsupportedStartTransactionContext } from "./DorisParser.js";
import { WarmUpItemContext } from "./DorisParser.js";
import { LockTableContext } from "./DorisParser.js";
import { ShowRowPolicyContext } from "./DorisParser.js";
import { ShowStoragePolicyContext } from "./DorisParser.js";
import { ShowStagesContext } from "./DorisParser.js";
import { ShowStorageVaultContext } from "./DorisParser.js";
import { ShowCreateRepositoryContext } from "./DorisParser.js";
import { ShowOpenTablesContext } from "./DorisParser.js";
import { ShowTableStatusContext } from "./DorisParser.js";
import { ShowTablesContext } from "./DorisParser.js";
import { ShowViewsContext } from "./DorisParser.js";
import { ShowProcessListContext } from "./DorisParser.js";
import { ShowStatusContext } from "./DorisParser.js";
import { ShowMaterializedViewContext } from "./DorisParser.js";
import { ShowCreateDatabaseContext } from "./DorisParser.js";
import { ShowCreateFunctionContext } from "./DorisParser.js";
import { ShowDatabasesContext } from "./DorisParser.js";
import { ShowDatabaseIdContext } from "./DorisParser.js";
import { ShowDataTypesContext } from "./DorisParser.js";
import { ShowCatalogsContext } from "./DorisParser.js";
import { ShowCatalogContext } from "./DorisParser.js";
import { ShowColumnsContext } from "./DorisParser.js";
import { ShowCollationContext } from "./DorisParser.js";
import { ShowCharsetContext } from "./DorisParser.js";
import { ShowWaringErrorCountContext } from "./DorisParser.js";
import { ShowWaringErrorsContext } from "./DorisParser.js";
import { ShowLoadWaringsContext } from "./DorisParser.js";
import { ShowLoadContext } from "./DorisParser.js";
import { ShowExportContext } from "./DorisParser.js";
import { ShowAlterTableContext } from "./DorisParser.js";
import { ShowDataSkewContext } from "./DorisParser.js";
import { ShowDataContext } from "./DorisParser.js";
import { ShowPartitionsContext } from "./DorisParser.js";
import { ShowTabletIdContext } from "./DorisParser.js";
import { ShowTabletsFromTableContext } from "./DorisParser.js";
import { ShowUserPropertiesContext } from "./DorisParser.js";
import { ShowAllPropertiesContext } from "./DorisParser.js";
import { ShowBackupContext } from "./DorisParser.js";
import { ShowRestoreContext } from "./DorisParser.js";
import { ShowResourcesContext } from "./DorisParser.js";
import { ShowWorkloadGroupsContext } from "./DorisParser.js";
import { ShowTrashContext } from "./DorisParser.js";
import { ShowSnapshotContext } from "./DorisParser.js";
import { ShowFunctionsContext } from "./DorisParser.js";
import { ShowGlobalFunctionsContext } from "./DorisParser.js";
import { ShowTypeCastContext } from "./DorisParser.js";
import { ShowIndexContext } from "./DorisParser.js";
import { ShowTransactionContext } from "./DorisParser.js";
import { ShowQueryProfileContext } from "./DorisParser.js";
import { ShowCacheHotSpotContext } from "./DorisParser.js";
import { ShowEncryptKeysContext } from "./DorisParser.js";
import { ShowSyncJobContext } from "./DorisParser.js";
import { ShowTableCreationContext } from "./DorisParser.js";
import { ShowCatalogRecycleBinContext } from "./DorisParser.js";
import { ShowQueryStatsContext } from "./DorisParser.js";
import { ShowBuildIndexContext } from "./DorisParser.js";
import { ShowClustersContext } from "./DorisParser.js";
import { ShowConvertLscContext } from "./DorisParser.js";
import { ShowReplicaStatusContext } from "./DorisParser.js";
import { ShowTabletStorageFormatContext } from "./DorisParser.js";
import { ShowCopyContext } from "./DorisParser.js";
import { ShowWarmUpJobContext } from "./DorisParser.js";
import { CreateRoutineLoadContext } from "./DorisParser.js";
import { MysqlLoadContext } from "./DorisParser.js";
import { CreateDataSyncJobContext } from "./DorisParser.js";
import { StopDataSyncJobContext } from "./DorisParser.js";
import { ResumeDataSyncJobContext } from "./DorisParser.js";
import { PauseDataSyncJobContext } from "./DorisParser.js";
import { PauseRoutineLoadContext } from "./DorisParser.js";
import { PauseAllRoutineLoadContext } from "./DorisParser.js";
import { ResumeRoutineLoadContext } from "./DorisParser.js";
import { ResumeAllRoutineLoadContext } from "./DorisParser.js";
import { StopRoutineLoadContext } from "./DorisParser.js";
import { ShowRoutineLoadContext } from "./DorisParser.js";
import { ShowRoutineLoadTaskContext } from "./DorisParser.js";
import { ShowCreateRoutineLoadContext } from "./DorisParser.js";
import { ShowCreateLoadContext } from "./DorisParser.js";
import { SeparatorContext } from "./DorisParser.js";
import { ImportColumnsContext } from "./DorisParser.js";
import { ImportPrecedingFilterContext } from "./DorisParser.js";
import { ImportWhereContext } from "./DorisParser.js";
import { ImportDeleteOnContext } from "./DorisParser.js";
import { ImportSequenceContext } from "./DorisParser.js";
import { ImportPartitionsContext } from "./DorisParser.js";
import { ImportSequenceStatementContext } from "./DorisParser.js";
import { ImportDeleteOnStatementContext } from "./DorisParser.js";
import { ImportWhereStatementContext } from "./DorisParser.js";
import { ImportPrecedingFilterStatementContext } from "./DorisParser.js";
import { ImportColumnsStatementContext } from "./DorisParser.js";
import { ImportColumnDescContext } from "./DorisParser.js";
import { ChannelDescriptionsContext } from "./DorisParser.js";
import { ChannelDescriptionContext } from "./DorisParser.js";
import { RefreshCatalogContext } from "./DorisParser.js";
import { CleanAllProfileContext } from "./DorisParser.js";
import { RefreshTableContext } from "./DorisParser.js";
import { RefreshDatabaseContext } from "./DorisParser.js";
import { RefreshLdapContext } from "./DorisParser.js";
import { CleanLabelContext } from "./DorisParser.js";
import { CleanQueryStatsContext } from "./DorisParser.js";
import { CleanAllQueryStatsContext } from "./DorisParser.js";
import { CancelLoadContext } from "./DorisParser.js";
import { CancelExportContext } from "./DorisParser.js";
import { CancelWarmUpJobContext } from "./DorisParser.js";
import { CancelAlterTableContext } from "./DorisParser.js";
import { CancelBuildIndexContext } from "./DorisParser.js";
import { CancelDecommisionBackendContext } from "./DorisParser.js";
import { CancelBackupContext } from "./DorisParser.js";
import { CancelRestoreContext } from "./DorisParser.js";
import { AdminShowReplicaDistributionContext } from "./DorisParser.js";
import { RecoverDatabaseContext } from "./DorisParser.js";
import { RecoverTableContext } from "./DorisParser.js";
import { RecoverPartitionContext } from "./DorisParser.js";
import { AdminShowReplicaStatusContext } from "./DorisParser.js";
import { AdminSetReplicaStatusContext } from "./DorisParser.js";
import { AdminSetReplicaVersionContext } from "./DorisParser.js";
import { AdminRepairTableContext } from "./DorisParser.js";
import { AdminCancelRepairTableContext } from "./DorisParser.js";
import { AdminCompactTableContext } from "./DorisParser.js";
import { AdminSetFrontendConfigContext } from "./DorisParser.js";
import { AdminCheckTabletsContext } from "./DorisParser.js";
import { AdminRebalanceDiskContext } from "./DorisParser.js";
import { AdminCancelRebalanceDiskContext } from "./DorisParser.js";
import { AdminCleanTrashContext } from "./DorisParser.js";
import { AdminSetPartitionVersionContext } from "./DorisParser.js";
import { AdminDiagnoseTabletContext } from "./DorisParser.js";
import { AdminShowTabletStorageFormatContext } from "./DorisParser.js";
import { AdminCopyTabletContext } from "./DorisParser.js";
import { AdminSetTableStatusContext } from "./DorisParser.js";
import { BaseTableRefContext } from "./DorisParser.js";
import { WildWhereContext } from "./DorisParser.js";
import { TransactionBeginContext } from "./DorisParser.js";
import { TranscationCommitContext } from "./DorisParser.js";
import { TransactionRollbackContext } from "./DorisParser.js";
import { GrantTablePrivilegeContext } from "./DorisParser.js";
import { GrantResourcePrivilegeContext } from "./DorisParser.js";
import { GrantRoleContext } from "./DorisParser.js";
import { PrivilegeContext } from "./DorisParser.js";
import { PrivilegeListContext } from "./DorisParser.js";
import { AlterTableContext } from "./DorisParser.js";
import { AlterTableAddRollupContext } from "./DorisParser.js";
import { AlterTableDropRollupContext } from "./DorisParser.js";
import { AlterSystemContext } from "./DorisParser.js";
import { AlterDatabaseSetQuotaContext } from "./DorisParser.js";
import { AlterDatabaseRenameContext } from "./DorisParser.js";
import { AlterDatabasePropertiesContext } from "./DorisParser.js";
import { AlterCatalogRenameContext } from "./DorisParser.js";
import { AlterCatalogPropertiesContext } from "./DorisParser.js";
import { AlterCatalogCommentContext } from "./DorisParser.js";
import { AlterResourceContext } from "./DorisParser.js";
import { AlterColocateGroupContext } from "./DorisParser.js";
import { AlterRoutineLoadContext } from "./DorisParser.js";
import { AlterSqlBlockRuleContext } from "./DorisParser.js";
import { AlterTablePropertiesContext } from "./DorisParser.js";
import { AlterStoragePlicyContext } from "./DorisParser.js";
import { AlterUserContext } from "./DorisParser.js";
import { AlterRepositoryContext } from "./DorisParser.js";
import { AddBackendClauseContext } from "./DorisParser.js";
import { DropBackendClauseContext } from "./DorisParser.js";
import { DecommissionBackendClauseContext } from "./DorisParser.js";
import { AddObserverClauseContext } from "./DorisParser.js";
import { DropObserverClauseContext } from "./DorisParser.js";
import { AddFollowerClauseContext } from "./DorisParser.js";
import { DropFollowerClauseContext } from "./DorisParser.js";
import { AddBrokerClauseContext } from "./DorisParser.js";
import { DropBrokerClauseContext } from "./DorisParser.js";
import { DropAllBrokerClauseContext } from "./DorisParser.js";
import { AlterLoadErrorUrlClauseContext } from "./DorisParser.js";
import { ModifyBackendClauseContext } from "./DorisParser.js";
import { ModifyFrontendOrBackendHostNameClauseContext } from "./DorisParser.js";
import { DropRollupClauseContext } from "./DorisParser.js";
import { AddRollupClauseContext } from "./DorisParser.js";
import { AddColumnClauseContext } from "./DorisParser.js";
import { AddColumnsClauseContext } from "./DorisParser.js";
import { DropColumnClauseContext } from "./DorisParser.js";
import { ModifyColumnClauseContext } from "./DorisParser.js";
import { ReorderColumnsClauseContext } from "./DorisParser.js";
import { AddPartitionClauseContext } from "./DorisParser.js";
import { DropPartitionClauseContext } from "./DorisParser.js";
import { ModifyPartitionClauseContext } from "./DorisParser.js";
import { ReplacePartitionClauseContext } from "./DorisParser.js";
import { ReplaceTableClauseContext } from "./DorisParser.js";
import { RenameClauseContext } from "./DorisParser.js";
import { RenameRollupClauseContext } from "./DorisParser.js";
import { RenamePartitionClauseContext } from "./DorisParser.js";
import { RenameColumnClauseContext } from "./DorisParser.js";
import { AddIndexClauseContext } from "./DorisParser.js";
import { DropIndexClauseContext } from "./DorisParser.js";
import { EnableFeatureClauseContext } from "./DorisParser.js";
import { ModifyDistributionClauseContext } from "./DorisParser.js";
import { ModifyTableCommentClauseContext } from "./DorisParser.js";
import { ModifyColumnCommentClauseContext } from "./DorisParser.js";
import { ModifyEngineClauseContext } from "./DorisParser.js";
import { AlterMultiPartitionClauseContext } from "./DorisParser.js";
import { ColumnPositionContext } from "./DorisParser.js";
import { ToRollupContext } from "./DorisParser.js";
import { FromRollupContext } from "./DorisParser.js";
import { DropDatabaseContext } from "./DorisParser.js";
import { DropCatalogContext } from "./DorisParser.js";
import { DropFunctionContext } from "./DorisParser.js";
import { DropTableContext } from "./DorisParser.js";
import { DropViewContext } from "./DorisParser.js";
import { DropRepositoryContext } from "./DorisParser.js";
import { DropIndexContext } from "./DorisParser.js";
import { DropResourceContext } from "./DorisParser.js";
import { DropRowPolicyContext } from "./DorisParser.js";
import { DropStoragePolicyContext } from "./DorisParser.js";
import { DropStageContext } from "./DorisParser.js";
import { AnalyzeTableContext } from "./DorisParser.js";
import { AnalyzeDatabaseContext } from "./DorisParser.js";
import { AlterTableStatsContext } from "./DorisParser.js";
import { AlterColumnStatsContext } from "./DorisParser.js";
import { DropStatsContext } from "./DorisParser.js";
import { DropCachedStatsContext } from "./DorisParser.js";
import { DropExpiredStatsContext } from "./DorisParser.js";
import { DropAanalyzeJobContext } from "./DorisParser.js";
import { KillAnalyzeJobContext } from "./DorisParser.js";
import { ShowTableStatsContext } from "./DorisParser.js";
import { ShowIndexStatsContext } from "./DorisParser.js";
import { ShowColumnStatsContext } from "./DorisParser.js";
import { ShowColumnHistogramStatsContext } from "./DorisParser.js";
import { ShowAnalyzeContext } from "./DorisParser.js";
import { ShowAnalyzeFromJobIdContext } from "./DorisParser.js";
import { ShowAutoAnalyzeJobsContext } from "./DorisParser.js";
import { ShowAnalyzeTaskContext } from "./DorisParser.js";
import { AnalyzePropertiesContext } from "./DorisParser.js";
import { CreateDatabaseContext } from "./DorisParser.js";
import { CreateCatalogContext } from "./DorisParser.js";
import { CreateUserDefineFunctionContext } from "./DorisParser.js";
import { CreateAliasFunctionContext } from "./DorisParser.js";
import { CreateUserContext } from "./DorisParser.js";
import { CreateRepositoryContext } from "./DorisParser.js";
import { CreateRoleContext } from "./DorisParser.js";
import { CreateFileContext } from "./DorisParser.js";
import { CreateIndexContext } from "./DorisParser.js";
import { CreateResourceContext } from "./DorisParser.js";
import { CreateStorageVaultContext } from "./DorisParser.js";
import { CreateWorkloadGroupContext } from "./DorisParser.js";
import { CreateWorkloadPolicyContext } from "./DorisParser.js";
import { CreateEncryptkeyContext } from "./DorisParser.js";
import { CreateSqlBlockRuleContext } from "./DorisParser.js";
import { CreateStoragePolicyContext } from "./DorisParser.js";
import { BuildIndexContext } from "./DorisParser.js";
import { CreateStageContext } from "./DorisParser.js";
import { WorkloadPolicyActionsContext } from "./DorisParser.js";
import { WorkloadPolicyActionContext } from "./DorisParser.js";
import { WorkloadPolicyConditionsContext } from "./DorisParser.js";
import { WorkloadPolicyConditionContext } from "./DorisParser.js";
import { StorageBackendContext } from "./DorisParser.js";
import { PasswordOptionContext } from "./DorisParser.js";
import { FunctionArgumentsContext } from "./DorisParser.js";
import { FunctionArgumentContext } from "./DorisParser.js";
import { SetOptionsContext } from "./DorisParser.js";
import { SetDefaultStorageVaultContext } from "./DorisParser.js";
import { SetUserPropertiesContext } from "./DorisParser.js";
import { SetTransactionContext } from "./DorisParser.js";
import { SetVariableWithTypeContext } from "./DorisParser.js";
import { SetNamesContext } from "./DorisParser.js";
import { SetCharsetContext } from "./DorisParser.js";
import { SetCollateContext } from "./DorisParser.js";
import { SetPasswordContext } from "./DorisParser.js";
import { SetLdapAdminPasswordContext } from "./DorisParser.js";
import { SetVariableWithoutTypeContext } from "./DorisParser.js";
import { SetSystemVariableContext } from "./DorisParser.js";
import { SetUserVariableContext } from "./DorisParser.js";
import { TransactionAccessModeContext } from "./DorisParser.js";
import { IsolationLevelContext } from "./DorisParser.js";
import { SupportedUnsetStatementContext } from "./DorisParser.js";
import { UseDatabaseContext } from "./DorisParser.js";
import { UseCloudClusterContext } from "./DorisParser.js";
import { SwitchCatalogContext } from "./DorisParser.js";
import { TruncateTableContext } from "./DorisParser.js";
import { CopyIntoContext } from "./DorisParser.js";
import { StageAndPatternContext } from "./DorisParser.js";
import { KillConnectionContext } from "./DorisParser.js";
import { KillQueryContext } from "./DorisParser.js";
import { DescribeTableValuedFunctionContext } from "./DorisParser.js";
import { DescribeTableAllContext } from "./DorisParser.js";
import { DescribeTableContext } from "./DorisParser.js";
import { ConstraintContext } from "./DorisParser.js";
import { PartitionSpecContext } from "./DorisParser.js";
import { PartitionTableContext } from "./DorisParser.js";
import { IdentityOrFunctionListContext } from "./DorisParser.js";
import { IdentityOrFunctionContext } from "./DorisParser.js";
import { DataDescContext } from "./DorisParser.js";
import { BuildModeContext } from "./DorisParser.js";
import { RefreshTriggerContext } from "./DorisParser.js";
import { RefreshScheduleContext } from "./DorisParser.js";
import { RefreshMethodContext } from "./DorisParser.js";
import { MvPartitionContext } from "./DorisParser.js";
import { IdentifierOrTextContext } from "./DorisParser.js";
import { IdentifierOrTextOrAsteriskContext } from "./DorisParser.js";
import { MultipartIdentifierOrAsteriskContext } from "./DorisParser.js";
import { IdentifierOrAsteriskContext } from "./DorisParser.js";
import { UserIdentifyContext } from "./DorisParser.js";
import { GrantUserIdentifyContext } from "./DorisParser.js";
import { ExplainContext } from "./DorisParser.js";
import { ExplainCommandContext } from "./DorisParser.js";
import { PlanTypeContext } from "./DorisParser.js";
import { ReplayCommandContext } from "./DorisParser.js";
import { ReplayTypeContext } from "./DorisParser.js";
import { MergeTypeContext } from "./DorisParser.js";
import { PreFilterClauseContext } from "./DorisParser.js";
import { DeleteOnClauseContext } from "./DorisParser.js";
import { SequenceColClauseContext } from "./DorisParser.js";
import { ColFromPathContext } from "./DorisParser.js";
import { ColMappingListContext } from "./DorisParser.js";
import { MappingExprContext } from "./DorisParser.js";
import { WithRemoteStorageSystemContext } from "./DorisParser.js";
import { ResourceDescContext } from "./DorisParser.js";
import { MysqlDataDescContext } from "./DorisParser.js";
import { SkipLinesContext } from "./DorisParser.js";
import { OutFileClauseContext } from "./DorisParser.js";
import { QueryContext } from "./DorisParser.js";
import { QueryTermDefaultContext } from "./DorisParser.js";
import { SetOperationContext } from "./DorisParser.js";
import { SetQuantifierContext } from "./DorisParser.js";
import { QueryPrimaryDefaultContext } from "./DorisParser.js";
import { SubqueryContext } from "./DorisParser.js";
import { ValuesTableContext } from "./DorisParser.js";
import { RegularQuerySpecificationContext } from "./DorisParser.js";
import { CteContext } from "./DorisParser.js";
import { AliasQueryContext } from "./DorisParser.js";
import { ColumnAliasesContext } from "./DorisParser.js";
import { SelectClauseContext } from "./DorisParser.js";
import { SelectColumnClauseContext } from "./DorisParser.js";
import { WhereClauseContext } from "./DorisParser.js";
import { FromClauseContext } from "./DorisParser.js";
import { IntoClauseContext } from "./DorisParser.js";
import { BulkCollectClauseContext } from "./DorisParser.js";
import { TableRowContext } from "./DorisParser.js";
import { RelationsContext } from "./DorisParser.js";
import { RelationContext } from "./DorisParser.js";
import { JoinRelationContext } from "./DorisParser.js";
import { BracketDistributeTypeContext } from "./DorisParser.js";
import { CommentDistributeTypeContext } from "./DorisParser.js";
import { BracketRelationHintContext } from "./DorisParser.js";
import { CommentRelationHintContext } from "./DorisParser.js";
import { AggClauseContext } from "./DorisParser.js";
import { GroupingElementContext } from "./DorisParser.js";
import { GroupingSetContext } from "./DorisParser.js";
import { HavingClauseContext } from "./DorisParser.js";
import { QualifyClauseContext } from "./DorisParser.js";
import { SelectHintContext } from "./DorisParser.js";
import { HintStatementContext } from "./DorisParser.js";
import { HintAssignmentContext } from "./DorisParser.js";
import { UpdateAssignmentContext } from "./DorisParser.js";
import { UpdateAssignmentSeqContext } from "./DorisParser.js";
import { LateralViewContext } from "./DorisParser.js";
import { QueryOrganizationContext } from "./DorisParser.js";
import { SortClauseContext } from "./DorisParser.js";
import { SortItemContext } from "./DorisParser.js";
import { LimitClauseContext } from "./DorisParser.js";
import { PartitionClauseContext } from "./DorisParser.js";
import { JoinTypeContext } from "./DorisParser.js";
import { JoinCriteriaContext } from "./DorisParser.js";
import { IdentifierListContext } from "./DorisParser.js";
import { IdentifierSeqContext } from "./DorisParser.js";
import { OptScanParamsContext } from "./DorisParser.js";
import { TableNameContext } from "./DorisParser.js";
import { AliasedQueryContext } from "./DorisParser.js";
import { TableValuedFunctionContext } from "./DorisParser.js";
import { RelationListContext } from "./DorisParser.js";
import { MaterializedViewNameContext } from "./DorisParser.js";
import { PropertyClauseContext } from "./DorisParser.js";
import { PropertyItemListContext } from "./DorisParser.js";
import { PropertyItemContext } from "./DorisParser.js";
import { PropertyKeyContext } from "./DorisParser.js";
import { PropertyValueContext } from "./DorisParser.js";
import { TableAliasContext } from "./DorisParser.js";
import { MultipartIdentifierContext } from "./DorisParser.js";
import { SimpleColumnDefsContext } from "./DorisParser.js";
import { SimpleColumnDefContext } from "./DorisParser.js";
import { ColumnDefsContext } from "./DorisParser.js";
import { ColumnDefContext } from "./DorisParser.js";
import { IndexDefsContext } from "./DorisParser.js";
import { IndexDefContext } from "./DorisParser.js";
import { PartitionsDefContext } from "./DorisParser.js";
import { PartitionDefContext } from "./DorisParser.js";
import { LessThanPartitionDefContext } from "./DorisParser.js";
import { FixedPartitionDefContext } from "./DorisParser.js";
import { StepPartitionDefContext } from "./DorisParser.js";
import { InPartitionDefContext } from "./DorisParser.js";
import { PartitionValueListContext } from "./DorisParser.js";
import { PartitionValueDefContext } from "./DorisParser.js";
import { RollupDefsContext } from "./DorisParser.js";
import { RollupDefContext } from "./DorisParser.js";
import { AggTypeDefContext } from "./DorisParser.js";
import { TabletListContext } from "./DorisParser.js";
import { InlineTableContext } from "./DorisParser.js";
import { NamedExpressionContext } from "./DorisParser.js";
import { NamedExpressionSeqContext } from "./DorisParser.js";
import { ExpressionContext } from "./DorisParser.js";
import { LambdaExpressionContext } from "./DorisParser.js";
import { ExistContext } from "./DorisParser.js";
import { LogicalNotContext } from "./DorisParser.js";
import { PredicatedContext } from "./DorisParser.js";
import { IsnullContext } from "./DorisParser.js";
import { Is_not_null_predContext } from "./DorisParser.js";
import { LogicalBinaryContext } from "./DorisParser.js";
import { DoublePipesContext } from "./DorisParser.js";
import { RowConstructorContext } from "./DorisParser.js";
import { RowConstructorItemContext } from "./DorisParser.js";
import { PredicateContext } from "./DorisParser.js";
import { ValueExpressionDefaultContext } from "./DorisParser.js";
import { ComparisonContext } from "./DorisParser.js";
import { ArithmeticBinaryContext } from "./DorisParser.js";
import { ArithmeticUnaryContext } from "./DorisParser.js";
import { DatetimeUnitContext } from "./DorisParser.js";
import { DateCeilContext } from "./DorisParser.js";
import { DereferenceContext } from "./DorisParser.js";
import { CurrentDateContext } from "./DorisParser.js";
import { TimestampaddContext } from "./DorisParser.js";
import { Date_subContext } from "./DorisParser.js";
import { CastContext } from "./DorisParser.js";
import { ParenthesizedExpressionContext } from "./DorisParser.js";
import { UserVariableContext } from "./DorisParser.js";
import { ElementAtContext } from "./DorisParser.js";
import { LocalTimestampContext } from "./DorisParser.js";
import { CharFunctionContext } from "./DorisParser.js";
import { IntervalLiteralContext } from "./DorisParser.js";
import { ArrayRangeContext } from "./DorisParser.js";
import { SimpleCaseContext } from "./DorisParser.js";
import { ColumnReferenceContext } from "./DorisParser.js";
import { StarContext } from "./DorisParser.js";
import { SessionUserContext } from "./DorisParser.js";
import { ConvertTypeContext } from "./DorisParser.js";
import { TimestampdiffContext } from "./DorisParser.js";
import { ConvertCharSetContext } from "./DorisParser.js";
import { SubqueryExpressionContext } from "./DorisParser.js";
import { EncryptKeyContext } from "./DorisParser.js";
import { Date_addContext } from "./DorisParser.js";
import { CurrentTimeContext } from "./DorisParser.js";
import { LocalTimeContext } from "./DorisParser.js";
import { SystemVariableContext } from "./DorisParser.js";
import { CollateContext } from "./DorisParser.js";
import { CurrentUserContext } from "./DorisParser.js";
import { ConstantDefaultContext } from "./DorisParser.js";
import { ExtractContext } from "./DorisParser.js";
import { CurrentTimestampContext } from "./DorisParser.js";
import { FunctionCallContext } from "./DorisParser.js";
import { ArraySliceContext } from "./DorisParser.js";
import { BitOperationContext } from "./DorisParser.js";
import { DateFloorContext } from "./DorisParser.js";
import { SearchedCaseContext } from "./DorisParser.js";
import { ExceptContext } from "./DorisParser.js";
import { ReplaceContext } from "./DorisParser.js";
import { CastDataTypeContext } from "./DorisParser.js";
import { FunctionCallExpressionContext } from "./DorisParser.js";
import { FunctionIdentifierContext } from "./DorisParser.js";
import { FunctionNameIdentifierContext } from "./DorisParser.js";
import { WindowSpecContext } from "./DorisParser.js";
import { WindowFrameContext } from "./DorisParser.js";
import { FrameUnitsContext } from "./DorisParser.js";
import { FrameBoundaryContext } from "./DorisParser.js";
import { QualifiedNameContext } from "./DorisParser.js";
import { SpecifiedPartitionContext } from "./DorisParser.js";
import { NullLiteralContext } from "./DorisParser.js";
import { TypeConstructorContext } from "./DorisParser.js";
import { NumericLiteralContext } from "./DorisParser.js";
import { BooleanLiteralContext } from "./DorisParser.js";
import { StringLiteralContext } from "./DorisParser.js";
import { ArrayLiteralContext } from "./DorisParser.js";
import { MapLiteralContext } from "./DorisParser.js";
import { StructLiteralContext } from "./DorisParser.js";
import { PlaceholderContext } from "./DorisParser.js";
import { ComparisonOperatorContext } from "./DorisParser.js";
import { BooleanValueContext } from "./DorisParser.js";
import { WhenClauseContext } from "./DorisParser.js";
import { IntervalContext } from "./DorisParser.js";
import { UnitIdentifierContext } from "./DorisParser.js";
import { DataTypeWithNullableContext } from "./DorisParser.js";
import { ComplexDataTypeContext } from "./DorisParser.js";
import { AggStateDataTypeContext } from "./DorisParser.js";
import { PrimitiveDataTypeContext } from "./DorisParser.js";
import { PrimitiveColTypeContext } from "./DorisParser.js";
import { ComplexColTypeListContext } from "./DorisParser.js";
import { ComplexColTypeContext } from "./DorisParser.js";
import { CommentSpecContext } from "./DorisParser.js";
import { SampleContext } from "./DorisParser.js";
import { SampleByPercentileContext } from "./DorisParser.js";
import { SampleByRowsContext } from "./DorisParser.js";
import { TableSnapshotContext } from "./DorisParser.js";
import { ErrorCapturingIdentifierContext } from "./DorisParser.js";
import { ErrorIdentContext } from "./DorisParser.js";
import { RealIdentContext } from "./DorisParser.js";
import { IdentifierContext } from "./DorisParser.js";
import { UnquotedIdentifierContext } from "./DorisParser.js";
import { QuotedIdentifierAlternativeContext } from "./DorisParser.js";
import { QuotedIdentifierContext } from "./DorisParser.js";
import { IntegerLiteralContext } from "./DorisParser.js";
import { DecimalLiteralContext } from "./DorisParser.js";
import { NonReservedContext } from "./DorisParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `DorisParser`.
 */
export class DorisParserListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `DorisParser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.multiStatements`.
     * @param ctx the parse tree
     */
    enterMultiStatements?: (ctx: MultiStatementsContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.multiStatements`.
     * @param ctx the parse tree
     */
    exitMultiStatements?: (ctx: MultiStatementsContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.singleStatement`.
     * @param ctx the parse tree
     */
    enterSingleStatement?: (ctx: SingleStatementContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.singleStatement`.
     * @param ctx the parse tree
     */
    exitSingleStatement?: (ctx: SingleStatementContext) => void;
    /**
     * Enter a parse tree produced by the `statementBaseAlias`
     * labeled alternative in `DorisParser.statement`.
     * @param ctx the parse tree
     */
    enterStatementBaseAlias?: (ctx: StatementBaseAliasContext) => void;
    /**
     * Exit a parse tree produced by the `statementBaseAlias`
     * labeled alternative in `DorisParser.statement`.
     * @param ctx the parse tree
     */
    exitStatementBaseAlias?: (ctx: StatementBaseAliasContext) => void;
    /**
     * Enter a parse tree produced by the `callProcedure`
     * labeled alternative in `DorisParser.statement`.
     * @param ctx the parse tree
     */
    enterCallProcedure?: (ctx: CallProcedureContext) => void;
    /**
     * Exit a parse tree produced by the `callProcedure`
     * labeled alternative in `DorisParser.statement`.
     * @param ctx the parse tree
     */
    exitCallProcedure?: (ctx: CallProcedureContext) => void;
    /**
     * Enter a parse tree produced by the `createProcedure`
     * labeled alternative in `DorisParser.statement`.
     * @param ctx the parse tree
     */
    enterCreateProcedure?: (ctx: CreateProcedureContext) => void;
    /**
     * Exit a parse tree produced by the `createProcedure`
     * labeled alternative in `DorisParser.statement`.
     * @param ctx the parse tree
     */
    exitCreateProcedure?: (ctx: CreateProcedureContext) => void;
    /**
     * Enter a parse tree produced by the `dropProcedure`
     * labeled alternative in `DorisParser.statement`.
     * @param ctx the parse tree
     */
    enterDropProcedure?: (ctx: DropProcedureContext) => void;
    /**
     * Exit a parse tree produced by the `dropProcedure`
     * labeled alternative in `DorisParser.statement`.
     * @param ctx the parse tree
     */
    exitDropProcedure?: (ctx: DropProcedureContext) => void;
    /**
     * Enter a parse tree produced by the `showProcedureStatus`
     * labeled alternative in `DorisParser.statement`.
     * @param ctx the parse tree
     */
    enterShowProcedureStatus?: (ctx: ShowProcedureStatusContext) => void;
    /**
     * Exit a parse tree produced by the `showProcedureStatus`
     * labeled alternative in `DorisParser.statement`.
     * @param ctx the parse tree
     */
    exitShowProcedureStatus?: (ctx: ShowProcedureStatusContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateProcedure`
     * labeled alternative in `DorisParser.statement`.
     * @param ctx the parse tree
     */
    enterShowCreateProcedure?: (ctx: ShowCreateProcedureContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateProcedure`
     * labeled alternative in `DorisParser.statement`.
     * @param ctx the parse tree
     */
    exitShowCreateProcedure?: (ctx: ShowCreateProcedureContext) => void;
    /**
     * Enter a parse tree produced by the `showConfig`
     * labeled alternative in `DorisParser.statement`.
     * @param ctx the parse tree
     */
    enterShowConfig?: (ctx: ShowConfigContext) => void;
    /**
     * Exit a parse tree produced by the `showConfig`
     * labeled alternative in `DorisParser.statement`.
     * @param ctx the parse tree
     */
    exitShowConfig?: (ctx: ShowConfigContext) => void;
    /**
     * Enter a parse tree produced by the `statementDefault`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    enterStatementDefault?: (ctx: StatementDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `statementDefault`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    exitStatementDefault?: (ctx: StatementDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `supportedDmlStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    enterSupportedDmlStatementAlias?: (ctx: SupportedDmlStatementAliasContext) => void;
    /**
     * Exit a parse tree produced by the `supportedDmlStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    exitSupportedDmlStatementAlias?: (ctx: SupportedDmlStatementAliasContext) => void;
    /**
     * Enter a parse tree produced by the `supportedCreateStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    enterSupportedCreateStatementAlias?: (ctx: SupportedCreateStatementAliasContext) => void;
    /**
     * Exit a parse tree produced by the `supportedCreateStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    exitSupportedCreateStatementAlias?: (ctx: SupportedCreateStatementAliasContext) => void;
    /**
     * Enter a parse tree produced by the `supportedAlterStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    enterSupportedAlterStatementAlias?: (ctx: SupportedAlterStatementAliasContext) => void;
    /**
     * Exit a parse tree produced by the `supportedAlterStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    exitSupportedAlterStatementAlias?: (ctx: SupportedAlterStatementAliasContext) => void;
    /**
     * Enter a parse tree produced by the `materializedViewStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    enterMaterializedViewStatementAlias?: (ctx: MaterializedViewStatementAliasContext) => void;
    /**
     * Exit a parse tree produced by the `materializedViewStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    exitMaterializedViewStatementAlias?: (ctx: MaterializedViewStatementAliasContext) => void;
    /**
     * Enter a parse tree produced by the `supportedJobStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    enterSupportedJobStatementAlias?: (ctx: SupportedJobStatementAliasContext) => void;
    /**
     * Exit a parse tree produced by the `supportedJobStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    exitSupportedJobStatementAlias?: (ctx: SupportedJobStatementAliasContext) => void;
    /**
     * Enter a parse tree produced by the `constraintStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    enterConstraintStatementAlias?: (ctx: ConstraintStatementAliasContext) => void;
    /**
     * Exit a parse tree produced by the `constraintStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    exitConstraintStatementAlias?: (ctx: ConstraintStatementAliasContext) => void;
    /**
     * Enter a parse tree produced by the `supportedCleanStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    enterSupportedCleanStatementAlias?: (ctx: SupportedCleanStatementAliasContext) => void;
    /**
     * Exit a parse tree produced by the `supportedCleanStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    exitSupportedCleanStatementAlias?: (ctx: SupportedCleanStatementAliasContext) => void;
    /**
     * Enter a parse tree produced by the `supportedDropStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    enterSupportedDropStatementAlias?: (ctx: SupportedDropStatementAliasContext) => void;
    /**
     * Exit a parse tree produced by the `supportedDropStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    exitSupportedDropStatementAlias?: (ctx: SupportedDropStatementAliasContext) => void;
    /**
     * Enter a parse tree produced by the `supportedSetStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    enterSupportedSetStatementAlias?: (ctx: SupportedSetStatementAliasContext) => void;
    /**
     * Exit a parse tree produced by the `supportedSetStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    exitSupportedSetStatementAlias?: (ctx: SupportedSetStatementAliasContext) => void;
    /**
     * Enter a parse tree produced by the `supportedUnsetStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    enterSupportedUnsetStatementAlias?: (ctx: SupportedUnsetStatementAliasContext) => void;
    /**
     * Exit a parse tree produced by the `supportedUnsetStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    exitSupportedUnsetStatementAlias?: (ctx: SupportedUnsetStatementAliasContext) => void;
    /**
     * Enter a parse tree produced by the `supportedRefreshStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    enterSupportedRefreshStatementAlias?: (ctx: SupportedRefreshStatementAliasContext) => void;
    /**
     * Exit a parse tree produced by the `supportedRefreshStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    exitSupportedRefreshStatementAlias?: (ctx: SupportedRefreshStatementAliasContext) => void;
    /**
     * Enter a parse tree produced by the `supportedShowStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    enterSupportedShowStatementAlias?: (ctx: SupportedShowStatementAliasContext) => void;
    /**
     * Exit a parse tree produced by the `supportedShowStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    exitSupportedShowStatementAlias?: (ctx: SupportedShowStatementAliasContext) => void;
    /**
     * Enter a parse tree produced by the `supportedLoadStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    enterSupportedLoadStatementAlias?: (ctx: SupportedLoadStatementAliasContext) => void;
    /**
     * Exit a parse tree produced by the `supportedLoadStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    exitSupportedLoadStatementAlias?: (ctx: SupportedLoadStatementAliasContext) => void;
    /**
     * Enter a parse tree produced by the `supportedCancelStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    enterSupportedCancelStatementAlias?: (ctx: SupportedCancelStatementAliasContext) => void;
    /**
     * Exit a parse tree produced by the `supportedCancelStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    exitSupportedCancelStatementAlias?: (ctx: SupportedCancelStatementAliasContext) => void;
    /**
     * Enter a parse tree produced by the `supportedRecoverStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    enterSupportedRecoverStatementAlias?: (ctx: SupportedRecoverStatementAliasContext) => void;
    /**
     * Exit a parse tree produced by the `supportedRecoverStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    exitSupportedRecoverStatementAlias?: (ctx: SupportedRecoverStatementAliasContext) => void;
    /**
     * Enter a parse tree produced by the `supportedAdminStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    enterSupportedAdminStatementAlias?: (ctx: SupportedAdminStatementAliasContext) => void;
    /**
     * Exit a parse tree produced by the `supportedAdminStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    exitSupportedAdminStatementAlias?: (ctx: SupportedAdminStatementAliasContext) => void;
    /**
     * Enter a parse tree produced by the `unsupported`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    enterUnsupported?: (ctx: UnsupportedContext) => void;
    /**
     * Exit a parse tree produced by the `unsupported`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     */
    exitUnsupported?: (ctx: UnsupportedContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.unsupportedStatement`.
     * @param ctx the parse tree
     */
    enterUnsupportedStatement?: (ctx: UnsupportedStatementContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.unsupportedStatement`.
     * @param ctx the parse tree
     */
    exitUnsupportedStatement?: (ctx: UnsupportedStatementContext) => void;
    /**
     * Enter a parse tree produced by the `createMTMV`
     * labeled alternative in `DorisParser.materializedViewStatement`.
     * @param ctx the parse tree
     */
    enterCreateMTMV?: (ctx: CreateMTMVContext) => void;
    /**
     * Exit a parse tree produced by the `createMTMV`
     * labeled alternative in `DorisParser.materializedViewStatement`.
     * @param ctx the parse tree
     */
    exitCreateMTMV?: (ctx: CreateMTMVContext) => void;
    /**
     * Enter a parse tree produced by the `refreshMTMV`
     * labeled alternative in `DorisParser.materializedViewStatement`.
     * @param ctx the parse tree
     */
    enterRefreshMTMV?: (ctx: RefreshMTMVContext) => void;
    /**
     * Exit a parse tree produced by the `refreshMTMV`
     * labeled alternative in `DorisParser.materializedViewStatement`.
     * @param ctx the parse tree
     */
    exitRefreshMTMV?: (ctx: RefreshMTMVContext) => void;
    /**
     * Enter a parse tree produced by the `alterMTMV`
     * labeled alternative in `DorisParser.materializedViewStatement`.
     * @param ctx the parse tree
     */
    enterAlterMTMV?: (ctx: AlterMTMVContext) => void;
    /**
     * Exit a parse tree produced by the `alterMTMV`
     * labeled alternative in `DorisParser.materializedViewStatement`.
     * @param ctx the parse tree
     */
    exitAlterMTMV?: (ctx: AlterMTMVContext) => void;
    /**
     * Enter a parse tree produced by the `dropMTMV`
     * labeled alternative in `DorisParser.materializedViewStatement`.
     * @param ctx the parse tree
     */
    enterDropMTMV?: (ctx: DropMTMVContext) => void;
    /**
     * Exit a parse tree produced by the `dropMTMV`
     * labeled alternative in `DorisParser.materializedViewStatement`.
     * @param ctx the parse tree
     */
    exitDropMTMV?: (ctx: DropMTMVContext) => void;
    /**
     * Enter a parse tree produced by the `pauseMTMV`
     * labeled alternative in `DorisParser.materializedViewStatement`.
     * @param ctx the parse tree
     */
    enterPauseMTMV?: (ctx: PauseMTMVContext) => void;
    /**
     * Exit a parse tree produced by the `pauseMTMV`
     * labeled alternative in `DorisParser.materializedViewStatement`.
     * @param ctx the parse tree
     */
    exitPauseMTMV?: (ctx: PauseMTMVContext) => void;
    /**
     * Enter a parse tree produced by the `resumeMTMV`
     * labeled alternative in `DorisParser.materializedViewStatement`.
     * @param ctx the parse tree
     */
    enterResumeMTMV?: (ctx: ResumeMTMVContext) => void;
    /**
     * Exit a parse tree produced by the `resumeMTMV`
     * labeled alternative in `DorisParser.materializedViewStatement`.
     * @param ctx the parse tree
     */
    exitResumeMTMV?: (ctx: ResumeMTMVContext) => void;
    /**
     * Enter a parse tree produced by the `cancelMTMVTask`
     * labeled alternative in `DorisParser.materializedViewStatement`.
     * @param ctx the parse tree
     */
    enterCancelMTMVTask?: (ctx: CancelMTMVTaskContext) => void;
    /**
     * Exit a parse tree produced by the `cancelMTMVTask`
     * labeled alternative in `DorisParser.materializedViewStatement`.
     * @param ctx the parse tree
     */
    exitCancelMTMVTask?: (ctx: CancelMTMVTaskContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateMTMV`
     * labeled alternative in `DorisParser.materializedViewStatement`.
     * @param ctx the parse tree
     */
    enterShowCreateMTMV?: (ctx: ShowCreateMTMVContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateMTMV`
     * labeled alternative in `DorisParser.materializedViewStatement`.
     * @param ctx the parse tree
     */
    exitShowCreateMTMV?: (ctx: ShowCreateMTMVContext) => void;
    /**
     * Enter a parse tree produced by the `createScheduledJob`
     * labeled alternative in `DorisParser.supportedJobStatement`.
     * @param ctx the parse tree
     */
    enterCreateScheduledJob?: (ctx: CreateScheduledJobContext) => void;
    /**
     * Exit a parse tree produced by the `createScheduledJob`
     * labeled alternative in `DorisParser.supportedJobStatement`.
     * @param ctx the parse tree
     */
    exitCreateScheduledJob?: (ctx: CreateScheduledJobContext) => void;
    /**
     * Enter a parse tree produced by the `pauseJob`
     * labeled alternative in `DorisParser.supportedJobStatement`.
     * @param ctx the parse tree
     */
    enterPauseJob?: (ctx: PauseJobContext) => void;
    /**
     * Exit a parse tree produced by the `pauseJob`
     * labeled alternative in `DorisParser.supportedJobStatement`.
     * @param ctx the parse tree
     */
    exitPauseJob?: (ctx: PauseJobContext) => void;
    /**
     * Enter a parse tree produced by the `dropJob`
     * labeled alternative in `DorisParser.supportedJobStatement`.
     * @param ctx the parse tree
     */
    enterDropJob?: (ctx: DropJobContext) => void;
    /**
     * Exit a parse tree produced by the `dropJob`
     * labeled alternative in `DorisParser.supportedJobStatement`.
     * @param ctx the parse tree
     */
    exitDropJob?: (ctx: DropJobContext) => void;
    /**
     * Enter a parse tree produced by the `resumeJob`
     * labeled alternative in `DorisParser.supportedJobStatement`.
     * @param ctx the parse tree
     */
    enterResumeJob?: (ctx: ResumeJobContext) => void;
    /**
     * Exit a parse tree produced by the `resumeJob`
     * labeled alternative in `DorisParser.supportedJobStatement`.
     * @param ctx the parse tree
     */
    exitResumeJob?: (ctx: ResumeJobContext) => void;
    /**
     * Enter a parse tree produced by the `cancelJobTask`
     * labeled alternative in `DorisParser.supportedJobStatement`.
     * @param ctx the parse tree
     */
    enterCancelJobTask?: (ctx: CancelJobTaskContext) => void;
    /**
     * Exit a parse tree produced by the `cancelJobTask`
     * labeled alternative in `DorisParser.supportedJobStatement`.
     * @param ctx the parse tree
     */
    exitCancelJobTask?: (ctx: CancelJobTaskContext) => void;
    /**
     * Enter a parse tree produced by the `addConstraint`
     * labeled alternative in `DorisParser.constraintStatement`.
     * @param ctx the parse tree
     */
    enterAddConstraint?: (ctx: AddConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `addConstraint`
     * labeled alternative in `DorisParser.constraintStatement`.
     * @param ctx the parse tree
     */
    exitAddConstraint?: (ctx: AddConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `dropConstraint`
     * labeled alternative in `DorisParser.constraintStatement`.
     * @param ctx the parse tree
     */
    enterDropConstraint?: (ctx: DropConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `dropConstraint`
     * labeled alternative in `DorisParser.constraintStatement`.
     * @param ctx the parse tree
     */
    exitDropConstraint?: (ctx: DropConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `showConstraint`
     * labeled alternative in `DorisParser.constraintStatement`.
     * @param ctx the parse tree
     */
    enterShowConstraint?: (ctx: ShowConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `showConstraint`
     * labeled alternative in `DorisParser.constraintStatement`.
     * @param ctx the parse tree
     */
    exitShowConstraint?: (ctx: ShowConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `insertTable`
     * labeled alternative in `DorisParser.supportedDmlStatement`.
     * @param ctx the parse tree
     */
    enterInsertTable?: (ctx: InsertTableContext) => void;
    /**
     * Exit a parse tree produced by the `insertTable`
     * labeled alternative in `DorisParser.supportedDmlStatement`.
     * @param ctx the parse tree
     */
    exitInsertTable?: (ctx: InsertTableContext) => void;
    /**
     * Enter a parse tree produced by the `update`
     * labeled alternative in `DorisParser.supportedDmlStatement`.
     * @param ctx the parse tree
     */
    enterUpdate?: (ctx: UpdateContext) => void;
    /**
     * Exit a parse tree produced by the `update`
     * labeled alternative in `DorisParser.supportedDmlStatement`.
     * @param ctx the parse tree
     */
    exitUpdate?: (ctx: UpdateContext) => void;
    /**
     * Enter a parse tree produced by the `delete`
     * labeled alternative in `DorisParser.supportedDmlStatement`.
     * @param ctx the parse tree
     */
    enterDelete?: (ctx: DeleteContext) => void;
    /**
     * Exit a parse tree produced by the `delete`
     * labeled alternative in `DorisParser.supportedDmlStatement`.
     * @param ctx the parse tree
     */
    exitDelete?: (ctx: DeleteContext) => void;
    /**
     * Enter a parse tree produced by the `load`
     * labeled alternative in `DorisParser.supportedDmlStatement`.
     * @param ctx the parse tree
     */
    enterLoad?: (ctx: LoadContext) => void;
    /**
     * Exit a parse tree produced by the `load`
     * labeled alternative in `DorisParser.supportedDmlStatement`.
     * @param ctx the parse tree
     */
    exitLoad?: (ctx: LoadContext) => void;
    /**
     * Enter a parse tree produced by the `export`
     * labeled alternative in `DorisParser.supportedDmlStatement`.
     * @param ctx the parse tree
     */
    enterExport?: (ctx: ExportContext) => void;
    /**
     * Exit a parse tree produced by the `export`
     * labeled alternative in `DorisParser.supportedDmlStatement`.
     * @param ctx the parse tree
     */
    exitExport?: (ctx: ExportContext) => void;
    /**
     * Enter a parse tree produced by the `replay`
     * labeled alternative in `DorisParser.supportedDmlStatement`.
     * @param ctx the parse tree
     */
    enterReplay?: (ctx: ReplayContext) => void;
    /**
     * Exit a parse tree produced by the `replay`
     * labeled alternative in `DorisParser.supportedDmlStatement`.
     * @param ctx the parse tree
     */
    exitReplay?: (ctx: ReplayContext) => void;
    /**
     * Enter a parse tree produced by the `createTable`
     * labeled alternative in `DorisParser.supportedCreateStatement`.
     * @param ctx the parse tree
     */
    enterCreateTable?: (ctx: CreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `createTable`
     * labeled alternative in `DorisParser.supportedCreateStatement`.
     * @param ctx the parse tree
     */
    exitCreateTable?: (ctx: CreateTableContext) => void;
    /**
     * Enter a parse tree produced by the `createView`
     * labeled alternative in `DorisParser.supportedCreateStatement`.
     * @param ctx the parse tree
     */
    enterCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Exit a parse tree produced by the `createView`
     * labeled alternative in `DorisParser.supportedCreateStatement`.
     * @param ctx the parse tree
     */
    exitCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Enter a parse tree produced by the `createTableLike`
     * labeled alternative in `DorisParser.supportedCreateStatement`.
     * @param ctx the parse tree
     */
    enterCreateTableLike?: (ctx: CreateTableLikeContext) => void;
    /**
     * Exit a parse tree produced by the `createTableLike`
     * labeled alternative in `DorisParser.supportedCreateStatement`.
     * @param ctx the parse tree
     */
    exitCreateTableLike?: (ctx: CreateTableLikeContext) => void;
    /**
     * Enter a parse tree produced by the `createRowPolicy`
     * labeled alternative in `DorisParser.supportedCreateStatement`.
     * @param ctx the parse tree
     */
    enterCreateRowPolicy?: (ctx: CreateRowPolicyContext) => void;
    /**
     * Exit a parse tree produced by the `createRowPolicy`
     * labeled alternative in `DorisParser.supportedCreateStatement`.
     * @param ctx the parse tree
     */
    exitCreateRowPolicy?: (ctx: CreateRowPolicyContext) => void;
    /**
     * Enter a parse tree produced by the `alterView`
     * labeled alternative in `DorisParser.supportedAlterStatement`.
     * @param ctx the parse tree
     */
    enterAlterView?: (ctx: AlterViewContext) => void;
    /**
     * Exit a parse tree produced by the `alterView`
     * labeled alternative in `DorisParser.supportedAlterStatement`.
     * @param ctx the parse tree
     */
    exitAlterView?: (ctx: AlterViewContext) => void;
    /**
     * Enter a parse tree produced by the `alterStorageVault`
     * labeled alternative in `DorisParser.supportedAlterStatement`.
     * @param ctx the parse tree
     */
    enterAlterStorageVault?: (ctx: AlterStorageVaultContext) => void;
    /**
     * Exit a parse tree produced by the `alterStorageVault`
     * labeled alternative in `DorisParser.supportedAlterStatement`.
     * @param ctx the parse tree
     */
    exitAlterStorageVault?: (ctx: AlterStorageVaultContext) => void;
    /**
     * Enter a parse tree produced by the `alterRole`
     * labeled alternative in `DorisParser.supportedAlterStatement`.
     * @param ctx the parse tree
     */
    enterAlterRole?: (ctx: AlterRoleContext) => void;
    /**
     * Exit a parse tree produced by the `alterRole`
     * labeled alternative in `DorisParser.supportedAlterStatement`.
     * @param ctx the parse tree
     */
    exitAlterRole?: (ctx: AlterRoleContext) => void;
    /**
     * Enter a parse tree produced by the `alterWorkloadGroup`
     * labeled alternative in `DorisParser.supportedAlterStatement`.
     * @param ctx the parse tree
     */
    enterAlterWorkloadGroup?: (ctx: AlterWorkloadGroupContext) => void;
    /**
     * Exit a parse tree produced by the `alterWorkloadGroup`
     * labeled alternative in `DorisParser.supportedAlterStatement`.
     * @param ctx the parse tree
     */
    exitAlterWorkloadGroup?: (ctx: AlterWorkloadGroupContext) => void;
    /**
     * Enter a parse tree produced by the `alterWorkloadPolicy`
     * labeled alternative in `DorisParser.supportedAlterStatement`.
     * @param ctx the parse tree
     */
    enterAlterWorkloadPolicy?: (ctx: AlterWorkloadPolicyContext) => void;
    /**
     * Exit a parse tree produced by the `alterWorkloadPolicy`
     * labeled alternative in `DorisParser.supportedAlterStatement`.
     * @param ctx the parse tree
     */
    exitAlterWorkloadPolicy?: (ctx: AlterWorkloadPolicyContext) => void;
    /**
     * Enter a parse tree produced by the `dropCatalogRecycleBin`
     * labeled alternative in `DorisParser.supportedDropStatement`.
     * @param ctx the parse tree
     */
    enterDropCatalogRecycleBin?: (ctx: DropCatalogRecycleBinContext) => void;
    /**
     * Exit a parse tree produced by the `dropCatalogRecycleBin`
     * labeled alternative in `DorisParser.supportedDropStatement`.
     * @param ctx the parse tree
     */
    exitDropCatalogRecycleBin?: (ctx: DropCatalogRecycleBinContext) => void;
    /**
     * Enter a parse tree produced by the `dropEncryptkey`
     * labeled alternative in `DorisParser.supportedDropStatement`.
     * @param ctx the parse tree
     */
    enterDropEncryptkey?: (ctx: DropEncryptkeyContext) => void;
    /**
     * Exit a parse tree produced by the `dropEncryptkey`
     * labeled alternative in `DorisParser.supportedDropStatement`.
     * @param ctx the parse tree
     */
    exitDropEncryptkey?: (ctx: DropEncryptkeyContext) => void;
    /**
     * Enter a parse tree produced by the `dropRole`
     * labeled alternative in `DorisParser.supportedDropStatement`.
     * @param ctx the parse tree
     */
    enterDropRole?: (ctx: DropRoleContext) => void;
    /**
     * Exit a parse tree produced by the `dropRole`
     * labeled alternative in `DorisParser.supportedDropStatement`.
     * @param ctx the parse tree
     */
    exitDropRole?: (ctx: DropRoleContext) => void;
    /**
     * Enter a parse tree produced by the `dropSqlBlockRule`
     * labeled alternative in `DorisParser.supportedDropStatement`.
     * @param ctx the parse tree
     */
    enterDropSqlBlockRule?: (ctx: DropSqlBlockRuleContext) => void;
    /**
     * Exit a parse tree produced by the `dropSqlBlockRule`
     * labeled alternative in `DorisParser.supportedDropStatement`.
     * @param ctx the parse tree
     */
    exitDropSqlBlockRule?: (ctx: DropSqlBlockRuleContext) => void;
    /**
     * Enter a parse tree produced by the `dropUser`
     * labeled alternative in `DorisParser.supportedDropStatement`.
     * @param ctx the parse tree
     */
    enterDropUser?: (ctx: DropUserContext) => void;
    /**
     * Exit a parse tree produced by the `dropUser`
     * labeled alternative in `DorisParser.supportedDropStatement`.
     * @param ctx the parse tree
     */
    exitDropUser?: (ctx: DropUserContext) => void;
    /**
     * Enter a parse tree produced by the `dropWorkloadGroup`
     * labeled alternative in `DorisParser.supportedDropStatement`.
     * @param ctx the parse tree
     */
    enterDropWorkloadGroup?: (ctx: DropWorkloadGroupContext) => void;
    /**
     * Exit a parse tree produced by the `dropWorkloadGroup`
     * labeled alternative in `DorisParser.supportedDropStatement`.
     * @param ctx the parse tree
     */
    exitDropWorkloadGroup?: (ctx: DropWorkloadGroupContext) => void;
    /**
     * Enter a parse tree produced by the `dropFile`
     * labeled alternative in `DorisParser.supportedDropStatement`.
     * @param ctx the parse tree
     */
    enterDropFile?: (ctx: DropFileContext) => void;
    /**
     * Exit a parse tree produced by the `dropFile`
     * labeled alternative in `DorisParser.supportedDropStatement`.
     * @param ctx the parse tree
     */
    exitDropFile?: (ctx: DropFileContext) => void;
    /**
     * Enter a parse tree produced by the `dropWorkloadPolicy`
     * labeled alternative in `DorisParser.supportedDropStatement`.
     * @param ctx the parse tree
     */
    enterDropWorkloadPolicy?: (ctx: DropWorkloadPolicyContext) => void;
    /**
     * Exit a parse tree produced by the `dropWorkloadPolicy`
     * labeled alternative in `DorisParser.supportedDropStatement`.
     * @param ctx the parse tree
     */
    exitDropWorkloadPolicy?: (ctx: DropWorkloadPolicyContext) => void;
    /**
     * Enter a parse tree produced by the `showVariables`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowVariables?: (ctx: ShowVariablesContext) => void;
    /**
     * Exit a parse tree produced by the `showVariables`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowVariables?: (ctx: ShowVariablesContext) => void;
    /**
     * Enter a parse tree produced by the `showAuthors`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowAuthors?: (ctx: ShowAuthorsContext) => void;
    /**
     * Exit a parse tree produced by the `showAuthors`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowAuthors?: (ctx: ShowAuthorsContext) => void;
    /**
     * Enter a parse tree produced by the `showBroker`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowBroker?: (ctx: ShowBrokerContext) => void;
    /**
     * Exit a parse tree produced by the `showBroker`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowBroker?: (ctx: ShowBrokerContext) => void;
    /**
     * Enter a parse tree produced by the `showDynamicPartition`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowDynamicPartition?: (ctx: ShowDynamicPartitionContext) => void;
    /**
     * Exit a parse tree produced by the `showDynamicPartition`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowDynamicPartition?: (ctx: ShowDynamicPartitionContext) => void;
    /**
     * Enter a parse tree produced by the `showEvents`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowEvents?: (ctx: ShowEventsContext) => void;
    /**
     * Exit a parse tree produced by the `showEvents`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowEvents?: (ctx: ShowEventsContext) => void;
    /**
     * Enter a parse tree produced by the `showLastInsert`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowLastInsert?: (ctx: ShowLastInsertContext) => void;
    /**
     * Exit a parse tree produced by the `showLastInsert`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowLastInsert?: (ctx: ShowLastInsertContext) => void;
    /**
     * Enter a parse tree produced by the `showDelete`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowDelete?: (ctx: ShowDeleteContext) => void;
    /**
     * Exit a parse tree produced by the `showDelete`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowDelete?: (ctx: ShowDeleteContext) => void;
    /**
     * Enter a parse tree produced by the `showGrants`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowGrants?: (ctx: ShowGrantsContext) => void;
    /**
     * Exit a parse tree produced by the `showGrants`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowGrants?: (ctx: ShowGrantsContext) => void;
    /**
     * Enter a parse tree produced by the `showGrantsForUser`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowGrantsForUser?: (ctx: ShowGrantsForUserContext) => void;
    /**
     * Exit a parse tree produced by the `showGrantsForUser`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowGrantsForUser?: (ctx: ShowGrantsForUserContext) => void;
    /**
     * Enter a parse tree produced by the `showLoadProfile`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowLoadProfile?: (ctx: ShowLoadProfileContext) => void;
    /**
     * Exit a parse tree produced by the `showLoadProfile`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowLoadProfile?: (ctx: ShowLoadProfileContext) => void;
    /**
     * Enter a parse tree produced by the `showView`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowView?: (ctx: ShowViewContext) => void;
    /**
     * Exit a parse tree produced by the `showView`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowView?: (ctx: ShowViewContext) => void;
    /**
     * Enter a parse tree produced by the `showPlugins`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowPlugins?: (ctx: ShowPluginsContext) => void;
    /**
     * Exit a parse tree produced by the `showPlugins`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowPlugins?: (ctx: ShowPluginsContext) => void;
    /**
     * Enter a parse tree produced by the `showRepositories`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowRepositories?: (ctx: ShowRepositoriesContext) => void;
    /**
     * Exit a parse tree produced by the `showRepositories`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowRepositories?: (ctx: ShowRepositoriesContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateTable`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowCreateTable?: (ctx: ShowCreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateTable`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowCreateTable?: (ctx: ShowCreateTableContext) => void;
    /**
     * Enter a parse tree produced by the `showRoles`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowRoles?: (ctx: ShowRolesContext) => void;
    /**
     * Exit a parse tree produced by the `showRoles`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowRoles?: (ctx: ShowRolesContext) => void;
    /**
     * Enter a parse tree produced by the `showPartitionId`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowPartitionId?: (ctx: ShowPartitionIdContext) => void;
    /**
     * Exit a parse tree produced by the `showPartitionId`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowPartitionId?: (ctx: ShowPartitionIdContext) => void;
    /**
     * Enter a parse tree produced by the `showPrivileges`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowPrivileges?: (ctx: ShowPrivilegesContext) => void;
    /**
     * Exit a parse tree produced by the `showPrivileges`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowPrivileges?: (ctx: ShowPrivilegesContext) => void;
    /**
     * Enter a parse tree produced by the `showProc`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowProc?: (ctx: ShowProcContext) => void;
    /**
     * Exit a parse tree produced by the `showProc`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowProc?: (ctx: ShowProcContext) => void;
    /**
     * Enter a parse tree produced by the `showSmallFiles`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowSmallFiles?: (ctx: ShowSmallFilesContext) => void;
    /**
     * Exit a parse tree produced by the `showSmallFiles`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowSmallFiles?: (ctx: ShowSmallFilesContext) => void;
    /**
     * Enter a parse tree produced by the `showStorageEngines`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowStorageEngines?: (ctx: ShowStorageEnginesContext) => void;
    /**
     * Exit a parse tree produced by the `showStorageEngines`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowStorageEngines?: (ctx: ShowStorageEnginesContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateCatalog`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowCreateCatalog?: (ctx: ShowCreateCatalogContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateCatalog`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowCreateCatalog?: (ctx: ShowCreateCatalogContext) => void;
    /**
     * Enter a parse tree produced by the `showSqlBlockRule`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowSqlBlockRule?: (ctx: ShowSqlBlockRuleContext) => void;
    /**
     * Exit a parse tree produced by the `showSqlBlockRule`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowSqlBlockRule?: (ctx: ShowSqlBlockRuleContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateView`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowCreateView?: (ctx: ShowCreateViewContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateView`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowCreateView?: (ctx: ShowCreateViewContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateMaterializedView`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowCreateMaterializedView?: (ctx: ShowCreateMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateMaterializedView`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowCreateMaterializedView?: (ctx: ShowCreateMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by the `showBackends`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowBackends?: (ctx: ShowBackendsContext) => void;
    /**
     * Exit a parse tree produced by the `showBackends`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowBackends?: (ctx: ShowBackendsContext) => void;
    /**
     * Enter a parse tree produced by the `showReplicaDistribution`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowReplicaDistribution?: (ctx: ShowReplicaDistributionContext) => void;
    /**
     * Exit a parse tree produced by the `showReplicaDistribution`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowReplicaDistribution?: (ctx: ShowReplicaDistributionContext) => void;
    /**
     * Enter a parse tree produced by the `showTriggers`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowTriggers?: (ctx: ShowTriggersContext) => void;
    /**
     * Exit a parse tree produced by the `showTriggers`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowTriggers?: (ctx: ShowTriggersContext) => void;
    /**
     * Enter a parse tree produced by the `showDiagnoseTablet`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowDiagnoseTablet?: (ctx: ShowDiagnoseTabletContext) => void;
    /**
     * Exit a parse tree produced by the `showDiagnoseTablet`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowDiagnoseTablet?: (ctx: ShowDiagnoseTabletContext) => void;
    /**
     * Enter a parse tree produced by the `showFrontends`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowFrontends?: (ctx: ShowFrontendsContext) => void;
    /**
     * Exit a parse tree produced by the `showFrontends`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowFrontends?: (ctx: ShowFrontendsContext) => void;
    /**
     * Enter a parse tree produced by the `showTableId`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowTableId?: (ctx: ShowTableIdContext) => void;
    /**
     * Exit a parse tree produced by the `showTableId`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowTableId?: (ctx: ShowTableIdContext) => void;
    /**
     * Enter a parse tree produced by the `showWhitelist`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowWhitelist?: (ctx: ShowWhitelistContext) => void;
    /**
     * Exit a parse tree produced by the `showWhitelist`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowWhitelist?: (ctx: ShowWhitelistContext) => void;
    /**
     * Enter a parse tree produced by the `showTabletsBelong`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowTabletsBelong?: (ctx: ShowTabletsBelongContext) => void;
    /**
     * Exit a parse tree produced by the `showTabletsBelong`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowTabletsBelong?: (ctx: ShowTabletsBelongContext) => void;
    /**
     * Enter a parse tree produced by the `sync`
     * labeled alternative in `DorisParser.supportedLoadStatement`.
     * @param ctx the parse tree
     */
    enterSync?: (ctx: SyncContext) => void;
    /**
     * Exit a parse tree produced by the `sync`
     * labeled alternative in `DorisParser.supportedLoadStatement`.
     * @param ctx the parse tree
     */
    exitSync?: (ctx: SyncContext) => void;
    /**
     * Enter a parse tree produced by the `createRoutineLoadAlias`
     * labeled alternative in `DorisParser.supportedLoadStatement`.
     * @param ctx the parse tree
     */
    enterCreateRoutineLoadAlias?: (ctx: CreateRoutineLoadAliasContext) => void;
    /**
     * Exit a parse tree produced by the `createRoutineLoadAlias`
     * labeled alternative in `DorisParser.supportedLoadStatement`.
     * @param ctx the parse tree
     */
    exitCreateRoutineLoadAlias?: (ctx: CreateRoutineLoadAliasContext) => void;
    /**
     * Enter a parse tree produced by the `help`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     */
    enterHelp?: (ctx: HelpContext) => void;
    /**
     * Exit a parse tree produced by the `help`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     */
    exitHelp?: (ctx: HelpContext) => void;
    /**
     * Enter a parse tree produced by the `installPlugin`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     */
    enterInstallPlugin?: (ctx: InstallPluginContext) => void;
    /**
     * Exit a parse tree produced by the `installPlugin`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     */
    exitInstallPlugin?: (ctx: InstallPluginContext) => void;
    /**
     * Enter a parse tree produced by the `uninstallPlugin`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     */
    enterUninstallPlugin?: (ctx: UninstallPluginContext) => void;
    /**
     * Exit a parse tree produced by the `uninstallPlugin`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     */
    exitUninstallPlugin?: (ctx: UninstallPluginContext) => void;
    /**
     * Enter a parse tree produced by the `lockTables`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     */
    enterLockTables?: (ctx: LockTablesContext) => void;
    /**
     * Exit a parse tree produced by the `lockTables`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     */
    exitLockTables?: (ctx: LockTablesContext) => void;
    /**
     * Enter a parse tree produced by the `unlockTables`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     */
    enterUnlockTables?: (ctx: UnlockTablesContext) => void;
    /**
     * Exit a parse tree produced by the `unlockTables`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     */
    exitUnlockTables?: (ctx: UnlockTablesContext) => void;
    /**
     * Enter a parse tree produced by the `warmUpCluster`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     */
    enterWarmUpCluster?: (ctx: WarmUpClusterContext) => void;
    /**
     * Exit a parse tree produced by the `warmUpCluster`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     */
    exitWarmUpCluster?: (ctx: WarmUpClusterContext) => void;
    /**
     * Enter a parse tree produced by the `backup`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     */
    enterBackup?: (ctx: BackupContext) => void;
    /**
     * Exit a parse tree produced by the `backup`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     */
    exitBackup?: (ctx: BackupContext) => void;
    /**
     * Enter a parse tree produced by the `restore`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     */
    enterRestore?: (ctx: RestoreContext) => void;
    /**
     * Exit a parse tree produced by the `restore`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     */
    exitRestore?: (ctx: RestoreContext) => void;
    /**
     * Enter a parse tree produced by the `unsupportedStartTransaction`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     */
    enterUnsupportedStartTransaction?: (ctx: UnsupportedStartTransactionContext) => void;
    /**
     * Exit a parse tree produced by the `unsupportedStartTransaction`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     */
    exitUnsupportedStartTransaction?: (ctx: UnsupportedStartTransactionContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.warmUpItem`.
     * @param ctx the parse tree
     */
    enterWarmUpItem?: (ctx: WarmUpItemContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.warmUpItem`.
     * @param ctx the parse tree
     */
    exitWarmUpItem?: (ctx: WarmUpItemContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.lockTable`.
     * @param ctx the parse tree
     */
    enterLockTable?: (ctx: LockTableContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.lockTable`.
     * @param ctx the parse tree
     */
    exitLockTable?: (ctx: LockTableContext) => void;
    /**
     * Enter a parse tree produced by the `showRowPolicy`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowRowPolicy?: (ctx: ShowRowPolicyContext) => void;
    /**
     * Exit a parse tree produced by the `showRowPolicy`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowRowPolicy?: (ctx: ShowRowPolicyContext) => void;
    /**
     * Enter a parse tree produced by the `showStoragePolicy`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowStoragePolicy?: (ctx: ShowStoragePolicyContext) => void;
    /**
     * Exit a parse tree produced by the `showStoragePolicy`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowStoragePolicy?: (ctx: ShowStoragePolicyContext) => void;
    /**
     * Enter a parse tree produced by the `showStages`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowStages?: (ctx: ShowStagesContext) => void;
    /**
     * Exit a parse tree produced by the `showStages`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowStages?: (ctx: ShowStagesContext) => void;
    /**
     * Enter a parse tree produced by the `showStorageVault`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowStorageVault?: (ctx: ShowStorageVaultContext) => void;
    /**
     * Exit a parse tree produced by the `showStorageVault`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowStorageVault?: (ctx: ShowStorageVaultContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateRepository`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowCreateRepository?: (ctx: ShowCreateRepositoryContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateRepository`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowCreateRepository?: (ctx: ShowCreateRepositoryContext) => void;
    /**
     * Enter a parse tree produced by the `showOpenTables`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowOpenTables?: (ctx: ShowOpenTablesContext) => void;
    /**
     * Exit a parse tree produced by the `showOpenTables`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowOpenTables?: (ctx: ShowOpenTablesContext) => void;
    /**
     * Enter a parse tree produced by the `showTableStatus`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowTableStatus?: (ctx: ShowTableStatusContext) => void;
    /**
     * Exit a parse tree produced by the `showTableStatus`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowTableStatus?: (ctx: ShowTableStatusContext) => void;
    /**
     * Enter a parse tree produced by the `showTables`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowTables?: (ctx: ShowTablesContext) => void;
    /**
     * Exit a parse tree produced by the `showTables`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowTables?: (ctx: ShowTablesContext) => void;
    /**
     * Enter a parse tree produced by the `showViews`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowViews?: (ctx: ShowViewsContext) => void;
    /**
     * Exit a parse tree produced by the `showViews`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowViews?: (ctx: ShowViewsContext) => void;
    /**
     * Enter a parse tree produced by the `showProcessList`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowProcessList?: (ctx: ShowProcessListContext) => void;
    /**
     * Exit a parse tree produced by the `showProcessList`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowProcessList?: (ctx: ShowProcessListContext) => void;
    /**
     * Enter a parse tree produced by the `showStatus`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowStatus?: (ctx: ShowStatusContext) => void;
    /**
     * Exit a parse tree produced by the `showStatus`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowStatus?: (ctx: ShowStatusContext) => void;
    /**
     * Enter a parse tree produced by the `showMaterializedView`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowMaterializedView?: (ctx: ShowMaterializedViewContext) => void;
    /**
     * Exit a parse tree produced by the `showMaterializedView`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowMaterializedView?: (ctx: ShowMaterializedViewContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateDatabase`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowCreateDatabase?: (ctx: ShowCreateDatabaseContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateDatabase`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowCreateDatabase?: (ctx: ShowCreateDatabaseContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateFunction`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowCreateFunction?: (ctx: ShowCreateFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateFunction`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowCreateFunction?: (ctx: ShowCreateFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `showDatabases`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowDatabases?: (ctx: ShowDatabasesContext) => void;
    /**
     * Exit a parse tree produced by the `showDatabases`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowDatabases?: (ctx: ShowDatabasesContext) => void;
    /**
     * Enter a parse tree produced by the `showDatabaseId`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowDatabaseId?: (ctx: ShowDatabaseIdContext) => void;
    /**
     * Exit a parse tree produced by the `showDatabaseId`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowDatabaseId?: (ctx: ShowDatabaseIdContext) => void;
    /**
     * Enter a parse tree produced by the `showDataTypes`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowDataTypes?: (ctx: ShowDataTypesContext) => void;
    /**
     * Exit a parse tree produced by the `showDataTypes`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowDataTypes?: (ctx: ShowDataTypesContext) => void;
    /**
     * Enter a parse tree produced by the `showCatalogs`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowCatalogs?: (ctx: ShowCatalogsContext) => void;
    /**
     * Exit a parse tree produced by the `showCatalogs`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowCatalogs?: (ctx: ShowCatalogsContext) => void;
    /**
     * Enter a parse tree produced by the `showCatalog`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowCatalog?: (ctx: ShowCatalogContext) => void;
    /**
     * Exit a parse tree produced by the `showCatalog`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowCatalog?: (ctx: ShowCatalogContext) => void;
    /**
     * Enter a parse tree produced by the `showColumns`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowColumns?: (ctx: ShowColumnsContext) => void;
    /**
     * Exit a parse tree produced by the `showColumns`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowColumns?: (ctx: ShowColumnsContext) => void;
    /**
     * Enter a parse tree produced by the `showCollation`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowCollation?: (ctx: ShowCollationContext) => void;
    /**
     * Exit a parse tree produced by the `showCollation`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowCollation?: (ctx: ShowCollationContext) => void;
    /**
     * Enter a parse tree produced by the `showCharset`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowCharset?: (ctx: ShowCharsetContext) => void;
    /**
     * Exit a parse tree produced by the `showCharset`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowCharset?: (ctx: ShowCharsetContext) => void;
    /**
     * Enter a parse tree produced by the `showWaringErrorCount`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowWaringErrorCount?: (ctx: ShowWaringErrorCountContext) => void;
    /**
     * Exit a parse tree produced by the `showWaringErrorCount`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowWaringErrorCount?: (ctx: ShowWaringErrorCountContext) => void;
    /**
     * Enter a parse tree produced by the `showWaringErrors`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowWaringErrors?: (ctx: ShowWaringErrorsContext) => void;
    /**
     * Exit a parse tree produced by the `showWaringErrors`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowWaringErrors?: (ctx: ShowWaringErrorsContext) => void;
    /**
     * Enter a parse tree produced by the `showLoadWarings`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowLoadWarings?: (ctx: ShowLoadWaringsContext) => void;
    /**
     * Exit a parse tree produced by the `showLoadWarings`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowLoadWarings?: (ctx: ShowLoadWaringsContext) => void;
    /**
     * Enter a parse tree produced by the `showLoad`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowLoad?: (ctx: ShowLoadContext) => void;
    /**
     * Exit a parse tree produced by the `showLoad`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowLoad?: (ctx: ShowLoadContext) => void;
    /**
     * Enter a parse tree produced by the `showExport`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowExport?: (ctx: ShowExportContext) => void;
    /**
     * Exit a parse tree produced by the `showExport`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowExport?: (ctx: ShowExportContext) => void;
    /**
     * Enter a parse tree produced by the `showAlterTable`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowAlterTable?: (ctx: ShowAlterTableContext) => void;
    /**
     * Exit a parse tree produced by the `showAlterTable`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowAlterTable?: (ctx: ShowAlterTableContext) => void;
    /**
     * Enter a parse tree produced by the `showDataSkew`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowDataSkew?: (ctx: ShowDataSkewContext) => void;
    /**
     * Exit a parse tree produced by the `showDataSkew`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowDataSkew?: (ctx: ShowDataSkewContext) => void;
    /**
     * Enter a parse tree produced by the `showData`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowData?: (ctx: ShowDataContext) => void;
    /**
     * Exit a parse tree produced by the `showData`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowData?: (ctx: ShowDataContext) => void;
    /**
     * Enter a parse tree produced by the `showPartitions`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowPartitions?: (ctx: ShowPartitionsContext) => void;
    /**
     * Exit a parse tree produced by the `showPartitions`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowPartitions?: (ctx: ShowPartitionsContext) => void;
    /**
     * Enter a parse tree produced by the `showTabletId`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowTabletId?: (ctx: ShowTabletIdContext) => void;
    /**
     * Exit a parse tree produced by the `showTabletId`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowTabletId?: (ctx: ShowTabletIdContext) => void;
    /**
     * Enter a parse tree produced by the `showTabletsFromTable`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowTabletsFromTable?: (ctx: ShowTabletsFromTableContext) => void;
    /**
     * Exit a parse tree produced by the `showTabletsFromTable`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowTabletsFromTable?: (ctx: ShowTabletsFromTableContext) => void;
    /**
     * Enter a parse tree produced by the `showUserProperties`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowUserProperties?: (ctx: ShowUserPropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `showUserProperties`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowUserProperties?: (ctx: ShowUserPropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `showAllProperties`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowAllProperties?: (ctx: ShowAllPropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `showAllProperties`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowAllProperties?: (ctx: ShowAllPropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `showBackup`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowBackup?: (ctx: ShowBackupContext) => void;
    /**
     * Exit a parse tree produced by the `showBackup`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowBackup?: (ctx: ShowBackupContext) => void;
    /**
     * Enter a parse tree produced by the `showRestore`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowRestore?: (ctx: ShowRestoreContext) => void;
    /**
     * Exit a parse tree produced by the `showRestore`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowRestore?: (ctx: ShowRestoreContext) => void;
    /**
     * Enter a parse tree produced by the `showResources`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowResources?: (ctx: ShowResourcesContext) => void;
    /**
     * Exit a parse tree produced by the `showResources`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowResources?: (ctx: ShowResourcesContext) => void;
    /**
     * Enter a parse tree produced by the `showWorkloadGroups`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowWorkloadGroups?: (ctx: ShowWorkloadGroupsContext) => void;
    /**
     * Exit a parse tree produced by the `showWorkloadGroups`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowWorkloadGroups?: (ctx: ShowWorkloadGroupsContext) => void;
    /**
     * Enter a parse tree produced by the `showTrash`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowTrash?: (ctx: ShowTrashContext) => void;
    /**
     * Exit a parse tree produced by the `showTrash`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowTrash?: (ctx: ShowTrashContext) => void;
    /**
     * Enter a parse tree produced by the `showSnapshot`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowSnapshot?: (ctx: ShowSnapshotContext) => void;
    /**
     * Exit a parse tree produced by the `showSnapshot`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowSnapshot?: (ctx: ShowSnapshotContext) => void;
    /**
     * Enter a parse tree produced by the `showFunctions`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowFunctions?: (ctx: ShowFunctionsContext) => void;
    /**
     * Exit a parse tree produced by the `showFunctions`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowFunctions?: (ctx: ShowFunctionsContext) => void;
    /**
     * Enter a parse tree produced by the `showGlobalFunctions`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowGlobalFunctions?: (ctx: ShowGlobalFunctionsContext) => void;
    /**
     * Exit a parse tree produced by the `showGlobalFunctions`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowGlobalFunctions?: (ctx: ShowGlobalFunctionsContext) => void;
    /**
     * Enter a parse tree produced by the `showTypeCast`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowTypeCast?: (ctx: ShowTypeCastContext) => void;
    /**
     * Exit a parse tree produced by the `showTypeCast`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowTypeCast?: (ctx: ShowTypeCastContext) => void;
    /**
     * Enter a parse tree produced by the `showIndex`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowIndex?: (ctx: ShowIndexContext) => void;
    /**
     * Exit a parse tree produced by the `showIndex`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowIndex?: (ctx: ShowIndexContext) => void;
    /**
     * Enter a parse tree produced by the `showTransaction`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowTransaction?: (ctx: ShowTransactionContext) => void;
    /**
     * Exit a parse tree produced by the `showTransaction`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowTransaction?: (ctx: ShowTransactionContext) => void;
    /**
     * Enter a parse tree produced by the `showQueryProfile`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowQueryProfile?: (ctx: ShowQueryProfileContext) => void;
    /**
     * Exit a parse tree produced by the `showQueryProfile`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowQueryProfile?: (ctx: ShowQueryProfileContext) => void;
    /**
     * Enter a parse tree produced by the `showCacheHotSpot`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowCacheHotSpot?: (ctx: ShowCacheHotSpotContext) => void;
    /**
     * Exit a parse tree produced by the `showCacheHotSpot`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowCacheHotSpot?: (ctx: ShowCacheHotSpotContext) => void;
    /**
     * Enter a parse tree produced by the `showEncryptKeys`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowEncryptKeys?: (ctx: ShowEncryptKeysContext) => void;
    /**
     * Exit a parse tree produced by the `showEncryptKeys`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowEncryptKeys?: (ctx: ShowEncryptKeysContext) => void;
    /**
     * Enter a parse tree produced by the `showSyncJob`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowSyncJob?: (ctx: ShowSyncJobContext) => void;
    /**
     * Exit a parse tree produced by the `showSyncJob`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowSyncJob?: (ctx: ShowSyncJobContext) => void;
    /**
     * Enter a parse tree produced by the `showTableCreation`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowTableCreation?: (ctx: ShowTableCreationContext) => void;
    /**
     * Exit a parse tree produced by the `showTableCreation`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowTableCreation?: (ctx: ShowTableCreationContext) => void;
    /**
     * Enter a parse tree produced by the `showCatalogRecycleBin`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowCatalogRecycleBin?: (ctx: ShowCatalogRecycleBinContext) => void;
    /**
     * Exit a parse tree produced by the `showCatalogRecycleBin`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowCatalogRecycleBin?: (ctx: ShowCatalogRecycleBinContext) => void;
    /**
     * Enter a parse tree produced by the `showQueryStats`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowQueryStats?: (ctx: ShowQueryStatsContext) => void;
    /**
     * Exit a parse tree produced by the `showQueryStats`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowQueryStats?: (ctx: ShowQueryStatsContext) => void;
    /**
     * Enter a parse tree produced by the `showBuildIndex`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowBuildIndex?: (ctx: ShowBuildIndexContext) => void;
    /**
     * Exit a parse tree produced by the `showBuildIndex`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowBuildIndex?: (ctx: ShowBuildIndexContext) => void;
    /**
     * Enter a parse tree produced by the `showClusters`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowClusters?: (ctx: ShowClustersContext) => void;
    /**
     * Exit a parse tree produced by the `showClusters`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowClusters?: (ctx: ShowClustersContext) => void;
    /**
     * Enter a parse tree produced by the `showConvertLsc`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowConvertLsc?: (ctx: ShowConvertLscContext) => void;
    /**
     * Exit a parse tree produced by the `showConvertLsc`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowConvertLsc?: (ctx: ShowConvertLscContext) => void;
    /**
     * Enter a parse tree produced by the `showReplicaStatus`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowReplicaStatus?: (ctx: ShowReplicaStatusContext) => void;
    /**
     * Exit a parse tree produced by the `showReplicaStatus`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowReplicaStatus?: (ctx: ShowReplicaStatusContext) => void;
    /**
     * Enter a parse tree produced by the `showTabletStorageFormat`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowTabletStorageFormat?: (ctx: ShowTabletStorageFormatContext) => void;
    /**
     * Exit a parse tree produced by the `showTabletStorageFormat`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowTabletStorageFormat?: (ctx: ShowTabletStorageFormatContext) => void;
    /**
     * Enter a parse tree produced by the `showCopy`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowCopy?: (ctx: ShowCopyContext) => void;
    /**
     * Exit a parse tree produced by the `showCopy`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowCopy?: (ctx: ShowCopyContext) => void;
    /**
     * Enter a parse tree produced by the `showWarmUpJob`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    enterShowWarmUpJob?: (ctx: ShowWarmUpJobContext) => void;
    /**
     * Exit a parse tree produced by the `showWarmUpJob`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     */
    exitShowWarmUpJob?: (ctx: ShowWarmUpJobContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.createRoutineLoad`.
     * @param ctx the parse tree
     */
    enterCreateRoutineLoad?: (ctx: CreateRoutineLoadContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.createRoutineLoad`.
     * @param ctx the parse tree
     */
    exitCreateRoutineLoad?: (ctx: CreateRoutineLoadContext) => void;
    /**
     * Enter a parse tree produced by the `mysqlLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    enterMysqlLoad?: (ctx: MysqlLoadContext) => void;
    /**
     * Exit a parse tree produced by the `mysqlLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    exitMysqlLoad?: (ctx: MysqlLoadContext) => void;
    /**
     * Enter a parse tree produced by the `createDataSyncJob`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    enterCreateDataSyncJob?: (ctx: CreateDataSyncJobContext) => void;
    /**
     * Exit a parse tree produced by the `createDataSyncJob`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    exitCreateDataSyncJob?: (ctx: CreateDataSyncJobContext) => void;
    /**
     * Enter a parse tree produced by the `stopDataSyncJob`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    enterStopDataSyncJob?: (ctx: StopDataSyncJobContext) => void;
    /**
     * Exit a parse tree produced by the `stopDataSyncJob`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    exitStopDataSyncJob?: (ctx: StopDataSyncJobContext) => void;
    /**
     * Enter a parse tree produced by the `resumeDataSyncJob`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    enterResumeDataSyncJob?: (ctx: ResumeDataSyncJobContext) => void;
    /**
     * Exit a parse tree produced by the `resumeDataSyncJob`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    exitResumeDataSyncJob?: (ctx: ResumeDataSyncJobContext) => void;
    /**
     * Enter a parse tree produced by the `pauseDataSyncJob`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    enterPauseDataSyncJob?: (ctx: PauseDataSyncJobContext) => void;
    /**
     * Exit a parse tree produced by the `pauseDataSyncJob`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    exitPauseDataSyncJob?: (ctx: PauseDataSyncJobContext) => void;
    /**
     * Enter a parse tree produced by the `pauseRoutineLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    enterPauseRoutineLoad?: (ctx: PauseRoutineLoadContext) => void;
    /**
     * Exit a parse tree produced by the `pauseRoutineLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    exitPauseRoutineLoad?: (ctx: PauseRoutineLoadContext) => void;
    /**
     * Enter a parse tree produced by the `pauseAllRoutineLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    enterPauseAllRoutineLoad?: (ctx: PauseAllRoutineLoadContext) => void;
    /**
     * Exit a parse tree produced by the `pauseAllRoutineLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    exitPauseAllRoutineLoad?: (ctx: PauseAllRoutineLoadContext) => void;
    /**
     * Enter a parse tree produced by the `resumeRoutineLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    enterResumeRoutineLoad?: (ctx: ResumeRoutineLoadContext) => void;
    /**
     * Exit a parse tree produced by the `resumeRoutineLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    exitResumeRoutineLoad?: (ctx: ResumeRoutineLoadContext) => void;
    /**
     * Enter a parse tree produced by the `resumeAllRoutineLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    enterResumeAllRoutineLoad?: (ctx: ResumeAllRoutineLoadContext) => void;
    /**
     * Exit a parse tree produced by the `resumeAllRoutineLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    exitResumeAllRoutineLoad?: (ctx: ResumeAllRoutineLoadContext) => void;
    /**
     * Enter a parse tree produced by the `stopRoutineLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    enterStopRoutineLoad?: (ctx: StopRoutineLoadContext) => void;
    /**
     * Exit a parse tree produced by the `stopRoutineLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    exitStopRoutineLoad?: (ctx: StopRoutineLoadContext) => void;
    /**
     * Enter a parse tree produced by the `showRoutineLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    enterShowRoutineLoad?: (ctx: ShowRoutineLoadContext) => void;
    /**
     * Exit a parse tree produced by the `showRoutineLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    exitShowRoutineLoad?: (ctx: ShowRoutineLoadContext) => void;
    /**
     * Enter a parse tree produced by the `showRoutineLoadTask`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    enterShowRoutineLoadTask?: (ctx: ShowRoutineLoadTaskContext) => void;
    /**
     * Exit a parse tree produced by the `showRoutineLoadTask`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    exitShowRoutineLoadTask?: (ctx: ShowRoutineLoadTaskContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateRoutineLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    enterShowCreateRoutineLoad?: (ctx: ShowCreateRoutineLoadContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateRoutineLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    exitShowCreateRoutineLoad?: (ctx: ShowCreateRoutineLoadContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    enterShowCreateLoad?: (ctx: ShowCreateLoadContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     */
    exitShowCreateLoad?: (ctx: ShowCreateLoadContext) => void;
    /**
     * Enter a parse tree produced by the `separator`
     * labeled alternative in `DorisParser.loadProperty`.
     * @param ctx the parse tree
     */
    enterSeparator?: (ctx: SeparatorContext) => void;
    /**
     * Exit a parse tree produced by the `separator`
     * labeled alternative in `DorisParser.loadProperty`.
     * @param ctx the parse tree
     */
    exitSeparator?: (ctx: SeparatorContext) => void;
    /**
     * Enter a parse tree produced by the `importColumns`
     * labeled alternative in `DorisParser.loadProperty`.
     * @param ctx the parse tree
     */
    enterImportColumns?: (ctx: ImportColumnsContext) => void;
    /**
     * Exit a parse tree produced by the `importColumns`
     * labeled alternative in `DorisParser.loadProperty`.
     * @param ctx the parse tree
     */
    exitImportColumns?: (ctx: ImportColumnsContext) => void;
    /**
     * Enter a parse tree produced by the `importPrecedingFilter`
     * labeled alternative in `DorisParser.loadProperty`.
     * @param ctx the parse tree
     */
    enterImportPrecedingFilter?: (ctx: ImportPrecedingFilterContext) => void;
    /**
     * Exit a parse tree produced by the `importPrecedingFilter`
     * labeled alternative in `DorisParser.loadProperty`.
     * @param ctx the parse tree
     */
    exitImportPrecedingFilter?: (ctx: ImportPrecedingFilterContext) => void;
    /**
     * Enter a parse tree produced by the `importWhere`
     * labeled alternative in `DorisParser.loadProperty`.
     * @param ctx the parse tree
     */
    enterImportWhere?: (ctx: ImportWhereContext) => void;
    /**
     * Exit a parse tree produced by the `importWhere`
     * labeled alternative in `DorisParser.loadProperty`.
     * @param ctx the parse tree
     */
    exitImportWhere?: (ctx: ImportWhereContext) => void;
    /**
     * Enter a parse tree produced by the `importDeleteOn`
     * labeled alternative in `DorisParser.loadProperty`.
     * @param ctx the parse tree
     */
    enterImportDeleteOn?: (ctx: ImportDeleteOnContext) => void;
    /**
     * Exit a parse tree produced by the `importDeleteOn`
     * labeled alternative in `DorisParser.loadProperty`.
     * @param ctx the parse tree
     */
    exitImportDeleteOn?: (ctx: ImportDeleteOnContext) => void;
    /**
     * Enter a parse tree produced by the `importSequence`
     * labeled alternative in `DorisParser.loadProperty`.
     * @param ctx the parse tree
     */
    enterImportSequence?: (ctx: ImportSequenceContext) => void;
    /**
     * Exit a parse tree produced by the `importSequence`
     * labeled alternative in `DorisParser.loadProperty`.
     * @param ctx the parse tree
     */
    exitImportSequence?: (ctx: ImportSequenceContext) => void;
    /**
     * Enter a parse tree produced by the `importPartitions`
     * labeled alternative in `DorisParser.loadProperty`.
     * @param ctx the parse tree
     */
    enterImportPartitions?: (ctx: ImportPartitionsContext) => void;
    /**
     * Exit a parse tree produced by the `importPartitions`
     * labeled alternative in `DorisParser.loadProperty`.
     * @param ctx the parse tree
     */
    exitImportPartitions?: (ctx: ImportPartitionsContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.importSequenceStatement`.
     * @param ctx the parse tree
     */
    enterImportSequenceStatement?: (ctx: ImportSequenceStatementContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.importSequenceStatement`.
     * @param ctx the parse tree
     */
    exitImportSequenceStatement?: (ctx: ImportSequenceStatementContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.importDeleteOnStatement`.
     * @param ctx the parse tree
     */
    enterImportDeleteOnStatement?: (ctx: ImportDeleteOnStatementContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.importDeleteOnStatement`.
     * @param ctx the parse tree
     */
    exitImportDeleteOnStatement?: (ctx: ImportDeleteOnStatementContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.importWhereStatement`.
     * @param ctx the parse tree
     */
    enterImportWhereStatement?: (ctx: ImportWhereStatementContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.importWhereStatement`.
     * @param ctx the parse tree
     */
    exitImportWhereStatement?: (ctx: ImportWhereStatementContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.importPrecedingFilterStatement`.
     * @param ctx the parse tree
     */
    enterImportPrecedingFilterStatement?: (ctx: ImportPrecedingFilterStatementContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.importPrecedingFilterStatement`.
     * @param ctx the parse tree
     */
    exitImportPrecedingFilterStatement?: (ctx: ImportPrecedingFilterStatementContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.importColumnsStatement`.
     * @param ctx the parse tree
     */
    enterImportColumnsStatement?: (ctx: ImportColumnsStatementContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.importColumnsStatement`.
     * @param ctx the parse tree
     */
    exitImportColumnsStatement?: (ctx: ImportColumnsStatementContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.importColumnDesc`.
     * @param ctx the parse tree
     */
    enterImportColumnDesc?: (ctx: ImportColumnDescContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.importColumnDesc`.
     * @param ctx the parse tree
     */
    exitImportColumnDesc?: (ctx: ImportColumnDescContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.channelDescriptions`.
     * @param ctx the parse tree
     */
    enterChannelDescriptions?: (ctx: ChannelDescriptionsContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.channelDescriptions`.
     * @param ctx the parse tree
     */
    exitChannelDescriptions?: (ctx: ChannelDescriptionsContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.channelDescription`.
     * @param ctx the parse tree
     */
    enterChannelDescription?: (ctx: ChannelDescriptionContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.channelDescription`.
     * @param ctx the parse tree
     */
    exitChannelDescription?: (ctx: ChannelDescriptionContext) => void;
    /**
     * Enter a parse tree produced by the `refreshCatalog`
     * labeled alternative in `DorisParser.supportedRefreshStatement`.
     * @param ctx the parse tree
     */
    enterRefreshCatalog?: (ctx: RefreshCatalogContext) => void;
    /**
     * Exit a parse tree produced by the `refreshCatalog`
     * labeled alternative in `DorisParser.supportedRefreshStatement`.
     * @param ctx the parse tree
     */
    exitRefreshCatalog?: (ctx: RefreshCatalogContext) => void;
    /**
     * Enter a parse tree produced by the `cleanAllProfile`
     * labeled alternative in `DorisParser.supportedCleanStatement`.
     * @param ctx the parse tree
     */
    enterCleanAllProfile?: (ctx: CleanAllProfileContext) => void;
    /**
     * Exit a parse tree produced by the `cleanAllProfile`
     * labeled alternative in `DorisParser.supportedCleanStatement`.
     * @param ctx the parse tree
     */
    exitCleanAllProfile?: (ctx: CleanAllProfileContext) => void;
    /**
     * Enter a parse tree produced by the `refreshTable`
     * labeled alternative in `DorisParser.unsupportedRefreshStatement`.
     * @param ctx the parse tree
     */
    enterRefreshTable?: (ctx: RefreshTableContext) => void;
    /**
     * Exit a parse tree produced by the `refreshTable`
     * labeled alternative in `DorisParser.unsupportedRefreshStatement`.
     * @param ctx the parse tree
     */
    exitRefreshTable?: (ctx: RefreshTableContext) => void;
    /**
     * Enter a parse tree produced by the `refreshDatabase`
     * labeled alternative in `DorisParser.unsupportedRefreshStatement`.
     * @param ctx the parse tree
     */
    enterRefreshDatabase?: (ctx: RefreshDatabaseContext) => void;
    /**
     * Exit a parse tree produced by the `refreshDatabase`
     * labeled alternative in `DorisParser.unsupportedRefreshStatement`.
     * @param ctx the parse tree
     */
    exitRefreshDatabase?: (ctx: RefreshDatabaseContext) => void;
    /**
     * Enter a parse tree produced by the `refreshLdap`
     * labeled alternative in `DorisParser.unsupportedRefreshStatement`.
     * @param ctx the parse tree
     */
    enterRefreshLdap?: (ctx: RefreshLdapContext) => void;
    /**
     * Exit a parse tree produced by the `refreshLdap`
     * labeled alternative in `DorisParser.unsupportedRefreshStatement`.
     * @param ctx the parse tree
     */
    exitRefreshLdap?: (ctx: RefreshLdapContext) => void;
    /**
     * Enter a parse tree produced by the `cleanLabel`
     * labeled alternative in `DorisParser.unsupportedCleanStatement`.
     * @param ctx the parse tree
     */
    enterCleanLabel?: (ctx: CleanLabelContext) => void;
    /**
     * Exit a parse tree produced by the `cleanLabel`
     * labeled alternative in `DorisParser.unsupportedCleanStatement`.
     * @param ctx the parse tree
     */
    exitCleanLabel?: (ctx: CleanLabelContext) => void;
    /**
     * Enter a parse tree produced by the `cleanQueryStats`
     * labeled alternative in `DorisParser.unsupportedCleanStatement`.
     * @param ctx the parse tree
     */
    enterCleanQueryStats?: (ctx: CleanQueryStatsContext) => void;
    /**
     * Exit a parse tree produced by the `cleanQueryStats`
     * labeled alternative in `DorisParser.unsupportedCleanStatement`.
     * @param ctx the parse tree
     */
    exitCleanQueryStats?: (ctx: CleanQueryStatsContext) => void;
    /**
     * Enter a parse tree produced by the `cleanAllQueryStats`
     * labeled alternative in `DorisParser.unsupportedCleanStatement`.
     * @param ctx the parse tree
     */
    enterCleanAllQueryStats?: (ctx: CleanAllQueryStatsContext) => void;
    /**
     * Exit a parse tree produced by the `cleanAllQueryStats`
     * labeled alternative in `DorisParser.unsupportedCleanStatement`.
     * @param ctx the parse tree
     */
    exitCleanAllQueryStats?: (ctx: CleanAllQueryStatsContext) => void;
    /**
     * Enter a parse tree produced by the `cancelLoad`
     * labeled alternative in `DorisParser.supportedCancelStatement`.
     * @param ctx the parse tree
     */
    enterCancelLoad?: (ctx: CancelLoadContext) => void;
    /**
     * Exit a parse tree produced by the `cancelLoad`
     * labeled alternative in `DorisParser.supportedCancelStatement`.
     * @param ctx the parse tree
     */
    exitCancelLoad?: (ctx: CancelLoadContext) => void;
    /**
     * Enter a parse tree produced by the `cancelExport`
     * labeled alternative in `DorisParser.supportedCancelStatement`.
     * @param ctx the parse tree
     */
    enterCancelExport?: (ctx: CancelExportContext) => void;
    /**
     * Exit a parse tree produced by the `cancelExport`
     * labeled alternative in `DorisParser.supportedCancelStatement`.
     * @param ctx the parse tree
     */
    exitCancelExport?: (ctx: CancelExportContext) => void;
    /**
     * Enter a parse tree produced by the `cancelWarmUpJob`
     * labeled alternative in `DorisParser.supportedCancelStatement`.
     * @param ctx the parse tree
     */
    enterCancelWarmUpJob?: (ctx: CancelWarmUpJobContext) => void;
    /**
     * Exit a parse tree produced by the `cancelWarmUpJob`
     * labeled alternative in `DorisParser.supportedCancelStatement`.
     * @param ctx the parse tree
     */
    exitCancelWarmUpJob?: (ctx: CancelWarmUpJobContext) => void;
    /**
     * Enter a parse tree produced by the `cancelAlterTable`
     * labeled alternative in `DorisParser.unsupportedCancelStatement`.
     * @param ctx the parse tree
     */
    enterCancelAlterTable?: (ctx: CancelAlterTableContext) => void;
    /**
     * Exit a parse tree produced by the `cancelAlterTable`
     * labeled alternative in `DorisParser.unsupportedCancelStatement`.
     * @param ctx the parse tree
     */
    exitCancelAlterTable?: (ctx: CancelAlterTableContext) => void;
    /**
     * Enter a parse tree produced by the `cancelBuildIndex`
     * labeled alternative in `DorisParser.unsupportedCancelStatement`.
     * @param ctx the parse tree
     */
    enterCancelBuildIndex?: (ctx: CancelBuildIndexContext) => void;
    /**
     * Exit a parse tree produced by the `cancelBuildIndex`
     * labeled alternative in `DorisParser.unsupportedCancelStatement`.
     * @param ctx the parse tree
     */
    exitCancelBuildIndex?: (ctx: CancelBuildIndexContext) => void;
    /**
     * Enter a parse tree produced by the `cancelDecommisionBackend`
     * labeled alternative in `DorisParser.unsupportedCancelStatement`.
     * @param ctx the parse tree
     */
    enterCancelDecommisionBackend?: (ctx: CancelDecommisionBackendContext) => void;
    /**
     * Exit a parse tree produced by the `cancelDecommisionBackend`
     * labeled alternative in `DorisParser.unsupportedCancelStatement`.
     * @param ctx the parse tree
     */
    exitCancelDecommisionBackend?: (ctx: CancelDecommisionBackendContext) => void;
    /**
     * Enter a parse tree produced by the `cancelBackup`
     * labeled alternative in `DorisParser.unsupportedCancelStatement`.
     * @param ctx the parse tree
     */
    enterCancelBackup?: (ctx: CancelBackupContext) => void;
    /**
     * Exit a parse tree produced by the `cancelBackup`
     * labeled alternative in `DorisParser.unsupportedCancelStatement`.
     * @param ctx the parse tree
     */
    exitCancelBackup?: (ctx: CancelBackupContext) => void;
    /**
     * Enter a parse tree produced by the `cancelRestore`
     * labeled alternative in `DorisParser.unsupportedCancelStatement`.
     * @param ctx the parse tree
     */
    enterCancelRestore?: (ctx: CancelRestoreContext) => void;
    /**
     * Exit a parse tree produced by the `cancelRestore`
     * labeled alternative in `DorisParser.unsupportedCancelStatement`.
     * @param ctx the parse tree
     */
    exitCancelRestore?: (ctx: CancelRestoreContext) => void;
    /**
     * Enter a parse tree produced by the `adminShowReplicaDistribution`
     * labeled alternative in `DorisParser.supportedAdminStatement`.
     * @param ctx the parse tree
     */
    enterAdminShowReplicaDistribution?: (ctx: AdminShowReplicaDistributionContext) => void;
    /**
     * Exit a parse tree produced by the `adminShowReplicaDistribution`
     * labeled alternative in `DorisParser.supportedAdminStatement`.
     * @param ctx the parse tree
     */
    exitAdminShowReplicaDistribution?: (ctx: AdminShowReplicaDistributionContext) => void;
    /**
     * Enter a parse tree produced by the `recoverDatabase`
     * labeled alternative in `DorisParser.supportedRecoverStatement`.
     * @param ctx the parse tree
     */
    enterRecoverDatabase?: (ctx: RecoverDatabaseContext) => void;
    /**
     * Exit a parse tree produced by the `recoverDatabase`
     * labeled alternative in `DorisParser.supportedRecoverStatement`.
     * @param ctx the parse tree
     */
    exitRecoverDatabase?: (ctx: RecoverDatabaseContext) => void;
    /**
     * Enter a parse tree produced by the `recoverTable`
     * labeled alternative in `DorisParser.supportedRecoverStatement`.
     * @param ctx the parse tree
     */
    enterRecoverTable?: (ctx: RecoverTableContext) => void;
    /**
     * Exit a parse tree produced by the `recoverTable`
     * labeled alternative in `DorisParser.supportedRecoverStatement`.
     * @param ctx the parse tree
     */
    exitRecoverTable?: (ctx: RecoverTableContext) => void;
    /**
     * Enter a parse tree produced by the `recoverPartition`
     * labeled alternative in `DorisParser.supportedRecoverStatement`.
     * @param ctx the parse tree
     */
    enterRecoverPartition?: (ctx: RecoverPartitionContext) => void;
    /**
     * Exit a parse tree produced by the `recoverPartition`
     * labeled alternative in `DorisParser.supportedRecoverStatement`.
     * @param ctx the parse tree
     */
    exitRecoverPartition?: (ctx: RecoverPartitionContext) => void;
    /**
     * Enter a parse tree produced by the `adminShowReplicaStatus`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    enterAdminShowReplicaStatus?: (ctx: AdminShowReplicaStatusContext) => void;
    /**
     * Exit a parse tree produced by the `adminShowReplicaStatus`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    exitAdminShowReplicaStatus?: (ctx: AdminShowReplicaStatusContext) => void;
    /**
     * Enter a parse tree produced by the `adminSetReplicaStatus`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    enterAdminSetReplicaStatus?: (ctx: AdminSetReplicaStatusContext) => void;
    /**
     * Exit a parse tree produced by the `adminSetReplicaStatus`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    exitAdminSetReplicaStatus?: (ctx: AdminSetReplicaStatusContext) => void;
    /**
     * Enter a parse tree produced by the `adminSetReplicaVersion`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    enterAdminSetReplicaVersion?: (ctx: AdminSetReplicaVersionContext) => void;
    /**
     * Exit a parse tree produced by the `adminSetReplicaVersion`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    exitAdminSetReplicaVersion?: (ctx: AdminSetReplicaVersionContext) => void;
    /**
     * Enter a parse tree produced by the `adminRepairTable`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    enterAdminRepairTable?: (ctx: AdminRepairTableContext) => void;
    /**
     * Exit a parse tree produced by the `adminRepairTable`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    exitAdminRepairTable?: (ctx: AdminRepairTableContext) => void;
    /**
     * Enter a parse tree produced by the `adminCancelRepairTable`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    enterAdminCancelRepairTable?: (ctx: AdminCancelRepairTableContext) => void;
    /**
     * Exit a parse tree produced by the `adminCancelRepairTable`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    exitAdminCancelRepairTable?: (ctx: AdminCancelRepairTableContext) => void;
    /**
     * Enter a parse tree produced by the `adminCompactTable`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    enterAdminCompactTable?: (ctx: AdminCompactTableContext) => void;
    /**
     * Exit a parse tree produced by the `adminCompactTable`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    exitAdminCompactTable?: (ctx: AdminCompactTableContext) => void;
    /**
     * Enter a parse tree produced by the `adminSetFrontendConfig`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    enterAdminSetFrontendConfig?: (ctx: AdminSetFrontendConfigContext) => void;
    /**
     * Exit a parse tree produced by the `adminSetFrontendConfig`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    exitAdminSetFrontendConfig?: (ctx: AdminSetFrontendConfigContext) => void;
    /**
     * Enter a parse tree produced by the `adminCheckTablets`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    enterAdminCheckTablets?: (ctx: AdminCheckTabletsContext) => void;
    /**
     * Exit a parse tree produced by the `adminCheckTablets`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    exitAdminCheckTablets?: (ctx: AdminCheckTabletsContext) => void;
    /**
     * Enter a parse tree produced by the `adminRebalanceDisk`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    enterAdminRebalanceDisk?: (ctx: AdminRebalanceDiskContext) => void;
    /**
     * Exit a parse tree produced by the `adminRebalanceDisk`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    exitAdminRebalanceDisk?: (ctx: AdminRebalanceDiskContext) => void;
    /**
     * Enter a parse tree produced by the `adminCancelRebalanceDisk`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    enterAdminCancelRebalanceDisk?: (ctx: AdminCancelRebalanceDiskContext) => void;
    /**
     * Exit a parse tree produced by the `adminCancelRebalanceDisk`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    exitAdminCancelRebalanceDisk?: (ctx: AdminCancelRebalanceDiskContext) => void;
    /**
     * Enter a parse tree produced by the `adminCleanTrash`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    enterAdminCleanTrash?: (ctx: AdminCleanTrashContext) => void;
    /**
     * Exit a parse tree produced by the `adminCleanTrash`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    exitAdminCleanTrash?: (ctx: AdminCleanTrashContext) => void;
    /**
     * Enter a parse tree produced by the `adminSetPartitionVersion`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    enterAdminSetPartitionVersion?: (ctx: AdminSetPartitionVersionContext) => void;
    /**
     * Exit a parse tree produced by the `adminSetPartitionVersion`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    exitAdminSetPartitionVersion?: (ctx: AdminSetPartitionVersionContext) => void;
    /**
     * Enter a parse tree produced by the `adminDiagnoseTablet`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    enterAdminDiagnoseTablet?: (ctx: AdminDiagnoseTabletContext) => void;
    /**
     * Exit a parse tree produced by the `adminDiagnoseTablet`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    exitAdminDiagnoseTablet?: (ctx: AdminDiagnoseTabletContext) => void;
    /**
     * Enter a parse tree produced by the `adminShowTabletStorageFormat`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    enterAdminShowTabletStorageFormat?: (ctx: AdminShowTabletStorageFormatContext) => void;
    /**
     * Exit a parse tree produced by the `adminShowTabletStorageFormat`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    exitAdminShowTabletStorageFormat?: (ctx: AdminShowTabletStorageFormatContext) => void;
    /**
     * Enter a parse tree produced by the `adminCopyTablet`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    enterAdminCopyTablet?: (ctx: AdminCopyTabletContext) => void;
    /**
     * Exit a parse tree produced by the `adminCopyTablet`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    exitAdminCopyTablet?: (ctx: AdminCopyTabletContext) => void;
    /**
     * Enter a parse tree produced by the `adminSetTableStatus`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    enterAdminSetTableStatus?: (ctx: AdminSetTableStatusContext) => void;
    /**
     * Exit a parse tree produced by the `adminSetTableStatus`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     */
    exitAdminSetTableStatus?: (ctx: AdminSetTableStatusContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.baseTableRef`.
     * @param ctx the parse tree
     */
    enterBaseTableRef?: (ctx: BaseTableRefContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.baseTableRef`.
     * @param ctx the parse tree
     */
    exitBaseTableRef?: (ctx: BaseTableRefContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.wildWhere`.
     * @param ctx the parse tree
     */
    enterWildWhere?: (ctx: WildWhereContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.wildWhere`.
     * @param ctx the parse tree
     */
    exitWildWhere?: (ctx: WildWhereContext) => void;
    /**
     * Enter a parse tree produced by the `transactionBegin`
     * labeled alternative in `DorisParser.unsupportedTransactionStatement`.
     * @param ctx the parse tree
     */
    enterTransactionBegin?: (ctx: TransactionBeginContext) => void;
    /**
     * Exit a parse tree produced by the `transactionBegin`
     * labeled alternative in `DorisParser.unsupportedTransactionStatement`.
     * @param ctx the parse tree
     */
    exitTransactionBegin?: (ctx: TransactionBeginContext) => void;
    /**
     * Enter a parse tree produced by the `transcationCommit`
     * labeled alternative in `DorisParser.unsupportedTransactionStatement`.
     * @param ctx the parse tree
     */
    enterTranscationCommit?: (ctx: TranscationCommitContext) => void;
    /**
     * Exit a parse tree produced by the `transcationCommit`
     * labeled alternative in `DorisParser.unsupportedTransactionStatement`.
     * @param ctx the parse tree
     */
    exitTranscationCommit?: (ctx: TranscationCommitContext) => void;
    /**
     * Enter a parse tree produced by the `transactionRollback`
     * labeled alternative in `DorisParser.unsupportedTransactionStatement`.
     * @param ctx the parse tree
     */
    enterTransactionRollback?: (ctx: TransactionRollbackContext) => void;
    /**
     * Exit a parse tree produced by the `transactionRollback`
     * labeled alternative in `DorisParser.unsupportedTransactionStatement`.
     * @param ctx the parse tree
     */
    exitTransactionRollback?: (ctx: TransactionRollbackContext) => void;
    /**
     * Enter a parse tree produced by the `grantTablePrivilege`
     * labeled alternative in `DorisParser.unsupportedGrantRevokeStatement`.
     * @param ctx the parse tree
     */
    enterGrantTablePrivilege?: (ctx: GrantTablePrivilegeContext) => void;
    /**
     * Exit a parse tree produced by the `grantTablePrivilege`
     * labeled alternative in `DorisParser.unsupportedGrantRevokeStatement`.
     * @param ctx the parse tree
     */
    exitGrantTablePrivilege?: (ctx: GrantTablePrivilegeContext) => void;
    /**
     * Enter a parse tree produced by the `grantResourcePrivilege`
     * labeled alternative in `DorisParser.unsupportedGrantRevokeStatement`.
     * @param ctx the parse tree
     */
    enterGrantResourcePrivilege?: (ctx: GrantResourcePrivilegeContext) => void;
    /**
     * Exit a parse tree produced by the `grantResourcePrivilege`
     * labeled alternative in `DorisParser.unsupportedGrantRevokeStatement`.
     * @param ctx the parse tree
     */
    exitGrantResourcePrivilege?: (ctx: GrantResourcePrivilegeContext) => void;
    /**
     * Enter a parse tree produced by the `grantRole`
     * labeled alternative in `DorisParser.unsupportedGrantRevokeStatement`.
     * @param ctx the parse tree
     */
    enterGrantRole?: (ctx: GrantRoleContext) => void;
    /**
     * Exit a parse tree produced by the `grantRole`
     * labeled alternative in `DorisParser.unsupportedGrantRevokeStatement`.
     * @param ctx the parse tree
     */
    exitGrantRole?: (ctx: GrantRoleContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.privilege`.
     * @param ctx the parse tree
     */
    enterPrivilege?: (ctx: PrivilegeContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.privilege`.
     * @param ctx the parse tree
     */
    exitPrivilege?: (ctx: PrivilegeContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.privilegeList`.
     * @param ctx the parse tree
     */
    enterPrivilegeList?: (ctx: PrivilegeListContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.privilegeList`.
     * @param ctx the parse tree
     */
    exitPrivilegeList?: (ctx: PrivilegeListContext) => void;
    /**
     * Enter a parse tree produced by the `alterTable`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    enterAlterTable?: (ctx: AlterTableContext) => void;
    /**
     * Exit a parse tree produced by the `alterTable`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    exitAlterTable?: (ctx: AlterTableContext) => void;
    /**
     * Enter a parse tree produced by the `alterTableAddRollup`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    enterAlterTableAddRollup?: (ctx: AlterTableAddRollupContext) => void;
    /**
     * Exit a parse tree produced by the `alterTableAddRollup`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    exitAlterTableAddRollup?: (ctx: AlterTableAddRollupContext) => void;
    /**
     * Enter a parse tree produced by the `alterTableDropRollup`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    enterAlterTableDropRollup?: (ctx: AlterTableDropRollupContext) => void;
    /**
     * Exit a parse tree produced by the `alterTableDropRollup`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    exitAlterTableDropRollup?: (ctx: AlterTableDropRollupContext) => void;
    /**
     * Enter a parse tree produced by the `alterSystem`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    enterAlterSystem?: (ctx: AlterSystemContext) => void;
    /**
     * Exit a parse tree produced by the `alterSystem`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    exitAlterSystem?: (ctx: AlterSystemContext) => void;
    /**
     * Enter a parse tree produced by the `alterDatabaseSetQuota`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    enterAlterDatabaseSetQuota?: (ctx: AlterDatabaseSetQuotaContext) => void;
    /**
     * Exit a parse tree produced by the `alterDatabaseSetQuota`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    exitAlterDatabaseSetQuota?: (ctx: AlterDatabaseSetQuotaContext) => void;
    /**
     * Enter a parse tree produced by the `alterDatabaseRename`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    enterAlterDatabaseRename?: (ctx: AlterDatabaseRenameContext) => void;
    /**
     * Exit a parse tree produced by the `alterDatabaseRename`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    exitAlterDatabaseRename?: (ctx: AlterDatabaseRenameContext) => void;
    /**
     * Enter a parse tree produced by the `alterDatabaseProperties`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    enterAlterDatabaseProperties?: (ctx: AlterDatabasePropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `alterDatabaseProperties`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    exitAlterDatabaseProperties?: (ctx: AlterDatabasePropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `alterCatalogRename`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    enterAlterCatalogRename?: (ctx: AlterCatalogRenameContext) => void;
    /**
     * Exit a parse tree produced by the `alterCatalogRename`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    exitAlterCatalogRename?: (ctx: AlterCatalogRenameContext) => void;
    /**
     * Enter a parse tree produced by the `alterCatalogProperties`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    enterAlterCatalogProperties?: (ctx: AlterCatalogPropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `alterCatalogProperties`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    exitAlterCatalogProperties?: (ctx: AlterCatalogPropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `alterCatalogComment`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    enterAlterCatalogComment?: (ctx: AlterCatalogCommentContext) => void;
    /**
     * Exit a parse tree produced by the `alterCatalogComment`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    exitAlterCatalogComment?: (ctx: AlterCatalogCommentContext) => void;
    /**
     * Enter a parse tree produced by the `alterResource`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    enterAlterResource?: (ctx: AlterResourceContext) => void;
    /**
     * Exit a parse tree produced by the `alterResource`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    exitAlterResource?: (ctx: AlterResourceContext) => void;
    /**
     * Enter a parse tree produced by the `alterColocateGroup`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    enterAlterColocateGroup?: (ctx: AlterColocateGroupContext) => void;
    /**
     * Exit a parse tree produced by the `alterColocateGroup`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    exitAlterColocateGroup?: (ctx: AlterColocateGroupContext) => void;
    /**
     * Enter a parse tree produced by the `alterRoutineLoad`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    enterAlterRoutineLoad?: (ctx: AlterRoutineLoadContext) => void;
    /**
     * Exit a parse tree produced by the `alterRoutineLoad`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    exitAlterRoutineLoad?: (ctx: AlterRoutineLoadContext) => void;
    /**
     * Enter a parse tree produced by the `alterSqlBlockRule`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    enterAlterSqlBlockRule?: (ctx: AlterSqlBlockRuleContext) => void;
    /**
     * Exit a parse tree produced by the `alterSqlBlockRule`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    exitAlterSqlBlockRule?: (ctx: AlterSqlBlockRuleContext) => void;
    /**
     * Enter a parse tree produced by the `alterTableProperties`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    enterAlterTableProperties?: (ctx: AlterTablePropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `alterTableProperties`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    exitAlterTableProperties?: (ctx: AlterTablePropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `alterStoragePlicy`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    enterAlterStoragePlicy?: (ctx: AlterStoragePlicyContext) => void;
    /**
     * Exit a parse tree produced by the `alterStoragePlicy`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    exitAlterStoragePlicy?: (ctx: AlterStoragePlicyContext) => void;
    /**
     * Enter a parse tree produced by the `alterUser`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    enterAlterUser?: (ctx: AlterUserContext) => void;
    /**
     * Exit a parse tree produced by the `alterUser`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    exitAlterUser?: (ctx: AlterUserContext) => void;
    /**
     * Enter a parse tree produced by the `alterRepository`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    enterAlterRepository?: (ctx: AlterRepositoryContext) => void;
    /**
     * Exit a parse tree produced by the `alterRepository`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     */
    exitAlterRepository?: (ctx: AlterRepositoryContext) => void;
    /**
     * Enter a parse tree produced by the `addBackendClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     */
    enterAddBackendClause?: (ctx: AddBackendClauseContext) => void;
    /**
     * Exit a parse tree produced by the `addBackendClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     */
    exitAddBackendClause?: (ctx: AddBackendClauseContext) => void;
    /**
     * Enter a parse tree produced by the `dropBackendClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     */
    enterDropBackendClause?: (ctx: DropBackendClauseContext) => void;
    /**
     * Exit a parse tree produced by the `dropBackendClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     */
    exitDropBackendClause?: (ctx: DropBackendClauseContext) => void;
    /**
     * Enter a parse tree produced by the `decommissionBackendClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     */
    enterDecommissionBackendClause?: (ctx: DecommissionBackendClauseContext) => void;
    /**
     * Exit a parse tree produced by the `decommissionBackendClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     */
    exitDecommissionBackendClause?: (ctx: DecommissionBackendClauseContext) => void;
    /**
     * Enter a parse tree produced by the `addObserverClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     */
    enterAddObserverClause?: (ctx: AddObserverClauseContext) => void;
    /**
     * Exit a parse tree produced by the `addObserverClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     */
    exitAddObserverClause?: (ctx: AddObserverClauseContext) => void;
    /**
     * Enter a parse tree produced by the `dropObserverClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     */
    enterDropObserverClause?: (ctx: DropObserverClauseContext) => void;
    /**
     * Exit a parse tree produced by the `dropObserverClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     */
    exitDropObserverClause?: (ctx: DropObserverClauseContext) => void;
    /**
     * Enter a parse tree produced by the `addFollowerClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     */
    enterAddFollowerClause?: (ctx: AddFollowerClauseContext) => void;
    /**
     * Exit a parse tree produced by the `addFollowerClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     */
    exitAddFollowerClause?: (ctx: AddFollowerClauseContext) => void;
    /**
     * Enter a parse tree produced by the `dropFollowerClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     */
    enterDropFollowerClause?: (ctx: DropFollowerClauseContext) => void;
    /**
     * Exit a parse tree produced by the `dropFollowerClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     */
    exitDropFollowerClause?: (ctx: DropFollowerClauseContext) => void;
    /**
     * Enter a parse tree produced by the `addBrokerClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     */
    enterAddBrokerClause?: (ctx: AddBrokerClauseContext) => void;
    /**
     * Exit a parse tree produced by the `addBrokerClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     */
    exitAddBrokerClause?: (ctx: AddBrokerClauseContext) => void;
    /**
     * Enter a parse tree produced by the `dropBrokerClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     */
    enterDropBrokerClause?: (ctx: DropBrokerClauseContext) => void;
    /**
     * Exit a parse tree produced by the `dropBrokerClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     */
    exitDropBrokerClause?: (ctx: DropBrokerClauseContext) => void;
    /**
     * Enter a parse tree produced by the `dropAllBrokerClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     */
    enterDropAllBrokerClause?: (ctx: DropAllBrokerClauseContext) => void;
    /**
     * Exit a parse tree produced by the `dropAllBrokerClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     */
    exitDropAllBrokerClause?: (ctx: DropAllBrokerClauseContext) => void;
    /**
     * Enter a parse tree produced by the `alterLoadErrorUrlClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     */
    enterAlterLoadErrorUrlClause?: (ctx: AlterLoadErrorUrlClauseContext) => void;
    /**
     * Exit a parse tree produced by the `alterLoadErrorUrlClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     */
    exitAlterLoadErrorUrlClause?: (ctx: AlterLoadErrorUrlClauseContext) => void;
    /**
     * Enter a parse tree produced by the `modifyBackendClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     */
    enterModifyBackendClause?: (ctx: ModifyBackendClauseContext) => void;
    /**
     * Exit a parse tree produced by the `modifyBackendClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     */
    exitModifyBackendClause?: (ctx: ModifyBackendClauseContext) => void;
    /**
     * Enter a parse tree produced by the `modifyFrontendOrBackendHostNameClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     */
    enterModifyFrontendOrBackendHostNameClause?: (ctx: ModifyFrontendOrBackendHostNameClauseContext) => void;
    /**
     * Exit a parse tree produced by the `modifyFrontendOrBackendHostNameClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     */
    exitModifyFrontendOrBackendHostNameClause?: (ctx: ModifyFrontendOrBackendHostNameClauseContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.dropRollupClause`.
     * @param ctx the parse tree
     */
    enterDropRollupClause?: (ctx: DropRollupClauseContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.dropRollupClause`.
     * @param ctx the parse tree
     */
    exitDropRollupClause?: (ctx: DropRollupClauseContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.addRollupClause`.
     * @param ctx the parse tree
     */
    enterAddRollupClause?: (ctx: AddRollupClauseContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.addRollupClause`.
     * @param ctx the parse tree
     */
    exitAddRollupClause?: (ctx: AddRollupClauseContext) => void;
    /**
     * Enter a parse tree produced by the `addColumnClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    enterAddColumnClause?: (ctx: AddColumnClauseContext) => void;
    /**
     * Exit a parse tree produced by the `addColumnClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    exitAddColumnClause?: (ctx: AddColumnClauseContext) => void;
    /**
     * Enter a parse tree produced by the `addColumnsClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    enterAddColumnsClause?: (ctx: AddColumnsClauseContext) => void;
    /**
     * Exit a parse tree produced by the `addColumnsClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    exitAddColumnsClause?: (ctx: AddColumnsClauseContext) => void;
    /**
     * Enter a parse tree produced by the `dropColumnClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    enterDropColumnClause?: (ctx: DropColumnClauseContext) => void;
    /**
     * Exit a parse tree produced by the `dropColumnClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    exitDropColumnClause?: (ctx: DropColumnClauseContext) => void;
    /**
     * Enter a parse tree produced by the `modifyColumnClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    enterModifyColumnClause?: (ctx: ModifyColumnClauseContext) => void;
    /**
     * Exit a parse tree produced by the `modifyColumnClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    exitModifyColumnClause?: (ctx: ModifyColumnClauseContext) => void;
    /**
     * Enter a parse tree produced by the `reorderColumnsClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    enterReorderColumnsClause?: (ctx: ReorderColumnsClauseContext) => void;
    /**
     * Exit a parse tree produced by the `reorderColumnsClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    exitReorderColumnsClause?: (ctx: ReorderColumnsClauseContext) => void;
    /**
     * Enter a parse tree produced by the `addPartitionClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    enterAddPartitionClause?: (ctx: AddPartitionClauseContext) => void;
    /**
     * Exit a parse tree produced by the `addPartitionClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    exitAddPartitionClause?: (ctx: AddPartitionClauseContext) => void;
    /**
     * Enter a parse tree produced by the `dropPartitionClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    enterDropPartitionClause?: (ctx: DropPartitionClauseContext) => void;
    /**
     * Exit a parse tree produced by the `dropPartitionClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    exitDropPartitionClause?: (ctx: DropPartitionClauseContext) => void;
    /**
     * Enter a parse tree produced by the `modifyPartitionClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    enterModifyPartitionClause?: (ctx: ModifyPartitionClauseContext) => void;
    /**
     * Exit a parse tree produced by the `modifyPartitionClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    exitModifyPartitionClause?: (ctx: ModifyPartitionClauseContext) => void;
    /**
     * Enter a parse tree produced by the `replacePartitionClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    enterReplacePartitionClause?: (ctx: ReplacePartitionClauseContext) => void;
    /**
     * Exit a parse tree produced by the `replacePartitionClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    exitReplacePartitionClause?: (ctx: ReplacePartitionClauseContext) => void;
    /**
     * Enter a parse tree produced by the `replaceTableClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    enterReplaceTableClause?: (ctx: ReplaceTableClauseContext) => void;
    /**
     * Exit a parse tree produced by the `replaceTableClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    exitReplaceTableClause?: (ctx: ReplaceTableClauseContext) => void;
    /**
     * Enter a parse tree produced by the `renameClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    enterRenameClause?: (ctx: RenameClauseContext) => void;
    /**
     * Exit a parse tree produced by the `renameClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    exitRenameClause?: (ctx: RenameClauseContext) => void;
    /**
     * Enter a parse tree produced by the `renameRollupClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    enterRenameRollupClause?: (ctx: RenameRollupClauseContext) => void;
    /**
     * Exit a parse tree produced by the `renameRollupClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    exitRenameRollupClause?: (ctx: RenameRollupClauseContext) => void;
    /**
     * Enter a parse tree produced by the `renamePartitionClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    enterRenamePartitionClause?: (ctx: RenamePartitionClauseContext) => void;
    /**
     * Exit a parse tree produced by the `renamePartitionClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    exitRenamePartitionClause?: (ctx: RenamePartitionClauseContext) => void;
    /**
     * Enter a parse tree produced by the `renameColumnClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    enterRenameColumnClause?: (ctx: RenameColumnClauseContext) => void;
    /**
     * Exit a parse tree produced by the `renameColumnClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    exitRenameColumnClause?: (ctx: RenameColumnClauseContext) => void;
    /**
     * Enter a parse tree produced by the `addIndexClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    enterAddIndexClause?: (ctx: AddIndexClauseContext) => void;
    /**
     * Exit a parse tree produced by the `addIndexClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    exitAddIndexClause?: (ctx: AddIndexClauseContext) => void;
    /**
     * Enter a parse tree produced by the `dropIndexClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    enterDropIndexClause?: (ctx: DropIndexClauseContext) => void;
    /**
     * Exit a parse tree produced by the `dropIndexClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    exitDropIndexClause?: (ctx: DropIndexClauseContext) => void;
    /**
     * Enter a parse tree produced by the `enableFeatureClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    enterEnableFeatureClause?: (ctx: EnableFeatureClauseContext) => void;
    /**
     * Exit a parse tree produced by the `enableFeatureClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    exitEnableFeatureClause?: (ctx: EnableFeatureClauseContext) => void;
    /**
     * Enter a parse tree produced by the `modifyDistributionClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    enterModifyDistributionClause?: (ctx: ModifyDistributionClauseContext) => void;
    /**
     * Exit a parse tree produced by the `modifyDistributionClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    exitModifyDistributionClause?: (ctx: ModifyDistributionClauseContext) => void;
    /**
     * Enter a parse tree produced by the `modifyTableCommentClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    enterModifyTableCommentClause?: (ctx: ModifyTableCommentClauseContext) => void;
    /**
     * Exit a parse tree produced by the `modifyTableCommentClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    exitModifyTableCommentClause?: (ctx: ModifyTableCommentClauseContext) => void;
    /**
     * Enter a parse tree produced by the `modifyColumnCommentClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    enterModifyColumnCommentClause?: (ctx: ModifyColumnCommentClauseContext) => void;
    /**
     * Exit a parse tree produced by the `modifyColumnCommentClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    exitModifyColumnCommentClause?: (ctx: ModifyColumnCommentClauseContext) => void;
    /**
     * Enter a parse tree produced by the `modifyEngineClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    enterModifyEngineClause?: (ctx: ModifyEngineClauseContext) => void;
    /**
     * Exit a parse tree produced by the `modifyEngineClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    exitModifyEngineClause?: (ctx: ModifyEngineClauseContext) => void;
    /**
     * Enter a parse tree produced by the `alterMultiPartitionClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    enterAlterMultiPartitionClause?: (ctx: AlterMultiPartitionClauseContext) => void;
    /**
     * Exit a parse tree produced by the `alterMultiPartitionClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     */
    exitAlterMultiPartitionClause?: (ctx: AlterMultiPartitionClauseContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.columnPosition`.
     * @param ctx the parse tree
     */
    enterColumnPosition?: (ctx: ColumnPositionContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.columnPosition`.
     * @param ctx the parse tree
     */
    exitColumnPosition?: (ctx: ColumnPositionContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.toRollup`.
     * @param ctx the parse tree
     */
    enterToRollup?: (ctx: ToRollupContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.toRollup`.
     * @param ctx the parse tree
     */
    exitToRollup?: (ctx: ToRollupContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.fromRollup`.
     * @param ctx the parse tree
     */
    enterFromRollup?: (ctx: FromRollupContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.fromRollup`.
     * @param ctx the parse tree
     */
    exitFromRollup?: (ctx: FromRollupContext) => void;
    /**
     * Enter a parse tree produced by the `dropDatabase`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     */
    enterDropDatabase?: (ctx: DropDatabaseContext) => void;
    /**
     * Exit a parse tree produced by the `dropDatabase`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     */
    exitDropDatabase?: (ctx: DropDatabaseContext) => void;
    /**
     * Enter a parse tree produced by the `dropCatalog`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     */
    enterDropCatalog?: (ctx: DropCatalogContext) => void;
    /**
     * Exit a parse tree produced by the `dropCatalog`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     */
    exitDropCatalog?: (ctx: DropCatalogContext) => void;
    /**
     * Enter a parse tree produced by the `dropFunction`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     */
    enterDropFunction?: (ctx: DropFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `dropFunction`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     */
    exitDropFunction?: (ctx: DropFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `dropTable`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     */
    enterDropTable?: (ctx: DropTableContext) => void;
    /**
     * Exit a parse tree produced by the `dropTable`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     */
    exitDropTable?: (ctx: DropTableContext) => void;
    /**
     * Enter a parse tree produced by the `dropView`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     */
    enterDropView?: (ctx: DropViewContext) => void;
    /**
     * Exit a parse tree produced by the `dropView`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     */
    exitDropView?: (ctx: DropViewContext) => void;
    /**
     * Enter a parse tree produced by the `dropRepository`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     */
    enterDropRepository?: (ctx: DropRepositoryContext) => void;
    /**
     * Exit a parse tree produced by the `dropRepository`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     */
    exitDropRepository?: (ctx: DropRepositoryContext) => void;
    /**
     * Enter a parse tree produced by the `dropIndex`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     */
    enterDropIndex?: (ctx: DropIndexContext) => void;
    /**
     * Exit a parse tree produced by the `dropIndex`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     */
    exitDropIndex?: (ctx: DropIndexContext) => void;
    /**
     * Enter a parse tree produced by the `dropResource`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     */
    enterDropResource?: (ctx: DropResourceContext) => void;
    /**
     * Exit a parse tree produced by the `dropResource`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     */
    exitDropResource?: (ctx: DropResourceContext) => void;
    /**
     * Enter a parse tree produced by the `dropRowPolicy`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     */
    enterDropRowPolicy?: (ctx: DropRowPolicyContext) => void;
    /**
     * Exit a parse tree produced by the `dropRowPolicy`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     */
    exitDropRowPolicy?: (ctx: DropRowPolicyContext) => void;
    /**
     * Enter a parse tree produced by the `dropStoragePolicy`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     */
    enterDropStoragePolicy?: (ctx: DropStoragePolicyContext) => void;
    /**
     * Exit a parse tree produced by the `dropStoragePolicy`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     */
    exitDropStoragePolicy?: (ctx: DropStoragePolicyContext) => void;
    /**
     * Enter a parse tree produced by the `dropStage`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     */
    enterDropStage?: (ctx: DropStageContext) => void;
    /**
     * Exit a parse tree produced by the `dropStage`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     */
    exitDropStage?: (ctx: DropStageContext) => void;
    /**
     * Enter a parse tree produced by the `analyzeTable`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    enterAnalyzeTable?: (ctx: AnalyzeTableContext) => void;
    /**
     * Exit a parse tree produced by the `analyzeTable`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    exitAnalyzeTable?: (ctx: AnalyzeTableContext) => void;
    /**
     * Enter a parse tree produced by the `analyzeDatabase`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    enterAnalyzeDatabase?: (ctx: AnalyzeDatabaseContext) => void;
    /**
     * Exit a parse tree produced by the `analyzeDatabase`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    exitAnalyzeDatabase?: (ctx: AnalyzeDatabaseContext) => void;
    /**
     * Enter a parse tree produced by the `alterTableStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    enterAlterTableStats?: (ctx: AlterTableStatsContext) => void;
    /**
     * Exit a parse tree produced by the `alterTableStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    exitAlterTableStats?: (ctx: AlterTableStatsContext) => void;
    /**
     * Enter a parse tree produced by the `alterColumnStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    enterAlterColumnStats?: (ctx: AlterColumnStatsContext) => void;
    /**
     * Exit a parse tree produced by the `alterColumnStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    exitAlterColumnStats?: (ctx: AlterColumnStatsContext) => void;
    /**
     * Enter a parse tree produced by the `dropStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    enterDropStats?: (ctx: DropStatsContext) => void;
    /**
     * Exit a parse tree produced by the `dropStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    exitDropStats?: (ctx: DropStatsContext) => void;
    /**
     * Enter a parse tree produced by the `dropCachedStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    enterDropCachedStats?: (ctx: DropCachedStatsContext) => void;
    /**
     * Exit a parse tree produced by the `dropCachedStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    exitDropCachedStats?: (ctx: DropCachedStatsContext) => void;
    /**
     * Enter a parse tree produced by the `dropExpiredStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    enterDropExpiredStats?: (ctx: DropExpiredStatsContext) => void;
    /**
     * Exit a parse tree produced by the `dropExpiredStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    exitDropExpiredStats?: (ctx: DropExpiredStatsContext) => void;
    /**
     * Enter a parse tree produced by the `dropAanalyzeJob`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    enterDropAanalyzeJob?: (ctx: DropAanalyzeJobContext) => void;
    /**
     * Exit a parse tree produced by the `dropAanalyzeJob`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    exitDropAanalyzeJob?: (ctx: DropAanalyzeJobContext) => void;
    /**
     * Enter a parse tree produced by the `killAnalyzeJob`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    enterKillAnalyzeJob?: (ctx: KillAnalyzeJobContext) => void;
    /**
     * Exit a parse tree produced by the `killAnalyzeJob`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    exitKillAnalyzeJob?: (ctx: KillAnalyzeJobContext) => void;
    /**
     * Enter a parse tree produced by the `showTableStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    enterShowTableStats?: (ctx: ShowTableStatsContext) => void;
    /**
     * Exit a parse tree produced by the `showTableStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    exitShowTableStats?: (ctx: ShowTableStatsContext) => void;
    /**
     * Enter a parse tree produced by the `showIndexStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    enterShowIndexStats?: (ctx: ShowIndexStatsContext) => void;
    /**
     * Exit a parse tree produced by the `showIndexStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    exitShowIndexStats?: (ctx: ShowIndexStatsContext) => void;
    /**
     * Enter a parse tree produced by the `showColumnStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    enterShowColumnStats?: (ctx: ShowColumnStatsContext) => void;
    /**
     * Exit a parse tree produced by the `showColumnStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    exitShowColumnStats?: (ctx: ShowColumnStatsContext) => void;
    /**
     * Enter a parse tree produced by the `showColumnHistogramStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    enterShowColumnHistogramStats?: (ctx: ShowColumnHistogramStatsContext) => void;
    /**
     * Exit a parse tree produced by the `showColumnHistogramStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    exitShowColumnHistogramStats?: (ctx: ShowColumnHistogramStatsContext) => void;
    /**
     * Enter a parse tree produced by the `showAnalyze`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    enterShowAnalyze?: (ctx: ShowAnalyzeContext) => void;
    /**
     * Exit a parse tree produced by the `showAnalyze`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    exitShowAnalyze?: (ctx: ShowAnalyzeContext) => void;
    /**
     * Enter a parse tree produced by the `showAnalyzeFromJobId`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    enterShowAnalyzeFromJobId?: (ctx: ShowAnalyzeFromJobIdContext) => void;
    /**
     * Exit a parse tree produced by the `showAnalyzeFromJobId`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    exitShowAnalyzeFromJobId?: (ctx: ShowAnalyzeFromJobIdContext) => void;
    /**
     * Enter a parse tree produced by the `showAutoAnalyzeJobs`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    enterShowAutoAnalyzeJobs?: (ctx: ShowAutoAnalyzeJobsContext) => void;
    /**
     * Exit a parse tree produced by the `showAutoAnalyzeJobs`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    exitShowAutoAnalyzeJobs?: (ctx: ShowAutoAnalyzeJobsContext) => void;
    /**
     * Enter a parse tree produced by the `showAnalyzeTask`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    enterShowAnalyzeTask?: (ctx: ShowAnalyzeTaskContext) => void;
    /**
     * Exit a parse tree produced by the `showAnalyzeTask`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     */
    exitShowAnalyzeTask?: (ctx: ShowAnalyzeTaskContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.analyzeProperties`.
     * @param ctx the parse tree
     */
    enterAnalyzeProperties?: (ctx: AnalyzePropertiesContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.analyzeProperties`.
     * @param ctx the parse tree
     */
    exitAnalyzeProperties?: (ctx: AnalyzePropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `createDatabase`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    enterCreateDatabase?: (ctx: CreateDatabaseContext) => void;
    /**
     * Exit a parse tree produced by the `createDatabase`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    exitCreateDatabase?: (ctx: CreateDatabaseContext) => void;
    /**
     * Enter a parse tree produced by the `createCatalog`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    enterCreateCatalog?: (ctx: CreateCatalogContext) => void;
    /**
     * Exit a parse tree produced by the `createCatalog`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    exitCreateCatalog?: (ctx: CreateCatalogContext) => void;
    /**
     * Enter a parse tree produced by the `createUserDefineFunction`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    enterCreateUserDefineFunction?: (ctx: CreateUserDefineFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `createUserDefineFunction`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    exitCreateUserDefineFunction?: (ctx: CreateUserDefineFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `createAliasFunction`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    enterCreateAliasFunction?: (ctx: CreateAliasFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `createAliasFunction`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    exitCreateAliasFunction?: (ctx: CreateAliasFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `createUser`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    enterCreateUser?: (ctx: CreateUserContext) => void;
    /**
     * Exit a parse tree produced by the `createUser`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    exitCreateUser?: (ctx: CreateUserContext) => void;
    /**
     * Enter a parse tree produced by the `createRepository`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    enterCreateRepository?: (ctx: CreateRepositoryContext) => void;
    /**
     * Exit a parse tree produced by the `createRepository`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    exitCreateRepository?: (ctx: CreateRepositoryContext) => void;
    /**
     * Enter a parse tree produced by the `createRole`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    enterCreateRole?: (ctx: CreateRoleContext) => void;
    /**
     * Exit a parse tree produced by the `createRole`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    exitCreateRole?: (ctx: CreateRoleContext) => void;
    /**
     * Enter a parse tree produced by the `createFile`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    enterCreateFile?: (ctx: CreateFileContext) => void;
    /**
     * Exit a parse tree produced by the `createFile`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    exitCreateFile?: (ctx: CreateFileContext) => void;
    /**
     * Enter a parse tree produced by the `createIndex`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    enterCreateIndex?: (ctx: CreateIndexContext) => void;
    /**
     * Exit a parse tree produced by the `createIndex`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    exitCreateIndex?: (ctx: CreateIndexContext) => void;
    /**
     * Enter a parse tree produced by the `createResource`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    enterCreateResource?: (ctx: CreateResourceContext) => void;
    /**
     * Exit a parse tree produced by the `createResource`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    exitCreateResource?: (ctx: CreateResourceContext) => void;
    /**
     * Enter a parse tree produced by the `createStorageVault`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    enterCreateStorageVault?: (ctx: CreateStorageVaultContext) => void;
    /**
     * Exit a parse tree produced by the `createStorageVault`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    exitCreateStorageVault?: (ctx: CreateStorageVaultContext) => void;
    /**
     * Enter a parse tree produced by the `createWorkloadGroup`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    enterCreateWorkloadGroup?: (ctx: CreateWorkloadGroupContext) => void;
    /**
     * Exit a parse tree produced by the `createWorkloadGroup`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    exitCreateWorkloadGroup?: (ctx: CreateWorkloadGroupContext) => void;
    /**
     * Enter a parse tree produced by the `createWorkloadPolicy`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    enterCreateWorkloadPolicy?: (ctx: CreateWorkloadPolicyContext) => void;
    /**
     * Exit a parse tree produced by the `createWorkloadPolicy`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    exitCreateWorkloadPolicy?: (ctx: CreateWorkloadPolicyContext) => void;
    /**
     * Enter a parse tree produced by the `createEncryptkey`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    enterCreateEncryptkey?: (ctx: CreateEncryptkeyContext) => void;
    /**
     * Exit a parse tree produced by the `createEncryptkey`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    exitCreateEncryptkey?: (ctx: CreateEncryptkeyContext) => void;
    /**
     * Enter a parse tree produced by the `createSqlBlockRule`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    enterCreateSqlBlockRule?: (ctx: CreateSqlBlockRuleContext) => void;
    /**
     * Exit a parse tree produced by the `createSqlBlockRule`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    exitCreateSqlBlockRule?: (ctx: CreateSqlBlockRuleContext) => void;
    /**
     * Enter a parse tree produced by the `createStoragePolicy`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    enterCreateStoragePolicy?: (ctx: CreateStoragePolicyContext) => void;
    /**
     * Exit a parse tree produced by the `createStoragePolicy`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    exitCreateStoragePolicy?: (ctx: CreateStoragePolicyContext) => void;
    /**
     * Enter a parse tree produced by the `buildIndex`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    enterBuildIndex?: (ctx: BuildIndexContext) => void;
    /**
     * Exit a parse tree produced by the `buildIndex`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    exitBuildIndex?: (ctx: BuildIndexContext) => void;
    /**
     * Enter a parse tree produced by the `createStage`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    enterCreateStage?: (ctx: CreateStageContext) => void;
    /**
     * Exit a parse tree produced by the `createStage`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     */
    exitCreateStage?: (ctx: CreateStageContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.workloadPolicyActions`.
     * @param ctx the parse tree
     */
    enterWorkloadPolicyActions?: (ctx: WorkloadPolicyActionsContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.workloadPolicyActions`.
     * @param ctx the parse tree
     */
    exitWorkloadPolicyActions?: (ctx: WorkloadPolicyActionsContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.workloadPolicyAction`.
     * @param ctx the parse tree
     */
    enterWorkloadPolicyAction?: (ctx: WorkloadPolicyActionContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.workloadPolicyAction`.
     * @param ctx the parse tree
     */
    exitWorkloadPolicyAction?: (ctx: WorkloadPolicyActionContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.workloadPolicyConditions`.
     * @param ctx the parse tree
     */
    enterWorkloadPolicyConditions?: (ctx: WorkloadPolicyConditionsContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.workloadPolicyConditions`.
     * @param ctx the parse tree
     */
    exitWorkloadPolicyConditions?: (ctx: WorkloadPolicyConditionsContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.workloadPolicyCondition`.
     * @param ctx the parse tree
     */
    enterWorkloadPolicyCondition?: (ctx: WorkloadPolicyConditionContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.workloadPolicyCondition`.
     * @param ctx the parse tree
     */
    exitWorkloadPolicyCondition?: (ctx: WorkloadPolicyConditionContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.storageBackend`.
     * @param ctx the parse tree
     */
    enterStorageBackend?: (ctx: StorageBackendContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.storageBackend`.
     * @param ctx the parse tree
     */
    exitStorageBackend?: (ctx: StorageBackendContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.passwordOption`.
     * @param ctx the parse tree
     */
    enterPasswordOption?: (ctx: PasswordOptionContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.passwordOption`.
     * @param ctx the parse tree
     */
    exitPasswordOption?: (ctx: PasswordOptionContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.functionArguments`.
     * @param ctx the parse tree
     */
    enterFunctionArguments?: (ctx: FunctionArgumentsContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.functionArguments`.
     * @param ctx the parse tree
     */
    exitFunctionArguments?: (ctx: FunctionArgumentsContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.functionArgument`.
     * @param ctx the parse tree
     */
    enterFunctionArgument?: (ctx: FunctionArgumentContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.functionArgument`.
     * @param ctx the parse tree
     */
    exitFunctionArgument?: (ctx: FunctionArgumentContext) => void;
    /**
     * Enter a parse tree produced by the `setOptions`
     * labeled alternative in `DorisParser.supportedSetStatement`.
     * @param ctx the parse tree
     */
    enterSetOptions?: (ctx: SetOptionsContext) => void;
    /**
     * Exit a parse tree produced by the `setOptions`
     * labeled alternative in `DorisParser.supportedSetStatement`.
     * @param ctx the parse tree
     */
    exitSetOptions?: (ctx: SetOptionsContext) => void;
    /**
     * Enter a parse tree produced by the `setDefaultStorageVault`
     * labeled alternative in `DorisParser.supportedSetStatement`.
     * @param ctx the parse tree
     */
    enterSetDefaultStorageVault?: (ctx: SetDefaultStorageVaultContext) => void;
    /**
     * Exit a parse tree produced by the `setDefaultStorageVault`
     * labeled alternative in `DorisParser.supportedSetStatement`.
     * @param ctx the parse tree
     */
    exitSetDefaultStorageVault?: (ctx: SetDefaultStorageVaultContext) => void;
    /**
     * Enter a parse tree produced by the `setUserProperties`
     * labeled alternative in `DorisParser.supportedSetStatement`.
     * @param ctx the parse tree
     */
    enterSetUserProperties?: (ctx: SetUserPropertiesContext) => void;
    /**
     * Exit a parse tree produced by the `setUserProperties`
     * labeled alternative in `DorisParser.supportedSetStatement`.
     * @param ctx the parse tree
     */
    exitSetUserProperties?: (ctx: SetUserPropertiesContext) => void;
    /**
     * Enter a parse tree produced by the `setTransaction`
     * labeled alternative in `DorisParser.supportedSetStatement`.
     * @param ctx the parse tree
     */
    enterSetTransaction?: (ctx: SetTransactionContext) => void;
    /**
     * Exit a parse tree produced by the `setTransaction`
     * labeled alternative in `DorisParser.supportedSetStatement`.
     * @param ctx the parse tree
     */
    exitSetTransaction?: (ctx: SetTransactionContext) => void;
    /**
     * Enter a parse tree produced by the `setVariableWithType`
     * labeled alternative in `DorisParser.optionWithType`.
     * @param ctx the parse tree
     */
    enterSetVariableWithType?: (ctx: SetVariableWithTypeContext) => void;
    /**
     * Exit a parse tree produced by the `setVariableWithType`
     * labeled alternative in `DorisParser.optionWithType`.
     * @param ctx the parse tree
     */
    exitSetVariableWithType?: (ctx: SetVariableWithTypeContext) => void;
    /**
     * Enter a parse tree produced by the `setNames`
     * labeled alternative in `DorisParser.optionWithoutType`.
     * @param ctx the parse tree
     */
    enterSetNames?: (ctx: SetNamesContext) => void;
    /**
     * Exit a parse tree produced by the `setNames`
     * labeled alternative in `DorisParser.optionWithoutType`.
     * @param ctx the parse tree
     */
    exitSetNames?: (ctx: SetNamesContext) => void;
    /**
     * Enter a parse tree produced by the `setCharset`
     * labeled alternative in `DorisParser.optionWithoutType`.
     * @param ctx the parse tree
     */
    enterSetCharset?: (ctx: SetCharsetContext) => void;
    /**
     * Exit a parse tree produced by the `setCharset`
     * labeled alternative in `DorisParser.optionWithoutType`.
     * @param ctx the parse tree
     */
    exitSetCharset?: (ctx: SetCharsetContext) => void;
    /**
     * Enter a parse tree produced by the `setCollate`
     * labeled alternative in `DorisParser.optionWithoutType`.
     * @param ctx the parse tree
     */
    enterSetCollate?: (ctx: SetCollateContext) => void;
    /**
     * Exit a parse tree produced by the `setCollate`
     * labeled alternative in `DorisParser.optionWithoutType`.
     * @param ctx the parse tree
     */
    exitSetCollate?: (ctx: SetCollateContext) => void;
    /**
     * Enter a parse tree produced by the `setPassword`
     * labeled alternative in `DorisParser.optionWithoutType`.
     * @param ctx the parse tree
     */
    enterSetPassword?: (ctx: SetPasswordContext) => void;
    /**
     * Exit a parse tree produced by the `setPassword`
     * labeled alternative in `DorisParser.optionWithoutType`.
     * @param ctx the parse tree
     */
    exitSetPassword?: (ctx: SetPasswordContext) => void;
    /**
     * Enter a parse tree produced by the `setLdapAdminPassword`
     * labeled alternative in `DorisParser.optionWithoutType`.
     * @param ctx the parse tree
     */
    enterSetLdapAdminPassword?: (ctx: SetLdapAdminPasswordContext) => void;
    /**
     * Exit a parse tree produced by the `setLdapAdminPassword`
     * labeled alternative in `DorisParser.optionWithoutType`.
     * @param ctx the parse tree
     */
    exitSetLdapAdminPassword?: (ctx: SetLdapAdminPasswordContext) => void;
    /**
     * Enter a parse tree produced by the `setVariableWithoutType`
     * labeled alternative in `DorisParser.optionWithoutType`.
     * @param ctx the parse tree
     */
    enterSetVariableWithoutType?: (ctx: SetVariableWithoutTypeContext) => void;
    /**
     * Exit a parse tree produced by the `setVariableWithoutType`
     * labeled alternative in `DorisParser.optionWithoutType`.
     * @param ctx the parse tree
     */
    exitSetVariableWithoutType?: (ctx: SetVariableWithoutTypeContext) => void;
    /**
     * Enter a parse tree produced by the `setSystemVariable`
     * labeled alternative in `DorisParser.variable`.
     * @param ctx the parse tree
     */
    enterSetSystemVariable?: (ctx: SetSystemVariableContext) => void;
    /**
     * Exit a parse tree produced by the `setSystemVariable`
     * labeled alternative in `DorisParser.variable`.
     * @param ctx the parse tree
     */
    exitSetSystemVariable?: (ctx: SetSystemVariableContext) => void;
    /**
     * Enter a parse tree produced by the `setUserVariable`
     * labeled alternative in `DorisParser.variable`.
     * @param ctx the parse tree
     */
    enterSetUserVariable?: (ctx: SetUserVariableContext) => void;
    /**
     * Exit a parse tree produced by the `setUserVariable`
     * labeled alternative in `DorisParser.variable`.
     * @param ctx the parse tree
     */
    exitSetUserVariable?: (ctx: SetUserVariableContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.transactionAccessMode`.
     * @param ctx the parse tree
     */
    enterTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.transactionAccessMode`.
     * @param ctx the parse tree
     */
    exitTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.isolationLevel`.
     * @param ctx the parse tree
     */
    enterIsolationLevel?: (ctx: IsolationLevelContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.isolationLevel`.
     * @param ctx the parse tree
     */
    exitIsolationLevel?: (ctx: IsolationLevelContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.supportedUnsetStatement`.
     * @param ctx the parse tree
     */
    enterSupportedUnsetStatement?: (ctx: SupportedUnsetStatementContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.supportedUnsetStatement`.
     * @param ctx the parse tree
     */
    exitSupportedUnsetStatement?: (ctx: SupportedUnsetStatementContext) => void;
    /**
     * Enter a parse tree produced by the `useDatabase`
     * labeled alternative in `DorisParser.unsupportedUseStatement`.
     * @param ctx the parse tree
     */
    enterUseDatabase?: (ctx: UseDatabaseContext) => void;
    /**
     * Exit a parse tree produced by the `useDatabase`
     * labeled alternative in `DorisParser.unsupportedUseStatement`.
     * @param ctx the parse tree
     */
    exitUseDatabase?: (ctx: UseDatabaseContext) => void;
    /**
     * Enter a parse tree produced by the `useCloudCluster`
     * labeled alternative in `DorisParser.unsupportedUseStatement`.
     * @param ctx the parse tree
     */
    enterUseCloudCluster?: (ctx: UseCloudClusterContext) => void;
    /**
     * Exit a parse tree produced by the `useCloudCluster`
     * labeled alternative in `DorisParser.unsupportedUseStatement`.
     * @param ctx the parse tree
     */
    exitUseCloudCluster?: (ctx: UseCloudClusterContext) => void;
    /**
     * Enter a parse tree produced by the `switchCatalog`
     * labeled alternative in `DorisParser.unsupportedUseStatement`.
     * @param ctx the parse tree
     */
    enterSwitchCatalog?: (ctx: SwitchCatalogContext) => void;
    /**
     * Exit a parse tree produced by the `switchCatalog`
     * labeled alternative in `DorisParser.unsupportedUseStatement`.
     * @param ctx the parse tree
     */
    exitSwitchCatalog?: (ctx: SwitchCatalogContext) => void;
    /**
     * Enter a parse tree produced by the `truncateTable`
     * labeled alternative in `DorisParser.unsupportedDmlStatement`.
     * @param ctx the parse tree
     */
    enterTruncateTable?: (ctx: TruncateTableContext) => void;
    /**
     * Exit a parse tree produced by the `truncateTable`
     * labeled alternative in `DorisParser.unsupportedDmlStatement`.
     * @param ctx the parse tree
     */
    exitTruncateTable?: (ctx: TruncateTableContext) => void;
    /**
     * Enter a parse tree produced by the `copyInto`
     * labeled alternative in `DorisParser.unsupportedDmlStatement`.
     * @param ctx the parse tree
     */
    enterCopyInto?: (ctx: CopyIntoContext) => void;
    /**
     * Exit a parse tree produced by the `copyInto`
     * labeled alternative in `DorisParser.unsupportedDmlStatement`.
     * @param ctx the parse tree
     */
    exitCopyInto?: (ctx: CopyIntoContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.stageAndPattern`.
     * @param ctx the parse tree
     */
    enterStageAndPattern?: (ctx: StageAndPatternContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.stageAndPattern`.
     * @param ctx the parse tree
     */
    exitStageAndPattern?: (ctx: StageAndPatternContext) => void;
    /**
     * Enter a parse tree produced by the `killConnection`
     * labeled alternative in `DorisParser.unsupportedKillStatement`.
     * @param ctx the parse tree
     */
    enterKillConnection?: (ctx: KillConnectionContext) => void;
    /**
     * Exit a parse tree produced by the `killConnection`
     * labeled alternative in `DorisParser.unsupportedKillStatement`.
     * @param ctx the parse tree
     */
    exitKillConnection?: (ctx: KillConnectionContext) => void;
    /**
     * Enter a parse tree produced by the `killQuery`
     * labeled alternative in `DorisParser.unsupportedKillStatement`.
     * @param ctx the parse tree
     */
    enterKillQuery?: (ctx: KillQueryContext) => void;
    /**
     * Exit a parse tree produced by the `killQuery`
     * labeled alternative in `DorisParser.unsupportedKillStatement`.
     * @param ctx the parse tree
     */
    exitKillQuery?: (ctx: KillQueryContext) => void;
    /**
     * Enter a parse tree produced by the `describeTableValuedFunction`
     * labeled alternative in `DorisParser.unsupportedDescribeStatement`.
     * @param ctx the parse tree
     */
    enterDescribeTableValuedFunction?: (ctx: DescribeTableValuedFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `describeTableValuedFunction`
     * labeled alternative in `DorisParser.unsupportedDescribeStatement`.
     * @param ctx the parse tree
     */
    exitDescribeTableValuedFunction?: (ctx: DescribeTableValuedFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `describeTableAll`
     * labeled alternative in `DorisParser.unsupportedDescribeStatement`.
     * @param ctx the parse tree
     */
    enterDescribeTableAll?: (ctx: DescribeTableAllContext) => void;
    /**
     * Exit a parse tree produced by the `describeTableAll`
     * labeled alternative in `DorisParser.unsupportedDescribeStatement`.
     * @param ctx the parse tree
     */
    exitDescribeTableAll?: (ctx: DescribeTableAllContext) => void;
    /**
     * Enter a parse tree produced by the `describeTable`
     * labeled alternative in `DorisParser.unsupportedDescribeStatement`.
     * @param ctx the parse tree
     */
    enterDescribeTable?: (ctx: DescribeTableContext) => void;
    /**
     * Exit a parse tree produced by the `describeTable`
     * labeled alternative in `DorisParser.unsupportedDescribeStatement`.
     * @param ctx the parse tree
     */
    exitDescribeTable?: (ctx: DescribeTableContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.constraint`.
     * @param ctx the parse tree
     */
    enterConstraint?: (ctx: ConstraintContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.constraint`.
     * @param ctx the parse tree
     */
    exitConstraint?: (ctx: ConstraintContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.partitionSpec`.
     * @param ctx the parse tree
     */
    enterPartitionSpec?: (ctx: PartitionSpecContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.partitionSpec`.
     * @param ctx the parse tree
     */
    exitPartitionSpec?: (ctx: PartitionSpecContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.partitionTable`.
     * @param ctx the parse tree
     */
    enterPartitionTable?: (ctx: PartitionTableContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.partitionTable`.
     * @param ctx the parse tree
     */
    exitPartitionTable?: (ctx: PartitionTableContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.identityOrFunctionList`.
     * @param ctx the parse tree
     */
    enterIdentityOrFunctionList?: (ctx: IdentityOrFunctionListContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.identityOrFunctionList`.
     * @param ctx the parse tree
     */
    exitIdentityOrFunctionList?: (ctx: IdentityOrFunctionListContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.identityOrFunction`.
     * @param ctx the parse tree
     */
    enterIdentityOrFunction?: (ctx: IdentityOrFunctionContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.identityOrFunction`.
     * @param ctx the parse tree
     */
    exitIdentityOrFunction?: (ctx: IdentityOrFunctionContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.dataDesc`.
     * @param ctx the parse tree
     */
    enterDataDesc?: (ctx: DataDescContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.dataDesc`.
     * @param ctx the parse tree
     */
    exitDataDesc?: (ctx: DataDescContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.buildMode`.
     * @param ctx the parse tree
     */
    enterBuildMode?: (ctx: BuildModeContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.buildMode`.
     * @param ctx the parse tree
     */
    exitBuildMode?: (ctx: BuildModeContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.refreshTrigger`.
     * @param ctx the parse tree
     */
    enterRefreshTrigger?: (ctx: RefreshTriggerContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.refreshTrigger`.
     * @param ctx the parse tree
     */
    exitRefreshTrigger?: (ctx: RefreshTriggerContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.refreshSchedule`.
     * @param ctx the parse tree
     */
    enterRefreshSchedule?: (ctx: RefreshScheduleContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.refreshSchedule`.
     * @param ctx the parse tree
     */
    exitRefreshSchedule?: (ctx: RefreshScheduleContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.refreshMethod`.
     * @param ctx the parse tree
     */
    enterRefreshMethod?: (ctx: RefreshMethodContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.refreshMethod`.
     * @param ctx the parse tree
     */
    exitRefreshMethod?: (ctx: RefreshMethodContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.mvPartition`.
     * @param ctx the parse tree
     */
    enterMvPartition?: (ctx: MvPartitionContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.mvPartition`.
     * @param ctx the parse tree
     */
    exitMvPartition?: (ctx: MvPartitionContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.identifierOrText`.
     * @param ctx the parse tree
     */
    enterIdentifierOrText?: (ctx: IdentifierOrTextContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.identifierOrText`.
     * @param ctx the parse tree
     */
    exitIdentifierOrText?: (ctx: IdentifierOrTextContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.identifierOrTextOrAsterisk`.
     * @param ctx the parse tree
     */
    enterIdentifierOrTextOrAsterisk?: (ctx: IdentifierOrTextOrAsteriskContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.identifierOrTextOrAsterisk`.
     * @param ctx the parse tree
     */
    exitIdentifierOrTextOrAsterisk?: (ctx: IdentifierOrTextOrAsteriskContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.multipartIdentifierOrAsterisk`.
     * @param ctx the parse tree
     */
    enterMultipartIdentifierOrAsterisk?: (ctx: MultipartIdentifierOrAsteriskContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.multipartIdentifierOrAsterisk`.
     * @param ctx the parse tree
     */
    exitMultipartIdentifierOrAsterisk?: (ctx: MultipartIdentifierOrAsteriskContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.identifierOrAsterisk`.
     * @param ctx the parse tree
     */
    enterIdentifierOrAsterisk?: (ctx: IdentifierOrAsteriskContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.identifierOrAsterisk`.
     * @param ctx the parse tree
     */
    exitIdentifierOrAsterisk?: (ctx: IdentifierOrAsteriskContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.userIdentify`.
     * @param ctx the parse tree
     */
    enterUserIdentify?: (ctx: UserIdentifyContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.userIdentify`.
     * @param ctx the parse tree
     */
    exitUserIdentify?: (ctx: UserIdentifyContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.grantUserIdentify`.
     * @param ctx the parse tree
     */
    enterGrantUserIdentify?: (ctx: GrantUserIdentifyContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.grantUserIdentify`.
     * @param ctx the parse tree
     */
    exitGrantUserIdentify?: (ctx: GrantUserIdentifyContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.explain`.
     * @param ctx the parse tree
     */
    enterExplain?: (ctx: ExplainContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.explain`.
     * @param ctx the parse tree
     */
    exitExplain?: (ctx: ExplainContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.explainCommand`.
     * @param ctx the parse tree
     */
    enterExplainCommand?: (ctx: ExplainCommandContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.explainCommand`.
     * @param ctx the parse tree
     */
    exitExplainCommand?: (ctx: ExplainCommandContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.planType`.
     * @param ctx the parse tree
     */
    enterPlanType?: (ctx: PlanTypeContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.planType`.
     * @param ctx the parse tree
     */
    exitPlanType?: (ctx: PlanTypeContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.replayCommand`.
     * @param ctx the parse tree
     */
    enterReplayCommand?: (ctx: ReplayCommandContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.replayCommand`.
     * @param ctx the parse tree
     */
    exitReplayCommand?: (ctx: ReplayCommandContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.replayType`.
     * @param ctx the parse tree
     */
    enterReplayType?: (ctx: ReplayTypeContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.replayType`.
     * @param ctx the parse tree
     */
    exitReplayType?: (ctx: ReplayTypeContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.mergeType`.
     * @param ctx the parse tree
     */
    enterMergeType?: (ctx: MergeTypeContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.mergeType`.
     * @param ctx the parse tree
     */
    exitMergeType?: (ctx: MergeTypeContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.preFilterClause`.
     * @param ctx the parse tree
     */
    enterPreFilterClause?: (ctx: PreFilterClauseContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.preFilterClause`.
     * @param ctx the parse tree
     */
    exitPreFilterClause?: (ctx: PreFilterClauseContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.deleteOnClause`.
     * @param ctx the parse tree
     */
    enterDeleteOnClause?: (ctx: DeleteOnClauseContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.deleteOnClause`.
     * @param ctx the parse tree
     */
    exitDeleteOnClause?: (ctx: DeleteOnClauseContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.sequenceColClause`.
     * @param ctx the parse tree
     */
    enterSequenceColClause?: (ctx: SequenceColClauseContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.sequenceColClause`.
     * @param ctx the parse tree
     */
    exitSequenceColClause?: (ctx: SequenceColClauseContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.colFromPath`.
     * @param ctx the parse tree
     */
    enterColFromPath?: (ctx: ColFromPathContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.colFromPath`.
     * @param ctx the parse tree
     */
    exitColFromPath?: (ctx: ColFromPathContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.colMappingList`.
     * @param ctx the parse tree
     */
    enterColMappingList?: (ctx: ColMappingListContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.colMappingList`.
     * @param ctx the parse tree
     */
    exitColMappingList?: (ctx: ColMappingListContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.mappingExpr`.
     * @param ctx the parse tree
     */
    enterMappingExpr?: (ctx: MappingExprContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.mappingExpr`.
     * @param ctx the parse tree
     */
    exitMappingExpr?: (ctx: MappingExprContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.withRemoteStorageSystem`.
     * @param ctx the parse tree
     */
    enterWithRemoteStorageSystem?: (ctx: WithRemoteStorageSystemContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.withRemoteStorageSystem`.
     * @param ctx the parse tree
     */
    exitWithRemoteStorageSystem?: (ctx: WithRemoteStorageSystemContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.resourceDesc`.
     * @param ctx the parse tree
     */
    enterResourceDesc?: (ctx: ResourceDescContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.resourceDesc`.
     * @param ctx the parse tree
     */
    exitResourceDesc?: (ctx: ResourceDescContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.mysqlDataDesc`.
     * @param ctx the parse tree
     */
    enterMysqlDataDesc?: (ctx: MysqlDataDescContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.mysqlDataDesc`.
     * @param ctx the parse tree
     */
    exitMysqlDataDesc?: (ctx: MysqlDataDescContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.skipLines`.
     * @param ctx the parse tree
     */
    enterSkipLines?: (ctx: SkipLinesContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.skipLines`.
     * @param ctx the parse tree
     */
    exitSkipLines?: (ctx: SkipLinesContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.outFileClause`.
     * @param ctx the parse tree
     */
    enterOutFileClause?: (ctx: OutFileClauseContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.outFileClause`.
     * @param ctx the parse tree
     */
    exitOutFileClause?: (ctx: OutFileClauseContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.query`.
     * @param ctx the parse tree
     */
    enterQuery?: (ctx: QueryContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.query`.
     * @param ctx the parse tree
     */
    exitQuery?: (ctx: QueryContext) => void;
    /**
     * Enter a parse tree produced by the `queryTermDefault`
     * labeled alternative in `DorisParser.queryTerm`.
     * @param ctx the parse tree
     */
    enterQueryTermDefault?: (ctx: QueryTermDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `queryTermDefault`
     * labeled alternative in `DorisParser.queryTerm`.
     * @param ctx the parse tree
     */
    exitQueryTermDefault?: (ctx: QueryTermDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `setOperation`
     * labeled alternative in `DorisParser.queryTerm`.
     * @param ctx the parse tree
     */
    enterSetOperation?: (ctx: SetOperationContext) => void;
    /**
     * Exit a parse tree produced by the `setOperation`
     * labeled alternative in `DorisParser.queryTerm`.
     * @param ctx the parse tree
     */
    exitSetOperation?: (ctx: SetOperationContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.setQuantifier`.
     * @param ctx the parse tree
     */
    enterSetQuantifier?: (ctx: SetQuantifierContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.setQuantifier`.
     * @param ctx the parse tree
     */
    exitSetQuantifier?: (ctx: SetQuantifierContext) => void;
    /**
     * Enter a parse tree produced by the `queryPrimaryDefault`
     * labeled alternative in `DorisParser.queryPrimary`.
     * @param ctx the parse tree
     */
    enterQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `queryPrimaryDefault`
     * labeled alternative in `DorisParser.queryPrimary`.
     * @param ctx the parse tree
     */
    exitQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `subquery`
     * labeled alternative in `DorisParser.queryPrimary`.
     * @param ctx the parse tree
     */
    enterSubquery?: (ctx: SubqueryContext) => void;
    /**
     * Exit a parse tree produced by the `subquery`
     * labeled alternative in `DorisParser.queryPrimary`.
     * @param ctx the parse tree
     */
    exitSubquery?: (ctx: SubqueryContext) => void;
    /**
     * Enter a parse tree produced by the `valuesTable`
     * labeled alternative in `DorisParser.queryPrimary`.
     * @param ctx the parse tree
     */
    enterValuesTable?: (ctx: ValuesTableContext) => void;
    /**
     * Exit a parse tree produced by the `valuesTable`
     * labeled alternative in `DorisParser.queryPrimary`.
     * @param ctx the parse tree
     */
    exitValuesTable?: (ctx: ValuesTableContext) => void;
    /**
     * Enter a parse tree produced by the `regularQuerySpecification`
     * labeled alternative in `DorisParser.querySpecification`.
     * @param ctx the parse tree
     */
    enterRegularQuerySpecification?: (ctx: RegularQuerySpecificationContext) => void;
    /**
     * Exit a parse tree produced by the `regularQuerySpecification`
     * labeled alternative in `DorisParser.querySpecification`.
     * @param ctx the parse tree
     */
    exitRegularQuerySpecification?: (ctx: RegularQuerySpecificationContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.cte`.
     * @param ctx the parse tree
     */
    enterCte?: (ctx: CteContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.cte`.
     * @param ctx the parse tree
     */
    exitCte?: (ctx: CteContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.aliasQuery`.
     * @param ctx the parse tree
     */
    enterAliasQuery?: (ctx: AliasQueryContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.aliasQuery`.
     * @param ctx the parse tree
     */
    exitAliasQuery?: (ctx: AliasQueryContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.columnAliases`.
     * @param ctx the parse tree
     */
    enterColumnAliases?: (ctx: ColumnAliasesContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.columnAliases`.
     * @param ctx the parse tree
     */
    exitColumnAliases?: (ctx: ColumnAliasesContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.selectClause`.
     * @param ctx the parse tree
     */
    enterSelectClause?: (ctx: SelectClauseContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.selectClause`.
     * @param ctx the parse tree
     */
    exitSelectClause?: (ctx: SelectClauseContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.selectColumnClause`.
     * @param ctx the parse tree
     */
    enterSelectColumnClause?: (ctx: SelectColumnClauseContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.selectColumnClause`.
     * @param ctx the parse tree
     */
    exitSelectColumnClause?: (ctx: SelectColumnClauseContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.whereClause`.
     * @param ctx the parse tree
     */
    enterWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.whereClause`.
     * @param ctx the parse tree
     */
    exitWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.fromClause`.
     * @param ctx the parse tree
     */
    enterFromClause?: (ctx: FromClauseContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.fromClause`.
     * @param ctx the parse tree
     */
    exitFromClause?: (ctx: FromClauseContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.intoClause`.
     * @param ctx the parse tree
     */
    enterIntoClause?: (ctx: IntoClauseContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.intoClause`.
     * @param ctx the parse tree
     */
    exitIntoClause?: (ctx: IntoClauseContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.bulkCollectClause`.
     * @param ctx the parse tree
     */
    enterBulkCollectClause?: (ctx: BulkCollectClauseContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.bulkCollectClause`.
     * @param ctx the parse tree
     */
    exitBulkCollectClause?: (ctx: BulkCollectClauseContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.tableRow`.
     * @param ctx the parse tree
     */
    enterTableRow?: (ctx: TableRowContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.tableRow`.
     * @param ctx the parse tree
     */
    exitTableRow?: (ctx: TableRowContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.relations`.
     * @param ctx the parse tree
     */
    enterRelations?: (ctx: RelationsContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.relations`.
     * @param ctx the parse tree
     */
    exitRelations?: (ctx: RelationsContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.relation`.
     * @param ctx the parse tree
     */
    enterRelation?: (ctx: RelationContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.relation`.
     * @param ctx the parse tree
     */
    exitRelation?: (ctx: RelationContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.joinRelation`.
     * @param ctx the parse tree
     */
    enterJoinRelation?: (ctx: JoinRelationContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.joinRelation`.
     * @param ctx the parse tree
     */
    exitJoinRelation?: (ctx: JoinRelationContext) => void;
    /**
     * Enter a parse tree produced by the `bracketDistributeType`
     * labeled alternative in `DorisParser.distributeType`.
     * @param ctx the parse tree
     */
    enterBracketDistributeType?: (ctx: BracketDistributeTypeContext) => void;
    /**
     * Exit a parse tree produced by the `bracketDistributeType`
     * labeled alternative in `DorisParser.distributeType`.
     * @param ctx the parse tree
     */
    exitBracketDistributeType?: (ctx: BracketDistributeTypeContext) => void;
    /**
     * Enter a parse tree produced by the `commentDistributeType`
     * labeled alternative in `DorisParser.distributeType`.
     * @param ctx the parse tree
     */
    enterCommentDistributeType?: (ctx: CommentDistributeTypeContext) => void;
    /**
     * Exit a parse tree produced by the `commentDistributeType`
     * labeled alternative in `DorisParser.distributeType`.
     * @param ctx the parse tree
     */
    exitCommentDistributeType?: (ctx: CommentDistributeTypeContext) => void;
    /**
     * Enter a parse tree produced by the `bracketRelationHint`
     * labeled alternative in `DorisParser.relationHint`.
     * @param ctx the parse tree
     */
    enterBracketRelationHint?: (ctx: BracketRelationHintContext) => void;
    /**
     * Exit a parse tree produced by the `bracketRelationHint`
     * labeled alternative in `DorisParser.relationHint`.
     * @param ctx the parse tree
     */
    exitBracketRelationHint?: (ctx: BracketRelationHintContext) => void;
    /**
     * Enter a parse tree produced by the `commentRelationHint`
     * labeled alternative in `DorisParser.relationHint`.
     * @param ctx the parse tree
     */
    enterCommentRelationHint?: (ctx: CommentRelationHintContext) => void;
    /**
     * Exit a parse tree produced by the `commentRelationHint`
     * labeled alternative in `DorisParser.relationHint`.
     * @param ctx the parse tree
     */
    exitCommentRelationHint?: (ctx: CommentRelationHintContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.aggClause`.
     * @param ctx the parse tree
     */
    enterAggClause?: (ctx: AggClauseContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.aggClause`.
     * @param ctx the parse tree
     */
    exitAggClause?: (ctx: AggClauseContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.groupingElement`.
     * @param ctx the parse tree
     */
    enterGroupingElement?: (ctx: GroupingElementContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.groupingElement`.
     * @param ctx the parse tree
     */
    exitGroupingElement?: (ctx: GroupingElementContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.groupingSet`.
     * @param ctx the parse tree
     */
    enterGroupingSet?: (ctx: GroupingSetContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.groupingSet`.
     * @param ctx the parse tree
     */
    exitGroupingSet?: (ctx: GroupingSetContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.havingClause`.
     * @param ctx the parse tree
     */
    enterHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.havingClause`.
     * @param ctx the parse tree
     */
    exitHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.qualifyClause`.
     * @param ctx the parse tree
     */
    enterQualifyClause?: (ctx: QualifyClauseContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.qualifyClause`.
     * @param ctx the parse tree
     */
    exitQualifyClause?: (ctx: QualifyClauseContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.selectHint`.
     * @param ctx the parse tree
     */
    enterSelectHint?: (ctx: SelectHintContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.selectHint`.
     * @param ctx the parse tree
     */
    exitSelectHint?: (ctx: SelectHintContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.hintStatement`.
     * @param ctx the parse tree
     */
    enterHintStatement?: (ctx: HintStatementContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.hintStatement`.
     * @param ctx the parse tree
     */
    exitHintStatement?: (ctx: HintStatementContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.hintAssignment`.
     * @param ctx the parse tree
     */
    enterHintAssignment?: (ctx: HintAssignmentContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.hintAssignment`.
     * @param ctx the parse tree
     */
    exitHintAssignment?: (ctx: HintAssignmentContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.updateAssignment`.
     * @param ctx the parse tree
     */
    enterUpdateAssignment?: (ctx: UpdateAssignmentContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.updateAssignment`.
     * @param ctx the parse tree
     */
    exitUpdateAssignment?: (ctx: UpdateAssignmentContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.updateAssignmentSeq`.
     * @param ctx the parse tree
     */
    enterUpdateAssignmentSeq?: (ctx: UpdateAssignmentSeqContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.updateAssignmentSeq`.
     * @param ctx the parse tree
     */
    exitUpdateAssignmentSeq?: (ctx: UpdateAssignmentSeqContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.lateralView`.
     * @param ctx the parse tree
     */
    enterLateralView?: (ctx: LateralViewContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.lateralView`.
     * @param ctx the parse tree
     */
    exitLateralView?: (ctx: LateralViewContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.queryOrganization`.
     * @param ctx the parse tree
     */
    enterQueryOrganization?: (ctx: QueryOrganizationContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.queryOrganization`.
     * @param ctx the parse tree
     */
    exitQueryOrganization?: (ctx: QueryOrganizationContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.sortClause`.
     * @param ctx the parse tree
     */
    enterSortClause?: (ctx: SortClauseContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.sortClause`.
     * @param ctx the parse tree
     */
    exitSortClause?: (ctx: SortClauseContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.sortItem`.
     * @param ctx the parse tree
     */
    enterSortItem?: (ctx: SortItemContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.sortItem`.
     * @param ctx the parse tree
     */
    exitSortItem?: (ctx: SortItemContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.limitClause`.
     * @param ctx the parse tree
     */
    enterLimitClause?: (ctx: LimitClauseContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.limitClause`.
     * @param ctx the parse tree
     */
    exitLimitClause?: (ctx: LimitClauseContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.partitionClause`.
     * @param ctx the parse tree
     */
    enterPartitionClause?: (ctx: PartitionClauseContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.partitionClause`.
     * @param ctx the parse tree
     */
    exitPartitionClause?: (ctx: PartitionClauseContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.joinType`.
     * @param ctx the parse tree
     */
    enterJoinType?: (ctx: JoinTypeContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.joinType`.
     * @param ctx the parse tree
     */
    exitJoinType?: (ctx: JoinTypeContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.joinCriteria`.
     * @param ctx the parse tree
     */
    enterJoinCriteria?: (ctx: JoinCriteriaContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.joinCriteria`.
     * @param ctx the parse tree
     */
    exitJoinCriteria?: (ctx: JoinCriteriaContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.identifierList`.
     * @param ctx the parse tree
     */
    enterIdentifierList?: (ctx: IdentifierListContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.identifierList`.
     * @param ctx the parse tree
     */
    exitIdentifierList?: (ctx: IdentifierListContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.identifierSeq`.
     * @param ctx the parse tree
     */
    enterIdentifierSeq?: (ctx: IdentifierSeqContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.identifierSeq`.
     * @param ctx the parse tree
     */
    exitIdentifierSeq?: (ctx: IdentifierSeqContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.optScanParams`.
     * @param ctx the parse tree
     */
    enterOptScanParams?: (ctx: OptScanParamsContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.optScanParams`.
     * @param ctx the parse tree
     */
    exitOptScanParams?: (ctx: OptScanParamsContext) => void;
    /**
     * Enter a parse tree produced by the `tableName`
     * labeled alternative in `DorisParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterTableName?: (ctx: TableNameContext) => void;
    /**
     * Exit a parse tree produced by the `tableName`
     * labeled alternative in `DorisParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitTableName?: (ctx: TableNameContext) => void;
    /**
     * Enter a parse tree produced by the `aliasedQuery`
     * labeled alternative in `DorisParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterAliasedQuery?: (ctx: AliasedQueryContext) => void;
    /**
     * Exit a parse tree produced by the `aliasedQuery`
     * labeled alternative in `DorisParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitAliasedQuery?: (ctx: AliasedQueryContext) => void;
    /**
     * Enter a parse tree produced by the `tableValuedFunction`
     * labeled alternative in `DorisParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterTableValuedFunction?: (ctx: TableValuedFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `tableValuedFunction`
     * labeled alternative in `DorisParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitTableValuedFunction?: (ctx: TableValuedFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `relationList`
     * labeled alternative in `DorisParser.relationPrimary`.
     * @param ctx the parse tree
     */
    enterRelationList?: (ctx: RelationListContext) => void;
    /**
     * Exit a parse tree produced by the `relationList`
     * labeled alternative in `DorisParser.relationPrimary`.
     * @param ctx the parse tree
     */
    exitRelationList?: (ctx: RelationListContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.materializedViewName`.
     * @param ctx the parse tree
     */
    enterMaterializedViewName?: (ctx: MaterializedViewNameContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.materializedViewName`.
     * @param ctx the parse tree
     */
    exitMaterializedViewName?: (ctx: MaterializedViewNameContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.propertyClause`.
     * @param ctx the parse tree
     */
    enterPropertyClause?: (ctx: PropertyClauseContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.propertyClause`.
     * @param ctx the parse tree
     */
    exitPropertyClause?: (ctx: PropertyClauseContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.propertyItemList`.
     * @param ctx the parse tree
     */
    enterPropertyItemList?: (ctx: PropertyItemListContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.propertyItemList`.
     * @param ctx the parse tree
     */
    exitPropertyItemList?: (ctx: PropertyItemListContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.propertyItem`.
     * @param ctx the parse tree
     */
    enterPropertyItem?: (ctx: PropertyItemContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.propertyItem`.
     * @param ctx the parse tree
     */
    exitPropertyItem?: (ctx: PropertyItemContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.propertyKey`.
     * @param ctx the parse tree
     */
    enterPropertyKey?: (ctx: PropertyKeyContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.propertyKey`.
     * @param ctx the parse tree
     */
    exitPropertyKey?: (ctx: PropertyKeyContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.propertyValue`.
     * @param ctx the parse tree
     */
    enterPropertyValue?: (ctx: PropertyValueContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.propertyValue`.
     * @param ctx the parse tree
     */
    exitPropertyValue?: (ctx: PropertyValueContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.tableAlias`.
     * @param ctx the parse tree
     */
    enterTableAlias?: (ctx: TableAliasContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.tableAlias`.
     * @param ctx the parse tree
     */
    exitTableAlias?: (ctx: TableAliasContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.multipartIdentifier`.
     * @param ctx the parse tree
     */
    enterMultipartIdentifier?: (ctx: MultipartIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.multipartIdentifier`.
     * @param ctx the parse tree
     */
    exitMultipartIdentifier?: (ctx: MultipartIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.simpleColumnDefs`.
     * @param ctx the parse tree
     */
    enterSimpleColumnDefs?: (ctx: SimpleColumnDefsContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.simpleColumnDefs`.
     * @param ctx the parse tree
     */
    exitSimpleColumnDefs?: (ctx: SimpleColumnDefsContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.simpleColumnDef`.
     * @param ctx the parse tree
     */
    enterSimpleColumnDef?: (ctx: SimpleColumnDefContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.simpleColumnDef`.
     * @param ctx the parse tree
     */
    exitSimpleColumnDef?: (ctx: SimpleColumnDefContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.columnDefs`.
     * @param ctx the parse tree
     */
    enterColumnDefs?: (ctx: ColumnDefsContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.columnDefs`.
     * @param ctx the parse tree
     */
    exitColumnDefs?: (ctx: ColumnDefsContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.columnDef`.
     * @param ctx the parse tree
     */
    enterColumnDef?: (ctx: ColumnDefContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.columnDef`.
     * @param ctx the parse tree
     */
    exitColumnDef?: (ctx: ColumnDefContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.indexDefs`.
     * @param ctx the parse tree
     */
    enterIndexDefs?: (ctx: IndexDefsContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.indexDefs`.
     * @param ctx the parse tree
     */
    exitIndexDefs?: (ctx: IndexDefsContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.indexDef`.
     * @param ctx the parse tree
     */
    enterIndexDef?: (ctx: IndexDefContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.indexDef`.
     * @param ctx the parse tree
     */
    exitIndexDef?: (ctx: IndexDefContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.partitionsDef`.
     * @param ctx the parse tree
     */
    enterPartitionsDef?: (ctx: PartitionsDefContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.partitionsDef`.
     * @param ctx the parse tree
     */
    exitPartitionsDef?: (ctx: PartitionsDefContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.partitionDef`.
     * @param ctx the parse tree
     */
    enterPartitionDef?: (ctx: PartitionDefContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.partitionDef`.
     * @param ctx the parse tree
     */
    exitPartitionDef?: (ctx: PartitionDefContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.lessThanPartitionDef`.
     * @param ctx the parse tree
     */
    enterLessThanPartitionDef?: (ctx: LessThanPartitionDefContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.lessThanPartitionDef`.
     * @param ctx the parse tree
     */
    exitLessThanPartitionDef?: (ctx: LessThanPartitionDefContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.fixedPartitionDef`.
     * @param ctx the parse tree
     */
    enterFixedPartitionDef?: (ctx: FixedPartitionDefContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.fixedPartitionDef`.
     * @param ctx the parse tree
     */
    exitFixedPartitionDef?: (ctx: FixedPartitionDefContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.stepPartitionDef`.
     * @param ctx the parse tree
     */
    enterStepPartitionDef?: (ctx: StepPartitionDefContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.stepPartitionDef`.
     * @param ctx the parse tree
     */
    exitStepPartitionDef?: (ctx: StepPartitionDefContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.inPartitionDef`.
     * @param ctx the parse tree
     */
    enterInPartitionDef?: (ctx: InPartitionDefContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.inPartitionDef`.
     * @param ctx the parse tree
     */
    exitInPartitionDef?: (ctx: InPartitionDefContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.partitionValueList`.
     * @param ctx the parse tree
     */
    enterPartitionValueList?: (ctx: PartitionValueListContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.partitionValueList`.
     * @param ctx the parse tree
     */
    exitPartitionValueList?: (ctx: PartitionValueListContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.partitionValueDef`.
     * @param ctx the parse tree
     */
    enterPartitionValueDef?: (ctx: PartitionValueDefContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.partitionValueDef`.
     * @param ctx the parse tree
     */
    exitPartitionValueDef?: (ctx: PartitionValueDefContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.rollupDefs`.
     * @param ctx the parse tree
     */
    enterRollupDefs?: (ctx: RollupDefsContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.rollupDefs`.
     * @param ctx the parse tree
     */
    exitRollupDefs?: (ctx: RollupDefsContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.rollupDef`.
     * @param ctx the parse tree
     */
    enterRollupDef?: (ctx: RollupDefContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.rollupDef`.
     * @param ctx the parse tree
     */
    exitRollupDef?: (ctx: RollupDefContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.aggTypeDef`.
     * @param ctx the parse tree
     */
    enterAggTypeDef?: (ctx: AggTypeDefContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.aggTypeDef`.
     * @param ctx the parse tree
     */
    exitAggTypeDef?: (ctx: AggTypeDefContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.tabletList`.
     * @param ctx the parse tree
     */
    enterTabletList?: (ctx: TabletListContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.tabletList`.
     * @param ctx the parse tree
     */
    exitTabletList?: (ctx: TabletListContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.inlineTable`.
     * @param ctx the parse tree
     */
    enterInlineTable?: (ctx: InlineTableContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.inlineTable`.
     * @param ctx the parse tree
     */
    exitInlineTable?: (ctx: InlineTableContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.namedExpression`.
     * @param ctx the parse tree
     */
    enterNamedExpression?: (ctx: NamedExpressionContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.namedExpression`.
     * @param ctx the parse tree
     */
    exitNamedExpression?: (ctx: NamedExpressionContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.namedExpressionSeq`.
     * @param ctx the parse tree
     */
    enterNamedExpressionSeq?: (ctx: NamedExpressionSeqContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.namedExpressionSeq`.
     * @param ctx the parse tree
     */
    exitNamedExpressionSeq?: (ctx: NamedExpressionSeqContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.lambdaExpression`.
     * @param ctx the parse tree
     */
    enterLambdaExpression?: (ctx: LambdaExpressionContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.lambdaExpression`.
     * @param ctx the parse tree
     */
    exitLambdaExpression?: (ctx: LambdaExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `exist`
     * labeled alternative in `DorisParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterExist?: (ctx: ExistContext) => void;
    /**
     * Exit a parse tree produced by the `exist`
     * labeled alternative in `DorisParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitExist?: (ctx: ExistContext) => void;
    /**
     * Enter a parse tree produced by the `logicalNot`
     * labeled alternative in `DorisParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterLogicalNot?: (ctx: LogicalNotContext) => void;
    /**
     * Exit a parse tree produced by the `logicalNot`
     * labeled alternative in `DorisParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitLogicalNot?: (ctx: LogicalNotContext) => void;
    /**
     * Enter a parse tree produced by the `predicated`
     * labeled alternative in `DorisParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterPredicated?: (ctx: PredicatedContext) => void;
    /**
     * Exit a parse tree produced by the `predicated`
     * labeled alternative in `DorisParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitPredicated?: (ctx: PredicatedContext) => void;
    /**
     * Enter a parse tree produced by the `isnull`
     * labeled alternative in `DorisParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterIsnull?: (ctx: IsnullContext) => void;
    /**
     * Exit a parse tree produced by the `isnull`
     * labeled alternative in `DorisParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitIsnull?: (ctx: IsnullContext) => void;
    /**
     * Enter a parse tree produced by the `is_not_null_pred`
     * labeled alternative in `DorisParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterIs_not_null_pred?: (ctx: Is_not_null_predContext) => void;
    /**
     * Exit a parse tree produced by the `is_not_null_pred`
     * labeled alternative in `DorisParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitIs_not_null_pred?: (ctx: Is_not_null_predContext) => void;
    /**
     * Enter a parse tree produced by the `logicalBinary`
     * labeled alternative in `DorisParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterLogicalBinary?: (ctx: LogicalBinaryContext) => void;
    /**
     * Exit a parse tree produced by the `logicalBinary`
     * labeled alternative in `DorisParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitLogicalBinary?: (ctx: LogicalBinaryContext) => void;
    /**
     * Enter a parse tree produced by the `doublePipes`
     * labeled alternative in `DorisParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterDoublePipes?: (ctx: DoublePipesContext) => void;
    /**
     * Exit a parse tree produced by the `doublePipes`
     * labeled alternative in `DorisParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitDoublePipes?: (ctx: DoublePipesContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.rowConstructor`.
     * @param ctx the parse tree
     */
    enterRowConstructor?: (ctx: RowConstructorContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.rowConstructor`.
     * @param ctx the parse tree
     */
    exitRowConstructor?: (ctx: RowConstructorContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.rowConstructorItem`.
     * @param ctx the parse tree
     */
    enterRowConstructorItem?: (ctx: RowConstructorItemContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.rowConstructorItem`.
     * @param ctx the parse tree
     */
    exitRowConstructorItem?: (ctx: RowConstructorItemContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.predicate`.
     * @param ctx the parse tree
     */
    enterPredicate?: (ctx: PredicateContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.predicate`.
     * @param ctx the parse tree
     */
    exitPredicate?: (ctx: PredicateContext) => void;
    /**
     * Enter a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `DorisParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `DorisParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `comparison`
     * labeled alternative in `DorisParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterComparison?: (ctx: ComparisonContext) => void;
    /**
     * Exit a parse tree produced by the `comparison`
     * labeled alternative in `DorisParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitComparison?: (ctx: ComparisonContext) => void;
    /**
     * Enter a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `DorisParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
    /**
     * Exit a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `DorisParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
    /**
     * Enter a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `DorisParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
    /**
     * Exit a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `DorisParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.datetimeUnit`.
     * @param ctx the parse tree
     */
    enterDatetimeUnit?: (ctx: DatetimeUnitContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.datetimeUnit`.
     * @param ctx the parse tree
     */
    exitDatetimeUnit?: (ctx: DatetimeUnitContext) => void;
    /**
     * Enter a parse tree produced by the `dateCeil`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterDateCeil?: (ctx: DateCeilContext) => void;
    /**
     * Exit a parse tree produced by the `dateCeil`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitDateCeil?: (ctx: DateCeilContext) => void;
    /**
     * Enter a parse tree produced by the `dereference`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterDereference?: (ctx: DereferenceContext) => void;
    /**
     * Exit a parse tree produced by the `dereference`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitDereference?: (ctx: DereferenceContext) => void;
    /**
     * Enter a parse tree produced by the `currentDate`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCurrentDate?: (ctx: CurrentDateContext) => void;
    /**
     * Exit a parse tree produced by the `currentDate`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCurrentDate?: (ctx: CurrentDateContext) => void;
    /**
     * Enter a parse tree produced by the `timestampadd`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterTimestampadd?: (ctx: TimestampaddContext) => void;
    /**
     * Exit a parse tree produced by the `timestampadd`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitTimestampadd?: (ctx: TimestampaddContext) => void;
    /**
     * Enter a parse tree produced by the `date_sub`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterDate_sub?: (ctx: Date_subContext) => void;
    /**
     * Exit a parse tree produced by the `date_sub`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitDate_sub?: (ctx: Date_subContext) => void;
    /**
     * Enter a parse tree produced by the `cast`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCast?: (ctx: CastContext) => void;
    /**
     * Exit a parse tree produced by the `cast`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCast?: (ctx: CastContext) => void;
    /**
     * Enter a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `userVariable`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterUserVariable?: (ctx: UserVariableContext) => void;
    /**
     * Exit a parse tree produced by the `userVariable`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitUserVariable?: (ctx: UserVariableContext) => void;
    /**
     * Enter a parse tree produced by the `elementAt`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterElementAt?: (ctx: ElementAtContext) => void;
    /**
     * Exit a parse tree produced by the `elementAt`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitElementAt?: (ctx: ElementAtContext) => void;
    /**
     * Enter a parse tree produced by the `localTimestamp`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterLocalTimestamp?: (ctx: LocalTimestampContext) => void;
    /**
     * Exit a parse tree produced by the `localTimestamp`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitLocalTimestamp?: (ctx: LocalTimestampContext) => void;
    /**
     * Enter a parse tree produced by the `charFunction`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCharFunction?: (ctx: CharFunctionContext) => void;
    /**
     * Exit a parse tree produced by the `charFunction`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCharFunction?: (ctx: CharFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `intervalLiteral`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterIntervalLiteral?: (ctx: IntervalLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `intervalLiteral`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitIntervalLiteral?: (ctx: IntervalLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `arrayRange`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterArrayRange?: (ctx: ArrayRangeContext) => void;
    /**
     * Exit a parse tree produced by the `arrayRange`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitArrayRange?: (ctx: ArrayRangeContext) => void;
    /**
     * Enter a parse tree produced by the `simpleCase`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSimpleCase?: (ctx: SimpleCaseContext) => void;
    /**
     * Exit a parse tree produced by the `simpleCase`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSimpleCase?: (ctx: SimpleCaseContext) => void;
    /**
     * Enter a parse tree produced by the `columnReference`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterColumnReference?: (ctx: ColumnReferenceContext) => void;
    /**
     * Exit a parse tree produced by the `columnReference`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitColumnReference?: (ctx: ColumnReferenceContext) => void;
    /**
     * Enter a parse tree produced by the `star`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterStar?: (ctx: StarContext) => void;
    /**
     * Exit a parse tree produced by the `star`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitStar?: (ctx: StarContext) => void;
    /**
     * Enter a parse tree produced by the `sessionUser`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSessionUser?: (ctx: SessionUserContext) => void;
    /**
     * Exit a parse tree produced by the `sessionUser`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSessionUser?: (ctx: SessionUserContext) => void;
    /**
     * Enter a parse tree produced by the `convertType`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterConvertType?: (ctx: ConvertTypeContext) => void;
    /**
     * Exit a parse tree produced by the `convertType`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitConvertType?: (ctx: ConvertTypeContext) => void;
    /**
     * Enter a parse tree produced by the `timestampdiff`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterTimestampdiff?: (ctx: TimestampdiffContext) => void;
    /**
     * Exit a parse tree produced by the `timestampdiff`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitTimestampdiff?: (ctx: TimestampdiffContext) => void;
    /**
     * Enter a parse tree produced by the `convertCharSet`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterConvertCharSet?: (ctx: ConvertCharSetContext) => void;
    /**
     * Exit a parse tree produced by the `convertCharSet`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitConvertCharSet?: (ctx: ConvertCharSetContext) => void;
    /**
     * Enter a parse tree produced by the `subqueryExpression`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `subqueryExpression`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `encryptKey`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterEncryptKey?: (ctx: EncryptKeyContext) => void;
    /**
     * Exit a parse tree produced by the `encryptKey`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitEncryptKey?: (ctx: EncryptKeyContext) => void;
    /**
     * Enter a parse tree produced by the `date_add`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterDate_add?: (ctx: Date_addContext) => void;
    /**
     * Exit a parse tree produced by the `date_add`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitDate_add?: (ctx: Date_addContext) => void;
    /**
     * Enter a parse tree produced by the `currentTime`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCurrentTime?: (ctx: CurrentTimeContext) => void;
    /**
     * Exit a parse tree produced by the `currentTime`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCurrentTime?: (ctx: CurrentTimeContext) => void;
    /**
     * Enter a parse tree produced by the `localTime`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterLocalTime?: (ctx: LocalTimeContext) => void;
    /**
     * Exit a parse tree produced by the `localTime`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitLocalTime?: (ctx: LocalTimeContext) => void;
    /**
     * Enter a parse tree produced by the `systemVariable`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSystemVariable?: (ctx: SystemVariableContext) => void;
    /**
     * Exit a parse tree produced by the `systemVariable`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSystemVariable?: (ctx: SystemVariableContext) => void;
    /**
     * Enter a parse tree produced by the `collate`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCollate?: (ctx: CollateContext) => void;
    /**
     * Exit a parse tree produced by the `collate`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCollate?: (ctx: CollateContext) => void;
    /**
     * Enter a parse tree produced by the `currentUser`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCurrentUser?: (ctx: CurrentUserContext) => void;
    /**
     * Exit a parse tree produced by the `currentUser`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCurrentUser?: (ctx: CurrentUserContext) => void;
    /**
     * Enter a parse tree produced by the `constantDefault`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterConstantDefault?: (ctx: ConstantDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `constantDefault`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitConstantDefault?: (ctx: ConstantDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `extract`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterExtract?: (ctx: ExtractContext) => void;
    /**
     * Exit a parse tree produced by the `extract`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitExtract?: (ctx: ExtractContext) => void;
    /**
     * Enter a parse tree produced by the `currentTimestamp`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCurrentTimestamp?: (ctx: CurrentTimestampContext) => void;
    /**
     * Exit a parse tree produced by the `currentTimestamp`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCurrentTimestamp?: (ctx: CurrentTimestampContext) => void;
    /**
     * Enter a parse tree produced by the `functionCall`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `functionCall`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `arraySlice`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterArraySlice?: (ctx: ArraySliceContext) => void;
    /**
     * Exit a parse tree produced by the `arraySlice`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitArraySlice?: (ctx: ArraySliceContext) => void;
    /**
     * Enter a parse tree produced by the `bitOperation`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterBitOperation?: (ctx: BitOperationContext) => void;
    /**
     * Exit a parse tree produced by the `bitOperation`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitBitOperation?: (ctx: BitOperationContext) => void;
    /**
     * Enter a parse tree produced by the `dateFloor`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterDateFloor?: (ctx: DateFloorContext) => void;
    /**
     * Exit a parse tree produced by the `dateFloor`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitDateFloor?: (ctx: DateFloorContext) => void;
    /**
     * Enter a parse tree produced by the `searchedCase`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSearchedCase?: (ctx: SearchedCaseContext) => void;
    /**
     * Exit a parse tree produced by the `searchedCase`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSearchedCase?: (ctx: SearchedCaseContext) => void;
    /**
     * Enter a parse tree produced by the `except`
     * labeled alternative in `DorisParser.exceptOrReplace`.
     * @param ctx the parse tree
     */
    enterExcept?: (ctx: ExceptContext) => void;
    /**
     * Exit a parse tree produced by the `except`
     * labeled alternative in `DorisParser.exceptOrReplace`.
     * @param ctx the parse tree
     */
    exitExcept?: (ctx: ExceptContext) => void;
    /**
     * Enter a parse tree produced by the `replace`
     * labeled alternative in `DorisParser.exceptOrReplace`.
     * @param ctx the parse tree
     */
    enterReplace?: (ctx: ReplaceContext) => void;
    /**
     * Exit a parse tree produced by the `replace`
     * labeled alternative in `DorisParser.exceptOrReplace`.
     * @param ctx the parse tree
     */
    exitReplace?: (ctx: ReplaceContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.castDataType`.
     * @param ctx the parse tree
     */
    enterCastDataType?: (ctx: CastDataTypeContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.castDataType`.
     * @param ctx the parse tree
     */
    exitCastDataType?: (ctx: CastDataTypeContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.functionCallExpression`.
     * @param ctx the parse tree
     */
    enterFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.functionCallExpression`.
     * @param ctx the parse tree
     */
    exitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.functionIdentifier`.
     * @param ctx the parse tree
     */
    enterFunctionIdentifier?: (ctx: FunctionIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.functionIdentifier`.
     * @param ctx the parse tree
     */
    exitFunctionIdentifier?: (ctx: FunctionIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.functionNameIdentifier`.
     * @param ctx the parse tree
     */
    enterFunctionNameIdentifier?: (ctx: FunctionNameIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.functionNameIdentifier`.
     * @param ctx the parse tree
     */
    exitFunctionNameIdentifier?: (ctx: FunctionNameIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.windowSpec`.
     * @param ctx the parse tree
     */
    enterWindowSpec?: (ctx: WindowSpecContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.windowSpec`.
     * @param ctx the parse tree
     */
    exitWindowSpec?: (ctx: WindowSpecContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.windowFrame`.
     * @param ctx the parse tree
     */
    enterWindowFrame?: (ctx: WindowFrameContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.windowFrame`.
     * @param ctx the parse tree
     */
    exitWindowFrame?: (ctx: WindowFrameContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.frameUnits`.
     * @param ctx the parse tree
     */
    enterFrameUnits?: (ctx: FrameUnitsContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.frameUnits`.
     * @param ctx the parse tree
     */
    exitFrameUnits?: (ctx: FrameUnitsContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.frameBoundary`.
     * @param ctx the parse tree
     */
    enterFrameBoundary?: (ctx: FrameBoundaryContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.frameBoundary`.
     * @param ctx the parse tree
     */
    exitFrameBoundary?: (ctx: FrameBoundaryContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.qualifiedName`.
     * @param ctx the parse tree
     */
    enterQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.qualifiedName`.
     * @param ctx the parse tree
     */
    exitQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.specifiedPartition`.
     * @param ctx the parse tree
     */
    enterSpecifiedPartition?: (ctx: SpecifiedPartitionContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.specifiedPartition`.
     * @param ctx the parse tree
     */
    exitSpecifiedPartition?: (ctx: SpecifiedPartitionContext) => void;
    /**
     * Enter a parse tree produced by the `nullLiteral`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     */
    enterNullLiteral?: (ctx: NullLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `nullLiteral`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     */
    exitNullLiteral?: (ctx: NullLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `typeConstructor`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     */
    enterTypeConstructor?: (ctx: TypeConstructorContext) => void;
    /**
     * Exit a parse tree produced by the `typeConstructor`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     */
    exitTypeConstructor?: (ctx: TypeConstructorContext) => void;
    /**
     * Enter a parse tree produced by the `numericLiteral`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     */
    enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `numericLiteral`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     */
    exitNumericLiteral?: (ctx: NumericLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `booleanLiteral`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     */
    enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `booleanLiteral`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     */
    exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `stringLiteral`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     */
    enterStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `stringLiteral`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     */
    exitStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `arrayLiteral`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     */
    enterArrayLiteral?: (ctx: ArrayLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `arrayLiteral`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     */
    exitArrayLiteral?: (ctx: ArrayLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `mapLiteral`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     */
    enterMapLiteral?: (ctx: MapLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `mapLiteral`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     */
    exitMapLiteral?: (ctx: MapLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `structLiteral`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     */
    enterStructLiteral?: (ctx: StructLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `structLiteral`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     */
    exitStructLiteral?: (ctx: StructLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `placeholder`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     */
    enterPlaceholder?: (ctx: PlaceholderContext) => void;
    /**
     * Exit a parse tree produced by the `placeholder`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     */
    exitPlaceholder?: (ctx: PlaceholderContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.booleanValue`.
     * @param ctx the parse tree
     */
    enterBooleanValue?: (ctx: BooleanValueContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.booleanValue`.
     * @param ctx the parse tree
     */
    exitBooleanValue?: (ctx: BooleanValueContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.whenClause`.
     * @param ctx the parse tree
     */
    enterWhenClause?: (ctx: WhenClauseContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.whenClause`.
     * @param ctx the parse tree
     */
    exitWhenClause?: (ctx: WhenClauseContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.interval`.
     * @param ctx the parse tree
     */
    enterInterval?: (ctx: IntervalContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.interval`.
     * @param ctx the parse tree
     */
    exitInterval?: (ctx: IntervalContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.unitIdentifier`.
     * @param ctx the parse tree
     */
    enterUnitIdentifier?: (ctx: UnitIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.unitIdentifier`.
     * @param ctx the parse tree
     */
    exitUnitIdentifier?: (ctx: UnitIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.dataTypeWithNullable`.
     * @param ctx the parse tree
     */
    enterDataTypeWithNullable?: (ctx: DataTypeWithNullableContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.dataTypeWithNullable`.
     * @param ctx the parse tree
     */
    exitDataTypeWithNullable?: (ctx: DataTypeWithNullableContext) => void;
    /**
     * Enter a parse tree produced by the `complexDataType`
     * labeled alternative in `DorisParser.dataType`.
     * @param ctx the parse tree
     */
    enterComplexDataType?: (ctx: ComplexDataTypeContext) => void;
    /**
     * Exit a parse tree produced by the `complexDataType`
     * labeled alternative in `DorisParser.dataType`.
     * @param ctx the parse tree
     */
    exitComplexDataType?: (ctx: ComplexDataTypeContext) => void;
    /**
     * Enter a parse tree produced by the `aggStateDataType`
     * labeled alternative in `DorisParser.dataType`.
     * @param ctx the parse tree
     */
    enterAggStateDataType?: (ctx: AggStateDataTypeContext) => void;
    /**
     * Exit a parse tree produced by the `aggStateDataType`
     * labeled alternative in `DorisParser.dataType`.
     * @param ctx the parse tree
     */
    exitAggStateDataType?: (ctx: AggStateDataTypeContext) => void;
    /**
     * Enter a parse tree produced by the `primitiveDataType`
     * labeled alternative in `DorisParser.dataType`.
     * @param ctx the parse tree
     */
    enterPrimitiveDataType?: (ctx: PrimitiveDataTypeContext) => void;
    /**
     * Exit a parse tree produced by the `primitiveDataType`
     * labeled alternative in `DorisParser.dataType`.
     * @param ctx the parse tree
     */
    exitPrimitiveDataType?: (ctx: PrimitiveDataTypeContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.primitiveColType`.
     * @param ctx the parse tree
     */
    enterPrimitiveColType?: (ctx: PrimitiveColTypeContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.primitiveColType`.
     * @param ctx the parse tree
     */
    exitPrimitiveColType?: (ctx: PrimitiveColTypeContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.complexColTypeList`.
     * @param ctx the parse tree
     */
    enterComplexColTypeList?: (ctx: ComplexColTypeListContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.complexColTypeList`.
     * @param ctx the parse tree
     */
    exitComplexColTypeList?: (ctx: ComplexColTypeListContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.complexColType`.
     * @param ctx the parse tree
     */
    enterComplexColType?: (ctx: ComplexColTypeContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.complexColType`.
     * @param ctx the parse tree
     */
    exitComplexColType?: (ctx: ComplexColTypeContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.commentSpec`.
     * @param ctx the parse tree
     */
    enterCommentSpec?: (ctx: CommentSpecContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.commentSpec`.
     * @param ctx the parse tree
     */
    exitCommentSpec?: (ctx: CommentSpecContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.sample`.
     * @param ctx the parse tree
     */
    enterSample?: (ctx: SampleContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.sample`.
     * @param ctx the parse tree
     */
    exitSample?: (ctx: SampleContext) => void;
    /**
     * Enter a parse tree produced by the `sampleByPercentile`
     * labeled alternative in `DorisParser.sampleMethod`.
     * @param ctx the parse tree
     */
    enterSampleByPercentile?: (ctx: SampleByPercentileContext) => void;
    /**
     * Exit a parse tree produced by the `sampleByPercentile`
     * labeled alternative in `DorisParser.sampleMethod`.
     * @param ctx the parse tree
     */
    exitSampleByPercentile?: (ctx: SampleByPercentileContext) => void;
    /**
     * Enter a parse tree produced by the `sampleByRows`
     * labeled alternative in `DorisParser.sampleMethod`.
     * @param ctx the parse tree
     */
    enterSampleByRows?: (ctx: SampleByRowsContext) => void;
    /**
     * Exit a parse tree produced by the `sampleByRows`
     * labeled alternative in `DorisParser.sampleMethod`.
     * @param ctx the parse tree
     */
    exitSampleByRows?: (ctx: SampleByRowsContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.tableSnapshot`.
     * @param ctx the parse tree
     */
    enterTableSnapshot?: (ctx: TableSnapshotContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.tableSnapshot`.
     * @param ctx the parse tree
     */
    exitTableSnapshot?: (ctx: TableSnapshotContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.errorCapturingIdentifier`.
     * @param ctx the parse tree
     */
    enterErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.errorCapturingIdentifier`.
     * @param ctx the parse tree
     */
    exitErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => void;
    /**
     * Enter a parse tree produced by the `errorIdent`
     * labeled alternative in `DorisParser.errorCapturingIdentifierExtra`.
     * @param ctx the parse tree
     */
    enterErrorIdent?: (ctx: ErrorIdentContext) => void;
    /**
     * Exit a parse tree produced by the `errorIdent`
     * labeled alternative in `DorisParser.errorCapturingIdentifierExtra`.
     * @param ctx the parse tree
     */
    exitErrorIdent?: (ctx: ErrorIdentContext) => void;
    /**
     * Enter a parse tree produced by the `realIdent`
     * labeled alternative in `DorisParser.errorCapturingIdentifierExtra`.
     * @param ctx the parse tree
     */
    enterRealIdent?: (ctx: RealIdentContext) => void;
    /**
     * Exit a parse tree produced by the `realIdent`
     * labeled alternative in `DorisParser.errorCapturingIdentifierExtra`.
     * @param ctx the parse tree
     */
    exitRealIdent?: (ctx: RealIdentContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.identifier`.
     * @param ctx the parse tree
     */
    enterIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.identifier`.
     * @param ctx the parse tree
     */
    exitIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Enter a parse tree produced by the `unquotedIdentifier`
     * labeled alternative in `DorisParser.strictIdentifier`.
     * @param ctx the parse tree
     */
    enterUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by the `unquotedIdentifier`
     * labeled alternative in `DorisParser.strictIdentifier`.
     * @param ctx the parse tree
     */
    exitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
    /**
     * Enter a parse tree produced by the `quotedIdentifierAlternative`
     * labeled alternative in `DorisParser.strictIdentifier`.
     * @param ctx the parse tree
     */
    enterQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => void;
    /**
     * Exit a parse tree produced by the `quotedIdentifierAlternative`
     * labeled alternative in `DorisParser.strictIdentifier`.
     * @param ctx the parse tree
     */
    exitQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.quotedIdentifier`.
     * @param ctx the parse tree
     */
    enterQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.quotedIdentifier`.
     * @param ctx the parse tree
     */
    exitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
    /**
     * Enter a parse tree produced by the `integerLiteral`
     * labeled alternative in `DorisParser.number`.
     * @param ctx the parse tree
     */
    enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `integerLiteral`
     * labeled alternative in `DorisParser.number`.
     * @param ctx the parse tree
     */
    exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `decimalLiteral`
     * labeled alternative in `DorisParser.number`.
     * @param ctx the parse tree
     */
    enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `decimalLiteral`
     * labeled alternative in `DorisParser.number`.
     * @param ctx the parse tree
     */
    exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
    /**
     * Enter a parse tree produced by `DorisParser.nonReserved`.
     * @param ctx the parse tree
     */
    enterNonReserved?: (ctx: NonReservedContext) => void;
    /**
     * Exit a parse tree produced by `DorisParser.nonReserved`.
     * @param ctx the parse tree
     */
    exitNonReserved?: (ctx: NonReservedContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

