// Generated from dt-sql-parser/src/grammar/doris/DorisParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import { AbstractParseTreeVisitor } from "antlr4ng";


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `DorisParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class DorisParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `DorisParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.multiStatements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiStatements?: (ctx: MultiStatementsContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.singleStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleStatement?: (ctx: SingleStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `statementBaseAlias`
     * labeled alternative in `DorisParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatementBaseAlias?: (ctx: StatementBaseAliasContext) => Result;
    /**
     * Visit a parse tree produced by the `callProcedure`
     * labeled alternative in `DorisParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallProcedure?: (ctx: CallProcedureContext) => Result;
    /**
     * Visit a parse tree produced by the `createProcedure`
     * labeled alternative in `DorisParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateProcedure?: (ctx: CreateProcedureContext) => Result;
    /**
     * Visit a parse tree produced by the `dropProcedure`
     * labeled alternative in `DorisParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropProcedure?: (ctx: DropProcedureContext) => Result;
    /**
     * Visit a parse tree produced by the `showProcedureStatus`
     * labeled alternative in `DorisParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowProcedureStatus?: (ctx: ShowProcedureStatusContext) => Result;
    /**
     * Visit a parse tree produced by the `showCreateProcedure`
     * labeled alternative in `DorisParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateProcedure?: (ctx: ShowCreateProcedureContext) => Result;
    /**
     * Visit a parse tree produced by the `showConfig`
     * labeled alternative in `DorisParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowConfig?: (ctx: ShowConfigContext) => Result;
    /**
     * Visit a parse tree produced by the `statementDefault`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatementDefault?: (ctx: StatementDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `supportedDmlStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupportedDmlStatementAlias?: (ctx: SupportedDmlStatementAliasContext) => Result;
    /**
     * Visit a parse tree produced by the `supportedCreateStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupportedCreateStatementAlias?: (ctx: SupportedCreateStatementAliasContext) => Result;
    /**
     * Visit a parse tree produced by the `supportedAlterStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupportedAlterStatementAlias?: (ctx: SupportedAlterStatementAliasContext) => Result;
    /**
     * Visit a parse tree produced by the `materializedViewStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMaterializedViewStatementAlias?: (ctx: MaterializedViewStatementAliasContext) => Result;
    /**
     * Visit a parse tree produced by the `supportedJobStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupportedJobStatementAlias?: (ctx: SupportedJobStatementAliasContext) => Result;
    /**
     * Visit a parse tree produced by the `constraintStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraintStatementAlias?: (ctx: ConstraintStatementAliasContext) => Result;
    /**
     * Visit a parse tree produced by the `supportedCleanStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupportedCleanStatementAlias?: (ctx: SupportedCleanStatementAliasContext) => Result;
    /**
     * Visit a parse tree produced by the `supportedDropStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupportedDropStatementAlias?: (ctx: SupportedDropStatementAliasContext) => Result;
    /**
     * Visit a parse tree produced by the `supportedSetStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupportedSetStatementAlias?: (ctx: SupportedSetStatementAliasContext) => Result;
    /**
     * Visit a parse tree produced by the `supportedUnsetStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupportedUnsetStatementAlias?: (ctx: SupportedUnsetStatementAliasContext) => Result;
    /**
     * Visit a parse tree produced by the `supportedRefreshStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupportedRefreshStatementAlias?: (ctx: SupportedRefreshStatementAliasContext) => Result;
    /**
     * Visit a parse tree produced by the `supportedShowStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupportedShowStatementAlias?: (ctx: SupportedShowStatementAliasContext) => Result;
    /**
     * Visit a parse tree produced by the `supportedLoadStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupportedLoadStatementAlias?: (ctx: SupportedLoadStatementAliasContext) => Result;
    /**
     * Visit a parse tree produced by the `supportedCancelStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupportedCancelStatementAlias?: (ctx: SupportedCancelStatementAliasContext) => Result;
    /**
     * Visit a parse tree produced by the `supportedRecoverStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupportedRecoverStatementAlias?: (ctx: SupportedRecoverStatementAliasContext) => Result;
    /**
     * Visit a parse tree produced by the `supportedAdminStatementAlias`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupportedAdminStatementAlias?: (ctx: SupportedAdminStatementAliasContext) => Result;
    /**
     * Visit a parse tree produced by the `unsupported`
     * labeled alternative in `DorisParser.statementBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsupported?: (ctx: UnsupportedContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.unsupportedStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsupportedStatement?: (ctx: UnsupportedStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `createMTMV`
     * labeled alternative in `DorisParser.materializedViewStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateMTMV?: (ctx: CreateMTMVContext) => Result;
    /**
     * Visit a parse tree produced by the `refreshMTMV`
     * labeled alternative in `DorisParser.materializedViewStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshMTMV?: (ctx: RefreshMTMVContext) => Result;
    /**
     * Visit a parse tree produced by the `alterMTMV`
     * labeled alternative in `DorisParser.materializedViewStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterMTMV?: (ctx: AlterMTMVContext) => Result;
    /**
     * Visit a parse tree produced by the `dropMTMV`
     * labeled alternative in `DorisParser.materializedViewStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropMTMV?: (ctx: DropMTMVContext) => Result;
    /**
     * Visit a parse tree produced by the `pauseMTMV`
     * labeled alternative in `DorisParser.materializedViewStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPauseMTMV?: (ctx: PauseMTMVContext) => Result;
    /**
     * Visit a parse tree produced by the `resumeMTMV`
     * labeled alternative in `DorisParser.materializedViewStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResumeMTMV?: (ctx: ResumeMTMVContext) => Result;
    /**
     * Visit a parse tree produced by the `cancelMTMVTask`
     * labeled alternative in `DorisParser.materializedViewStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCancelMTMVTask?: (ctx: CancelMTMVTaskContext) => Result;
    /**
     * Visit a parse tree produced by the `showCreateMTMV`
     * labeled alternative in `DorisParser.materializedViewStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateMTMV?: (ctx: ShowCreateMTMVContext) => Result;
    /**
     * Visit a parse tree produced by the `createScheduledJob`
     * labeled alternative in `DorisParser.supportedJobStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateScheduledJob?: (ctx: CreateScheduledJobContext) => Result;
    /**
     * Visit a parse tree produced by the `pauseJob`
     * labeled alternative in `DorisParser.supportedJobStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPauseJob?: (ctx: PauseJobContext) => Result;
    /**
     * Visit a parse tree produced by the `dropJob`
     * labeled alternative in `DorisParser.supportedJobStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropJob?: (ctx: DropJobContext) => Result;
    /**
     * Visit a parse tree produced by the `resumeJob`
     * labeled alternative in `DorisParser.supportedJobStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResumeJob?: (ctx: ResumeJobContext) => Result;
    /**
     * Visit a parse tree produced by the `cancelJobTask`
     * labeled alternative in `DorisParser.supportedJobStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCancelJobTask?: (ctx: CancelJobTaskContext) => Result;
    /**
     * Visit a parse tree produced by the `addConstraint`
     * labeled alternative in `DorisParser.constraintStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddConstraint?: (ctx: AddConstraintContext) => Result;
    /**
     * Visit a parse tree produced by the `dropConstraint`
     * labeled alternative in `DorisParser.constraintStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropConstraint?: (ctx: DropConstraintContext) => Result;
    /**
     * Visit a parse tree produced by the `showConstraint`
     * labeled alternative in `DorisParser.constraintStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowConstraint?: (ctx: ShowConstraintContext) => Result;
    /**
     * Visit a parse tree produced by the `insertTable`
     * labeled alternative in `DorisParser.supportedDmlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertTable?: (ctx: InsertTableContext) => Result;
    /**
     * Visit a parse tree produced by the `update`
     * labeled alternative in `DorisParser.supportedDmlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdate?: (ctx: UpdateContext) => Result;
    /**
     * Visit a parse tree produced by the `delete`
     * labeled alternative in `DorisParser.supportedDmlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDelete?: (ctx: DeleteContext) => Result;
    /**
     * Visit a parse tree produced by the `load`
     * labeled alternative in `DorisParser.supportedDmlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoad?: (ctx: LoadContext) => Result;
    /**
     * Visit a parse tree produced by the `export`
     * labeled alternative in `DorisParser.supportedDmlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExport?: (ctx: ExportContext) => Result;
    /**
     * Visit a parse tree produced by the `replay`
     * labeled alternative in `DorisParser.supportedDmlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplay?: (ctx: ReplayContext) => Result;
    /**
     * Visit a parse tree produced by the `createTable`
     * labeled alternative in `DorisParser.supportedCreateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTable?: (ctx: CreateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `createView`
     * labeled alternative in `DorisParser.supportedCreateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateView?: (ctx: CreateViewContext) => Result;
    /**
     * Visit a parse tree produced by the `createTableLike`
     * labeled alternative in `DorisParser.supportedCreateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTableLike?: (ctx: CreateTableLikeContext) => Result;
    /**
     * Visit a parse tree produced by the `createRowPolicy`
     * labeled alternative in `DorisParser.supportedCreateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateRowPolicy?: (ctx: CreateRowPolicyContext) => Result;
    /**
     * Visit a parse tree produced by the `alterView`
     * labeled alternative in `DorisParser.supportedAlterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterView?: (ctx: AlterViewContext) => Result;
    /**
     * Visit a parse tree produced by the `alterStorageVault`
     * labeled alternative in `DorisParser.supportedAlterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStorageVault?: (ctx: AlterStorageVaultContext) => Result;
    /**
     * Visit a parse tree produced by the `alterRole`
     * labeled alternative in `DorisParser.supportedAlterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterRole?: (ctx: AlterRoleContext) => Result;
    /**
     * Visit a parse tree produced by the `alterWorkloadGroup`
     * labeled alternative in `DorisParser.supportedAlterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterWorkloadGroup?: (ctx: AlterWorkloadGroupContext) => Result;
    /**
     * Visit a parse tree produced by the `alterWorkloadPolicy`
     * labeled alternative in `DorisParser.supportedAlterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterWorkloadPolicy?: (ctx: AlterWorkloadPolicyContext) => Result;
    /**
     * Visit a parse tree produced by the `dropCatalogRecycleBin`
     * labeled alternative in `DorisParser.supportedDropStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropCatalogRecycleBin?: (ctx: DropCatalogRecycleBinContext) => Result;
    /**
     * Visit a parse tree produced by the `dropEncryptkey`
     * labeled alternative in `DorisParser.supportedDropStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropEncryptkey?: (ctx: DropEncryptkeyContext) => Result;
    /**
     * Visit a parse tree produced by the `dropRole`
     * labeled alternative in `DorisParser.supportedDropStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropRole?: (ctx: DropRoleContext) => Result;
    /**
     * Visit a parse tree produced by the `dropSqlBlockRule`
     * labeled alternative in `DorisParser.supportedDropStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropSqlBlockRule?: (ctx: DropSqlBlockRuleContext) => Result;
    /**
     * Visit a parse tree produced by the `dropUser`
     * labeled alternative in `DorisParser.supportedDropStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropUser?: (ctx: DropUserContext) => Result;
    /**
     * Visit a parse tree produced by the `dropWorkloadGroup`
     * labeled alternative in `DorisParser.supportedDropStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropWorkloadGroup?: (ctx: DropWorkloadGroupContext) => Result;
    /**
     * Visit a parse tree produced by the `dropFile`
     * labeled alternative in `DorisParser.supportedDropStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropFile?: (ctx: DropFileContext) => Result;
    /**
     * Visit a parse tree produced by the `dropWorkloadPolicy`
     * labeled alternative in `DorisParser.supportedDropStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropWorkloadPolicy?: (ctx: DropWorkloadPolicyContext) => Result;
    /**
     * Visit a parse tree produced by the `showVariables`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowVariables?: (ctx: ShowVariablesContext) => Result;
    /**
     * Visit a parse tree produced by the `showAuthors`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowAuthors?: (ctx: ShowAuthorsContext) => Result;
    /**
     * Visit a parse tree produced by the `showBroker`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowBroker?: (ctx: ShowBrokerContext) => Result;
    /**
     * Visit a parse tree produced by the `showDynamicPartition`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowDynamicPartition?: (ctx: ShowDynamicPartitionContext) => Result;
    /**
     * Visit a parse tree produced by the `showEvents`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowEvents?: (ctx: ShowEventsContext) => Result;
    /**
     * Visit a parse tree produced by the `showLastInsert`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowLastInsert?: (ctx: ShowLastInsertContext) => Result;
    /**
     * Visit a parse tree produced by the `showDelete`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowDelete?: (ctx: ShowDeleteContext) => Result;
    /**
     * Visit a parse tree produced by the `showGrants`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowGrants?: (ctx: ShowGrantsContext) => Result;
    /**
     * Visit a parse tree produced by the `showGrantsForUser`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowGrantsForUser?: (ctx: ShowGrantsForUserContext) => Result;
    /**
     * Visit a parse tree produced by the `showLoadProfile`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowLoadProfile?: (ctx: ShowLoadProfileContext) => Result;
    /**
     * Visit a parse tree produced by the `showView`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowView?: (ctx: ShowViewContext) => Result;
    /**
     * Visit a parse tree produced by the `showPlugins`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowPlugins?: (ctx: ShowPluginsContext) => Result;
    /**
     * Visit a parse tree produced by the `showRepositories`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowRepositories?: (ctx: ShowRepositoriesContext) => Result;
    /**
     * Visit a parse tree produced by the `showCreateTable`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateTable?: (ctx: ShowCreateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `showRoles`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowRoles?: (ctx: ShowRolesContext) => Result;
    /**
     * Visit a parse tree produced by the `showPartitionId`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowPartitionId?: (ctx: ShowPartitionIdContext) => Result;
    /**
     * Visit a parse tree produced by the `showPrivileges`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowPrivileges?: (ctx: ShowPrivilegesContext) => Result;
    /**
     * Visit a parse tree produced by the `showProc`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowProc?: (ctx: ShowProcContext) => Result;
    /**
     * Visit a parse tree produced by the `showSmallFiles`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowSmallFiles?: (ctx: ShowSmallFilesContext) => Result;
    /**
     * Visit a parse tree produced by the `showStorageEngines`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowStorageEngines?: (ctx: ShowStorageEnginesContext) => Result;
    /**
     * Visit a parse tree produced by the `showCreateCatalog`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateCatalog?: (ctx: ShowCreateCatalogContext) => Result;
    /**
     * Visit a parse tree produced by the `showSqlBlockRule`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowSqlBlockRule?: (ctx: ShowSqlBlockRuleContext) => Result;
    /**
     * Visit a parse tree produced by the `showCreateView`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateView?: (ctx: ShowCreateViewContext) => Result;
    /**
     * Visit a parse tree produced by the `showCreateMaterializedView`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateMaterializedView?: (ctx: ShowCreateMaterializedViewContext) => Result;
    /**
     * Visit a parse tree produced by the `showBackends`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowBackends?: (ctx: ShowBackendsContext) => Result;
    /**
     * Visit a parse tree produced by the `showReplicaDistribution`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowReplicaDistribution?: (ctx: ShowReplicaDistributionContext) => Result;
    /**
     * Visit a parse tree produced by the `showTriggers`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTriggers?: (ctx: ShowTriggersContext) => Result;
    /**
     * Visit a parse tree produced by the `showDiagnoseTablet`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowDiagnoseTablet?: (ctx: ShowDiagnoseTabletContext) => Result;
    /**
     * Visit a parse tree produced by the `showFrontends`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowFrontends?: (ctx: ShowFrontendsContext) => Result;
    /**
     * Visit a parse tree produced by the `showTableId`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTableId?: (ctx: ShowTableIdContext) => Result;
    /**
     * Visit a parse tree produced by the `showWhitelist`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowWhitelist?: (ctx: ShowWhitelistContext) => Result;
    /**
     * Visit a parse tree produced by the `showTabletsBelong`
     * labeled alternative in `DorisParser.supportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTabletsBelong?: (ctx: ShowTabletsBelongContext) => Result;
    /**
     * Visit a parse tree produced by the `sync`
     * labeled alternative in `DorisParser.supportedLoadStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSync?: (ctx: SyncContext) => Result;
    /**
     * Visit a parse tree produced by the `createRoutineLoadAlias`
     * labeled alternative in `DorisParser.supportedLoadStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateRoutineLoadAlias?: (ctx: CreateRoutineLoadAliasContext) => Result;
    /**
     * Visit a parse tree produced by the `help`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHelp?: (ctx: HelpContext) => Result;
    /**
     * Visit a parse tree produced by the `installPlugin`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInstallPlugin?: (ctx: InstallPluginContext) => Result;
    /**
     * Visit a parse tree produced by the `uninstallPlugin`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUninstallPlugin?: (ctx: UninstallPluginContext) => Result;
    /**
     * Visit a parse tree produced by the `lockTables`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLockTables?: (ctx: LockTablesContext) => Result;
    /**
     * Visit a parse tree produced by the `unlockTables`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnlockTables?: (ctx: UnlockTablesContext) => Result;
    /**
     * Visit a parse tree produced by the `warmUpCluster`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWarmUpCluster?: (ctx: WarmUpClusterContext) => Result;
    /**
     * Visit a parse tree produced by the `backup`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBackup?: (ctx: BackupContext) => Result;
    /**
     * Visit a parse tree produced by the `restore`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRestore?: (ctx: RestoreContext) => Result;
    /**
     * Visit a parse tree produced by the `unsupportedStartTransaction`
     * labeled alternative in `DorisParser.unsupportedOtherStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsupportedStartTransaction?: (ctx: UnsupportedStartTransactionContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.warmUpItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWarmUpItem?: (ctx: WarmUpItemContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.lockTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLockTable?: (ctx: LockTableContext) => Result;
    /**
     * Visit a parse tree produced by the `showRowPolicy`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowRowPolicy?: (ctx: ShowRowPolicyContext) => Result;
    /**
     * Visit a parse tree produced by the `showStoragePolicy`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowStoragePolicy?: (ctx: ShowStoragePolicyContext) => Result;
    /**
     * Visit a parse tree produced by the `showStages`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowStages?: (ctx: ShowStagesContext) => Result;
    /**
     * Visit a parse tree produced by the `showStorageVault`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowStorageVault?: (ctx: ShowStorageVaultContext) => Result;
    /**
     * Visit a parse tree produced by the `showCreateRepository`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateRepository?: (ctx: ShowCreateRepositoryContext) => Result;
    /**
     * Visit a parse tree produced by the `showOpenTables`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowOpenTables?: (ctx: ShowOpenTablesContext) => Result;
    /**
     * Visit a parse tree produced by the `showTableStatus`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTableStatus?: (ctx: ShowTableStatusContext) => Result;
    /**
     * Visit a parse tree produced by the `showTables`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTables?: (ctx: ShowTablesContext) => Result;
    /**
     * Visit a parse tree produced by the `showViews`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowViews?: (ctx: ShowViewsContext) => Result;
    /**
     * Visit a parse tree produced by the `showProcessList`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowProcessList?: (ctx: ShowProcessListContext) => Result;
    /**
     * Visit a parse tree produced by the `showStatus`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowStatus?: (ctx: ShowStatusContext) => Result;
    /**
     * Visit a parse tree produced by the `showMaterializedView`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowMaterializedView?: (ctx: ShowMaterializedViewContext) => Result;
    /**
     * Visit a parse tree produced by the `showCreateDatabase`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateDatabase?: (ctx: ShowCreateDatabaseContext) => Result;
    /**
     * Visit a parse tree produced by the `showCreateFunction`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateFunction?: (ctx: ShowCreateFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `showDatabases`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowDatabases?: (ctx: ShowDatabasesContext) => Result;
    /**
     * Visit a parse tree produced by the `showDatabaseId`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowDatabaseId?: (ctx: ShowDatabaseIdContext) => Result;
    /**
     * Visit a parse tree produced by the `showDataTypes`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowDataTypes?: (ctx: ShowDataTypesContext) => Result;
    /**
     * Visit a parse tree produced by the `showCatalogs`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCatalogs?: (ctx: ShowCatalogsContext) => Result;
    /**
     * Visit a parse tree produced by the `showCatalog`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCatalog?: (ctx: ShowCatalogContext) => Result;
    /**
     * Visit a parse tree produced by the `showColumns`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowColumns?: (ctx: ShowColumnsContext) => Result;
    /**
     * Visit a parse tree produced by the `showCollation`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCollation?: (ctx: ShowCollationContext) => Result;
    /**
     * Visit a parse tree produced by the `showCharset`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCharset?: (ctx: ShowCharsetContext) => Result;
    /**
     * Visit a parse tree produced by the `showWaringErrorCount`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowWaringErrorCount?: (ctx: ShowWaringErrorCountContext) => Result;
    /**
     * Visit a parse tree produced by the `showWaringErrors`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowWaringErrors?: (ctx: ShowWaringErrorsContext) => Result;
    /**
     * Visit a parse tree produced by the `showLoadWarings`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowLoadWarings?: (ctx: ShowLoadWaringsContext) => Result;
    /**
     * Visit a parse tree produced by the `showLoad`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowLoad?: (ctx: ShowLoadContext) => Result;
    /**
     * Visit a parse tree produced by the `showExport`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowExport?: (ctx: ShowExportContext) => Result;
    /**
     * Visit a parse tree produced by the `showAlterTable`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowAlterTable?: (ctx: ShowAlterTableContext) => Result;
    /**
     * Visit a parse tree produced by the `showDataSkew`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowDataSkew?: (ctx: ShowDataSkewContext) => Result;
    /**
     * Visit a parse tree produced by the `showData`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowData?: (ctx: ShowDataContext) => Result;
    /**
     * Visit a parse tree produced by the `showPartitions`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowPartitions?: (ctx: ShowPartitionsContext) => Result;
    /**
     * Visit a parse tree produced by the `showTabletId`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTabletId?: (ctx: ShowTabletIdContext) => Result;
    /**
     * Visit a parse tree produced by the `showTabletsFromTable`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTabletsFromTable?: (ctx: ShowTabletsFromTableContext) => Result;
    /**
     * Visit a parse tree produced by the `showUserProperties`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowUserProperties?: (ctx: ShowUserPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `showAllProperties`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowAllProperties?: (ctx: ShowAllPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `showBackup`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowBackup?: (ctx: ShowBackupContext) => Result;
    /**
     * Visit a parse tree produced by the `showRestore`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowRestore?: (ctx: ShowRestoreContext) => Result;
    /**
     * Visit a parse tree produced by the `showResources`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowResources?: (ctx: ShowResourcesContext) => Result;
    /**
     * Visit a parse tree produced by the `showWorkloadGroups`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowWorkloadGroups?: (ctx: ShowWorkloadGroupsContext) => Result;
    /**
     * Visit a parse tree produced by the `showTrash`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTrash?: (ctx: ShowTrashContext) => Result;
    /**
     * Visit a parse tree produced by the `showSnapshot`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowSnapshot?: (ctx: ShowSnapshotContext) => Result;
    /**
     * Visit a parse tree produced by the `showFunctions`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowFunctions?: (ctx: ShowFunctionsContext) => Result;
    /**
     * Visit a parse tree produced by the `showGlobalFunctions`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowGlobalFunctions?: (ctx: ShowGlobalFunctionsContext) => Result;
    /**
     * Visit a parse tree produced by the `showTypeCast`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTypeCast?: (ctx: ShowTypeCastContext) => Result;
    /**
     * Visit a parse tree produced by the `showIndex`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowIndex?: (ctx: ShowIndexContext) => Result;
    /**
     * Visit a parse tree produced by the `showTransaction`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTransaction?: (ctx: ShowTransactionContext) => Result;
    /**
     * Visit a parse tree produced by the `showQueryProfile`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowQueryProfile?: (ctx: ShowQueryProfileContext) => Result;
    /**
     * Visit a parse tree produced by the `showCacheHotSpot`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCacheHotSpot?: (ctx: ShowCacheHotSpotContext) => Result;
    /**
     * Visit a parse tree produced by the `showEncryptKeys`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowEncryptKeys?: (ctx: ShowEncryptKeysContext) => Result;
    /**
     * Visit a parse tree produced by the `showSyncJob`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowSyncJob?: (ctx: ShowSyncJobContext) => Result;
    /**
     * Visit a parse tree produced by the `showTableCreation`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTableCreation?: (ctx: ShowTableCreationContext) => Result;
    /**
     * Visit a parse tree produced by the `showCatalogRecycleBin`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCatalogRecycleBin?: (ctx: ShowCatalogRecycleBinContext) => Result;
    /**
     * Visit a parse tree produced by the `showQueryStats`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowQueryStats?: (ctx: ShowQueryStatsContext) => Result;
    /**
     * Visit a parse tree produced by the `showBuildIndex`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowBuildIndex?: (ctx: ShowBuildIndexContext) => Result;
    /**
     * Visit a parse tree produced by the `showClusters`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowClusters?: (ctx: ShowClustersContext) => Result;
    /**
     * Visit a parse tree produced by the `showConvertLsc`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowConvertLsc?: (ctx: ShowConvertLscContext) => Result;
    /**
     * Visit a parse tree produced by the `showReplicaStatus`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowReplicaStatus?: (ctx: ShowReplicaStatusContext) => Result;
    /**
     * Visit a parse tree produced by the `showTabletStorageFormat`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTabletStorageFormat?: (ctx: ShowTabletStorageFormatContext) => Result;
    /**
     * Visit a parse tree produced by the `showCopy`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCopy?: (ctx: ShowCopyContext) => Result;
    /**
     * Visit a parse tree produced by the `showWarmUpJob`
     * labeled alternative in `DorisParser.unsupportedShowStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowWarmUpJob?: (ctx: ShowWarmUpJobContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.createRoutineLoad`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateRoutineLoad?: (ctx: CreateRoutineLoadContext) => Result;
    /**
     * Visit a parse tree produced by the `mysqlLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMysqlLoad?: (ctx: MysqlLoadContext) => Result;
    /**
     * Visit a parse tree produced by the `createDataSyncJob`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateDataSyncJob?: (ctx: CreateDataSyncJobContext) => Result;
    /**
     * Visit a parse tree produced by the `stopDataSyncJob`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStopDataSyncJob?: (ctx: StopDataSyncJobContext) => Result;
    /**
     * Visit a parse tree produced by the `resumeDataSyncJob`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResumeDataSyncJob?: (ctx: ResumeDataSyncJobContext) => Result;
    /**
     * Visit a parse tree produced by the `pauseDataSyncJob`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPauseDataSyncJob?: (ctx: PauseDataSyncJobContext) => Result;
    /**
     * Visit a parse tree produced by the `pauseRoutineLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPauseRoutineLoad?: (ctx: PauseRoutineLoadContext) => Result;
    /**
     * Visit a parse tree produced by the `pauseAllRoutineLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPauseAllRoutineLoad?: (ctx: PauseAllRoutineLoadContext) => Result;
    /**
     * Visit a parse tree produced by the `resumeRoutineLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResumeRoutineLoad?: (ctx: ResumeRoutineLoadContext) => Result;
    /**
     * Visit a parse tree produced by the `resumeAllRoutineLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResumeAllRoutineLoad?: (ctx: ResumeAllRoutineLoadContext) => Result;
    /**
     * Visit a parse tree produced by the `stopRoutineLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStopRoutineLoad?: (ctx: StopRoutineLoadContext) => Result;
    /**
     * Visit a parse tree produced by the `showRoutineLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowRoutineLoad?: (ctx: ShowRoutineLoadContext) => Result;
    /**
     * Visit a parse tree produced by the `showRoutineLoadTask`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowRoutineLoadTask?: (ctx: ShowRoutineLoadTaskContext) => Result;
    /**
     * Visit a parse tree produced by the `showCreateRoutineLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateRoutineLoad?: (ctx: ShowCreateRoutineLoadContext) => Result;
    /**
     * Visit a parse tree produced by the `showCreateLoad`
     * labeled alternative in `DorisParser.unsupportedLoadStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowCreateLoad?: (ctx: ShowCreateLoadContext) => Result;
    /**
     * Visit a parse tree produced by the `separator`
     * labeled alternative in `DorisParser.loadProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSeparator?: (ctx: SeparatorContext) => Result;
    /**
     * Visit a parse tree produced by the `importColumns`
     * labeled alternative in `DorisParser.loadProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportColumns?: (ctx: ImportColumnsContext) => Result;
    /**
     * Visit a parse tree produced by the `importPrecedingFilter`
     * labeled alternative in `DorisParser.loadProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportPrecedingFilter?: (ctx: ImportPrecedingFilterContext) => Result;
    /**
     * Visit a parse tree produced by the `importWhere`
     * labeled alternative in `DorisParser.loadProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportWhere?: (ctx: ImportWhereContext) => Result;
    /**
     * Visit a parse tree produced by the `importDeleteOn`
     * labeled alternative in `DorisParser.loadProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportDeleteOn?: (ctx: ImportDeleteOnContext) => Result;
    /**
     * Visit a parse tree produced by the `importSequence`
     * labeled alternative in `DorisParser.loadProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportSequence?: (ctx: ImportSequenceContext) => Result;
    /**
     * Visit a parse tree produced by the `importPartitions`
     * labeled alternative in `DorisParser.loadProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportPartitions?: (ctx: ImportPartitionsContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.importSequenceStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportSequenceStatement?: (ctx: ImportSequenceStatementContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.importDeleteOnStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportDeleteOnStatement?: (ctx: ImportDeleteOnStatementContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.importWhereStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportWhereStatement?: (ctx: ImportWhereStatementContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.importPrecedingFilterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportPrecedingFilterStatement?: (ctx: ImportPrecedingFilterStatementContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.importColumnsStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportColumnsStatement?: (ctx: ImportColumnsStatementContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.importColumnDesc`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportColumnDesc?: (ctx: ImportColumnDescContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.channelDescriptions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitChannelDescriptions?: (ctx: ChannelDescriptionsContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.channelDescription`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitChannelDescription?: (ctx: ChannelDescriptionContext) => Result;
    /**
     * Visit a parse tree produced by the `refreshCatalog`
     * labeled alternative in `DorisParser.supportedRefreshStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshCatalog?: (ctx: RefreshCatalogContext) => Result;
    /**
     * Visit a parse tree produced by the `cleanAllProfile`
     * labeled alternative in `DorisParser.supportedCleanStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCleanAllProfile?: (ctx: CleanAllProfileContext) => Result;
    /**
     * Visit a parse tree produced by the `refreshTable`
     * labeled alternative in `DorisParser.unsupportedRefreshStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshTable?: (ctx: RefreshTableContext) => Result;
    /**
     * Visit a parse tree produced by the `refreshDatabase`
     * labeled alternative in `DorisParser.unsupportedRefreshStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshDatabase?: (ctx: RefreshDatabaseContext) => Result;
    /**
     * Visit a parse tree produced by the `refreshLdap`
     * labeled alternative in `DorisParser.unsupportedRefreshStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshLdap?: (ctx: RefreshLdapContext) => Result;
    /**
     * Visit a parse tree produced by the `cleanLabel`
     * labeled alternative in `DorisParser.unsupportedCleanStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCleanLabel?: (ctx: CleanLabelContext) => Result;
    /**
     * Visit a parse tree produced by the `cleanQueryStats`
     * labeled alternative in `DorisParser.unsupportedCleanStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCleanQueryStats?: (ctx: CleanQueryStatsContext) => Result;
    /**
     * Visit a parse tree produced by the `cleanAllQueryStats`
     * labeled alternative in `DorisParser.unsupportedCleanStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCleanAllQueryStats?: (ctx: CleanAllQueryStatsContext) => Result;
    /**
     * Visit a parse tree produced by the `cancelLoad`
     * labeled alternative in `DorisParser.supportedCancelStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCancelLoad?: (ctx: CancelLoadContext) => Result;
    /**
     * Visit a parse tree produced by the `cancelExport`
     * labeled alternative in `DorisParser.supportedCancelStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCancelExport?: (ctx: CancelExportContext) => Result;
    /**
     * Visit a parse tree produced by the `cancelWarmUpJob`
     * labeled alternative in `DorisParser.supportedCancelStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCancelWarmUpJob?: (ctx: CancelWarmUpJobContext) => Result;
    /**
     * Visit a parse tree produced by the `cancelAlterTable`
     * labeled alternative in `DorisParser.unsupportedCancelStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCancelAlterTable?: (ctx: CancelAlterTableContext) => Result;
    /**
     * Visit a parse tree produced by the `cancelBuildIndex`
     * labeled alternative in `DorisParser.unsupportedCancelStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCancelBuildIndex?: (ctx: CancelBuildIndexContext) => Result;
    /**
     * Visit a parse tree produced by the `cancelDecommisionBackend`
     * labeled alternative in `DorisParser.unsupportedCancelStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCancelDecommisionBackend?: (ctx: CancelDecommisionBackendContext) => Result;
    /**
     * Visit a parse tree produced by the `cancelBackup`
     * labeled alternative in `DorisParser.unsupportedCancelStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCancelBackup?: (ctx: CancelBackupContext) => Result;
    /**
     * Visit a parse tree produced by the `cancelRestore`
     * labeled alternative in `DorisParser.unsupportedCancelStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCancelRestore?: (ctx: CancelRestoreContext) => Result;
    /**
     * Visit a parse tree produced by the `adminShowReplicaDistribution`
     * labeled alternative in `DorisParser.supportedAdminStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdminShowReplicaDistribution?: (ctx: AdminShowReplicaDistributionContext) => Result;
    /**
     * Visit a parse tree produced by the `recoverDatabase`
     * labeled alternative in `DorisParser.supportedRecoverStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRecoverDatabase?: (ctx: RecoverDatabaseContext) => Result;
    /**
     * Visit a parse tree produced by the `recoverTable`
     * labeled alternative in `DorisParser.supportedRecoverStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRecoverTable?: (ctx: RecoverTableContext) => Result;
    /**
     * Visit a parse tree produced by the `recoverPartition`
     * labeled alternative in `DorisParser.supportedRecoverStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRecoverPartition?: (ctx: RecoverPartitionContext) => Result;
    /**
     * Visit a parse tree produced by the `adminShowReplicaStatus`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdminShowReplicaStatus?: (ctx: AdminShowReplicaStatusContext) => Result;
    /**
     * Visit a parse tree produced by the `adminSetReplicaStatus`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdminSetReplicaStatus?: (ctx: AdminSetReplicaStatusContext) => Result;
    /**
     * Visit a parse tree produced by the `adminSetReplicaVersion`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdminSetReplicaVersion?: (ctx: AdminSetReplicaVersionContext) => Result;
    /**
     * Visit a parse tree produced by the `adminRepairTable`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdminRepairTable?: (ctx: AdminRepairTableContext) => Result;
    /**
     * Visit a parse tree produced by the `adminCancelRepairTable`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdminCancelRepairTable?: (ctx: AdminCancelRepairTableContext) => Result;
    /**
     * Visit a parse tree produced by the `adminCompactTable`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdminCompactTable?: (ctx: AdminCompactTableContext) => Result;
    /**
     * Visit a parse tree produced by the `adminSetFrontendConfig`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdminSetFrontendConfig?: (ctx: AdminSetFrontendConfigContext) => Result;
    /**
     * Visit a parse tree produced by the `adminCheckTablets`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdminCheckTablets?: (ctx: AdminCheckTabletsContext) => Result;
    /**
     * Visit a parse tree produced by the `adminRebalanceDisk`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdminRebalanceDisk?: (ctx: AdminRebalanceDiskContext) => Result;
    /**
     * Visit a parse tree produced by the `adminCancelRebalanceDisk`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdminCancelRebalanceDisk?: (ctx: AdminCancelRebalanceDiskContext) => Result;
    /**
     * Visit a parse tree produced by the `adminCleanTrash`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdminCleanTrash?: (ctx: AdminCleanTrashContext) => Result;
    /**
     * Visit a parse tree produced by the `adminSetPartitionVersion`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdminSetPartitionVersion?: (ctx: AdminSetPartitionVersionContext) => Result;
    /**
     * Visit a parse tree produced by the `adminDiagnoseTablet`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdminDiagnoseTablet?: (ctx: AdminDiagnoseTabletContext) => Result;
    /**
     * Visit a parse tree produced by the `adminShowTabletStorageFormat`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdminShowTabletStorageFormat?: (ctx: AdminShowTabletStorageFormatContext) => Result;
    /**
     * Visit a parse tree produced by the `adminCopyTablet`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdminCopyTablet?: (ctx: AdminCopyTabletContext) => Result;
    /**
     * Visit a parse tree produced by the `adminSetTableStatus`
     * labeled alternative in `DorisParser.unsupportedAdminStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdminSetTableStatus?: (ctx: AdminSetTableStatusContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.baseTableRef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBaseTableRef?: (ctx: BaseTableRefContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.wildWhere`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWildWhere?: (ctx: WildWhereContext) => Result;
    /**
     * Visit a parse tree produced by the `transactionBegin`
     * labeled alternative in `DorisParser.unsupportedTransactionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransactionBegin?: (ctx: TransactionBeginContext) => Result;
    /**
     * Visit a parse tree produced by the `transcationCommit`
     * labeled alternative in `DorisParser.unsupportedTransactionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTranscationCommit?: (ctx: TranscationCommitContext) => Result;
    /**
     * Visit a parse tree produced by the `transactionRollback`
     * labeled alternative in `DorisParser.unsupportedTransactionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransactionRollback?: (ctx: TransactionRollbackContext) => Result;
    /**
     * Visit a parse tree produced by the `grantTablePrivilege`
     * labeled alternative in `DorisParser.unsupportedGrantRevokeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantTablePrivilege?: (ctx: GrantTablePrivilegeContext) => Result;
    /**
     * Visit a parse tree produced by the `grantResourcePrivilege`
     * labeled alternative in `DorisParser.unsupportedGrantRevokeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantResourcePrivilege?: (ctx: GrantResourcePrivilegeContext) => Result;
    /**
     * Visit a parse tree produced by the `grantRole`
     * labeled alternative in `DorisParser.unsupportedGrantRevokeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantRole?: (ctx: GrantRoleContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.privilege`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivilege?: (ctx: PrivilegeContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.privilegeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivilegeList?: (ctx: PrivilegeListContext) => Result;
    /**
     * Visit a parse tree produced by the `alterTable`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTable?: (ctx: AlterTableContext) => Result;
    /**
     * Visit a parse tree produced by the `alterTableAddRollup`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTableAddRollup?: (ctx: AlterTableAddRollupContext) => Result;
    /**
     * Visit a parse tree produced by the `alterTableDropRollup`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTableDropRollup?: (ctx: AlterTableDropRollupContext) => Result;
    /**
     * Visit a parse tree produced by the `alterSystem`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterSystem?: (ctx: AlterSystemContext) => Result;
    /**
     * Visit a parse tree produced by the `alterDatabaseSetQuota`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterDatabaseSetQuota?: (ctx: AlterDatabaseSetQuotaContext) => Result;
    /**
     * Visit a parse tree produced by the `alterDatabaseRename`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterDatabaseRename?: (ctx: AlterDatabaseRenameContext) => Result;
    /**
     * Visit a parse tree produced by the `alterDatabaseProperties`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterDatabaseProperties?: (ctx: AlterDatabasePropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `alterCatalogRename`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterCatalogRename?: (ctx: AlterCatalogRenameContext) => Result;
    /**
     * Visit a parse tree produced by the `alterCatalogProperties`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterCatalogProperties?: (ctx: AlterCatalogPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `alterCatalogComment`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterCatalogComment?: (ctx: AlterCatalogCommentContext) => Result;
    /**
     * Visit a parse tree produced by the `alterResource`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterResource?: (ctx: AlterResourceContext) => Result;
    /**
     * Visit a parse tree produced by the `alterColocateGroup`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterColocateGroup?: (ctx: AlterColocateGroupContext) => Result;
    /**
     * Visit a parse tree produced by the `alterRoutineLoad`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterRoutineLoad?: (ctx: AlterRoutineLoadContext) => Result;
    /**
     * Visit a parse tree produced by the `alterSqlBlockRule`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterSqlBlockRule?: (ctx: AlterSqlBlockRuleContext) => Result;
    /**
     * Visit a parse tree produced by the `alterTableProperties`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTableProperties?: (ctx: AlterTablePropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `alterStoragePlicy`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterStoragePlicy?: (ctx: AlterStoragePlicyContext) => Result;
    /**
     * Visit a parse tree produced by the `alterUser`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterUser?: (ctx: AlterUserContext) => Result;
    /**
     * Visit a parse tree produced by the `alterRepository`
     * labeled alternative in `DorisParser.unsupportedAlterStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterRepository?: (ctx: AlterRepositoryContext) => Result;
    /**
     * Visit a parse tree produced by the `addBackendClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddBackendClause?: (ctx: AddBackendClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `dropBackendClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropBackendClause?: (ctx: DropBackendClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `decommissionBackendClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecommissionBackendClause?: (ctx: DecommissionBackendClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `addObserverClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddObserverClause?: (ctx: AddObserverClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `dropObserverClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropObserverClause?: (ctx: DropObserverClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `addFollowerClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddFollowerClause?: (ctx: AddFollowerClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `dropFollowerClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropFollowerClause?: (ctx: DropFollowerClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `addBrokerClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddBrokerClause?: (ctx: AddBrokerClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `dropBrokerClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropBrokerClause?: (ctx: DropBrokerClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `dropAllBrokerClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropAllBrokerClause?: (ctx: DropAllBrokerClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `alterLoadErrorUrlClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterLoadErrorUrlClause?: (ctx: AlterLoadErrorUrlClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `modifyBackendClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModifyBackendClause?: (ctx: ModifyBackendClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `modifyFrontendOrBackendHostNameClause`
     * labeled alternative in `DorisParser.alterSystemClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModifyFrontendOrBackendHostNameClause?: (ctx: ModifyFrontendOrBackendHostNameClauseContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.dropRollupClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropRollupClause?: (ctx: DropRollupClauseContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.addRollupClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddRollupClause?: (ctx: AddRollupClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `addColumnClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddColumnClause?: (ctx: AddColumnClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `addColumnsClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddColumnsClause?: (ctx: AddColumnsClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `dropColumnClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropColumnClause?: (ctx: DropColumnClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `modifyColumnClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModifyColumnClause?: (ctx: ModifyColumnClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `reorderColumnsClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReorderColumnsClause?: (ctx: ReorderColumnsClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `addPartitionClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddPartitionClause?: (ctx: AddPartitionClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `dropPartitionClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropPartitionClause?: (ctx: DropPartitionClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `modifyPartitionClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModifyPartitionClause?: (ctx: ModifyPartitionClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `replacePartitionClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplacePartitionClause?: (ctx: ReplacePartitionClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `replaceTableClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplaceTableClause?: (ctx: ReplaceTableClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `renameClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameClause?: (ctx: RenameClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `renameRollupClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameRollupClause?: (ctx: RenameRollupClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `renamePartitionClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenamePartitionClause?: (ctx: RenamePartitionClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `renameColumnClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameColumnClause?: (ctx: RenameColumnClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `addIndexClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddIndexClause?: (ctx: AddIndexClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `dropIndexClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropIndexClause?: (ctx: DropIndexClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `enableFeatureClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnableFeatureClause?: (ctx: EnableFeatureClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `modifyDistributionClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModifyDistributionClause?: (ctx: ModifyDistributionClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `modifyTableCommentClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModifyTableCommentClause?: (ctx: ModifyTableCommentClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `modifyColumnCommentClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModifyColumnCommentClause?: (ctx: ModifyColumnCommentClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `modifyEngineClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModifyEngineClause?: (ctx: ModifyEngineClauseContext) => Result;
    /**
     * Visit a parse tree produced by the `alterMultiPartitionClause`
     * labeled alternative in `DorisParser.alterTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterMultiPartitionClause?: (ctx: AlterMultiPartitionClauseContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.columnPosition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnPosition?: (ctx: ColumnPositionContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.toRollup`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitToRollup?: (ctx: ToRollupContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.fromRollup`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromRollup?: (ctx: FromRollupContext) => Result;
    /**
     * Visit a parse tree produced by the `dropDatabase`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropDatabase?: (ctx: DropDatabaseContext) => Result;
    /**
     * Visit a parse tree produced by the `dropCatalog`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropCatalog?: (ctx: DropCatalogContext) => Result;
    /**
     * Visit a parse tree produced by the `dropFunction`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropFunction?: (ctx: DropFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `dropTable`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTable?: (ctx: DropTableContext) => Result;
    /**
     * Visit a parse tree produced by the `dropView`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropView?: (ctx: DropViewContext) => Result;
    /**
     * Visit a parse tree produced by the `dropRepository`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropRepository?: (ctx: DropRepositoryContext) => Result;
    /**
     * Visit a parse tree produced by the `dropIndex`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropIndex?: (ctx: DropIndexContext) => Result;
    /**
     * Visit a parse tree produced by the `dropResource`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropResource?: (ctx: DropResourceContext) => Result;
    /**
     * Visit a parse tree produced by the `dropRowPolicy`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropRowPolicy?: (ctx: DropRowPolicyContext) => Result;
    /**
     * Visit a parse tree produced by the `dropStoragePolicy`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropStoragePolicy?: (ctx: DropStoragePolicyContext) => Result;
    /**
     * Visit a parse tree produced by the `dropStage`
     * labeled alternative in `DorisParser.unsupportedDropStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropStage?: (ctx: DropStageContext) => Result;
    /**
     * Visit a parse tree produced by the `analyzeTable`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyzeTable?: (ctx: AnalyzeTableContext) => Result;
    /**
     * Visit a parse tree produced by the `analyzeDatabase`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyzeDatabase?: (ctx: AnalyzeDatabaseContext) => Result;
    /**
     * Visit a parse tree produced by the `alterTableStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTableStats?: (ctx: AlterTableStatsContext) => Result;
    /**
     * Visit a parse tree produced by the `alterColumnStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterColumnStats?: (ctx: AlterColumnStatsContext) => Result;
    /**
     * Visit a parse tree produced by the `dropStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropStats?: (ctx: DropStatsContext) => Result;
    /**
     * Visit a parse tree produced by the `dropCachedStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropCachedStats?: (ctx: DropCachedStatsContext) => Result;
    /**
     * Visit a parse tree produced by the `dropExpiredStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropExpiredStats?: (ctx: DropExpiredStatsContext) => Result;
    /**
     * Visit a parse tree produced by the `dropAanalyzeJob`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropAanalyzeJob?: (ctx: DropAanalyzeJobContext) => Result;
    /**
     * Visit a parse tree produced by the `killAnalyzeJob`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKillAnalyzeJob?: (ctx: KillAnalyzeJobContext) => Result;
    /**
     * Visit a parse tree produced by the `showTableStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTableStats?: (ctx: ShowTableStatsContext) => Result;
    /**
     * Visit a parse tree produced by the `showIndexStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowIndexStats?: (ctx: ShowIndexStatsContext) => Result;
    /**
     * Visit a parse tree produced by the `showColumnStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowColumnStats?: (ctx: ShowColumnStatsContext) => Result;
    /**
     * Visit a parse tree produced by the `showColumnHistogramStats`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowColumnHistogramStats?: (ctx: ShowColumnHistogramStatsContext) => Result;
    /**
     * Visit a parse tree produced by the `showAnalyze`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowAnalyze?: (ctx: ShowAnalyzeContext) => Result;
    /**
     * Visit a parse tree produced by the `showAnalyzeFromJobId`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowAnalyzeFromJobId?: (ctx: ShowAnalyzeFromJobIdContext) => Result;
    /**
     * Visit a parse tree produced by the `showAutoAnalyzeJobs`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowAutoAnalyzeJobs?: (ctx: ShowAutoAnalyzeJobsContext) => Result;
    /**
     * Visit a parse tree produced by the `showAnalyzeTask`
     * labeled alternative in `DorisParser.unsupportedStatsStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowAnalyzeTask?: (ctx: ShowAnalyzeTaskContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.analyzeProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyzeProperties?: (ctx: AnalyzePropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `createDatabase`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateDatabase?: (ctx: CreateDatabaseContext) => Result;
    /**
     * Visit a parse tree produced by the `createCatalog`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateCatalog?: (ctx: CreateCatalogContext) => Result;
    /**
     * Visit a parse tree produced by the `createUserDefineFunction`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateUserDefineFunction?: (ctx: CreateUserDefineFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `createAliasFunction`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateAliasFunction?: (ctx: CreateAliasFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `createUser`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateUser?: (ctx: CreateUserContext) => Result;
    /**
     * Visit a parse tree produced by the `createRepository`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateRepository?: (ctx: CreateRepositoryContext) => Result;
    /**
     * Visit a parse tree produced by the `createRole`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateRole?: (ctx: CreateRoleContext) => Result;
    /**
     * Visit a parse tree produced by the `createFile`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateFile?: (ctx: CreateFileContext) => Result;
    /**
     * Visit a parse tree produced by the `createIndex`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateIndex?: (ctx: CreateIndexContext) => Result;
    /**
     * Visit a parse tree produced by the `createResource`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateResource?: (ctx: CreateResourceContext) => Result;
    /**
     * Visit a parse tree produced by the `createStorageVault`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateStorageVault?: (ctx: CreateStorageVaultContext) => Result;
    /**
     * Visit a parse tree produced by the `createWorkloadGroup`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateWorkloadGroup?: (ctx: CreateWorkloadGroupContext) => Result;
    /**
     * Visit a parse tree produced by the `createWorkloadPolicy`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateWorkloadPolicy?: (ctx: CreateWorkloadPolicyContext) => Result;
    /**
     * Visit a parse tree produced by the `createEncryptkey`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateEncryptkey?: (ctx: CreateEncryptkeyContext) => Result;
    /**
     * Visit a parse tree produced by the `createSqlBlockRule`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateSqlBlockRule?: (ctx: CreateSqlBlockRuleContext) => Result;
    /**
     * Visit a parse tree produced by the `createStoragePolicy`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateStoragePolicy?: (ctx: CreateStoragePolicyContext) => Result;
    /**
     * Visit a parse tree produced by the `buildIndex`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBuildIndex?: (ctx: BuildIndexContext) => Result;
    /**
     * Visit a parse tree produced by the `createStage`
     * labeled alternative in `DorisParser.unsupportedCreateStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateStage?: (ctx: CreateStageContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.workloadPolicyActions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWorkloadPolicyActions?: (ctx: WorkloadPolicyActionsContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.workloadPolicyAction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWorkloadPolicyAction?: (ctx: WorkloadPolicyActionContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.workloadPolicyConditions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWorkloadPolicyConditions?: (ctx: WorkloadPolicyConditionsContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.workloadPolicyCondition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWorkloadPolicyCondition?: (ctx: WorkloadPolicyConditionContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.storageBackend`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStorageBackend?: (ctx: StorageBackendContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.passwordOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPasswordOption?: (ctx: PasswordOptionContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.functionArguments`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionArguments?: (ctx: FunctionArgumentsContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.functionArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionArgument?: (ctx: FunctionArgumentContext) => Result;
    /**
     * Visit a parse tree produced by the `setOptions`
     * labeled alternative in `DorisParser.supportedSetStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetOptions?: (ctx: SetOptionsContext) => Result;
    /**
     * Visit a parse tree produced by the `setDefaultStorageVault`
     * labeled alternative in `DorisParser.supportedSetStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetDefaultStorageVault?: (ctx: SetDefaultStorageVaultContext) => Result;
    /**
     * Visit a parse tree produced by the `setUserProperties`
     * labeled alternative in `DorisParser.supportedSetStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetUserProperties?: (ctx: SetUserPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by the `setTransaction`
     * labeled alternative in `DorisParser.supportedSetStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTransaction?: (ctx: SetTransactionContext) => Result;
    /**
     * Visit a parse tree produced by the `setVariableWithType`
     * labeled alternative in `DorisParser.optionWithType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetVariableWithType?: (ctx: SetVariableWithTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `setNames`
     * labeled alternative in `DorisParser.optionWithoutType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetNames?: (ctx: SetNamesContext) => Result;
    /**
     * Visit a parse tree produced by the `setCharset`
     * labeled alternative in `DorisParser.optionWithoutType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetCharset?: (ctx: SetCharsetContext) => Result;
    /**
     * Visit a parse tree produced by the `setCollate`
     * labeled alternative in `DorisParser.optionWithoutType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetCollate?: (ctx: SetCollateContext) => Result;
    /**
     * Visit a parse tree produced by the `setPassword`
     * labeled alternative in `DorisParser.optionWithoutType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetPassword?: (ctx: SetPasswordContext) => Result;
    /**
     * Visit a parse tree produced by the `setLdapAdminPassword`
     * labeled alternative in `DorisParser.optionWithoutType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetLdapAdminPassword?: (ctx: SetLdapAdminPasswordContext) => Result;
    /**
     * Visit a parse tree produced by the `setVariableWithoutType`
     * labeled alternative in `DorisParser.optionWithoutType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetVariableWithoutType?: (ctx: SetVariableWithoutTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `setSystemVariable`
     * labeled alternative in `DorisParser.variable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetSystemVariable?: (ctx: SetSystemVariableContext) => Result;
    /**
     * Visit a parse tree produced by the `setUserVariable`
     * labeled alternative in `DorisParser.variable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetUserVariable?: (ctx: SetUserVariableContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.transactionAccessMode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransactionAccessMode?: (ctx: TransactionAccessModeContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.isolationLevel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIsolationLevel?: (ctx: IsolationLevelContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.supportedUnsetStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSupportedUnsetStatement?: (ctx: SupportedUnsetStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `useDatabase`
     * labeled alternative in `DorisParser.unsupportedUseStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUseDatabase?: (ctx: UseDatabaseContext) => Result;
    /**
     * Visit a parse tree produced by the `useCloudCluster`
     * labeled alternative in `DorisParser.unsupportedUseStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUseCloudCluster?: (ctx: UseCloudClusterContext) => Result;
    /**
     * Visit a parse tree produced by the `switchCatalog`
     * labeled alternative in `DorisParser.unsupportedUseStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSwitchCatalog?: (ctx: SwitchCatalogContext) => Result;
    /**
     * Visit a parse tree produced by the `truncateTable`
     * labeled alternative in `DorisParser.unsupportedDmlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTruncateTable?: (ctx: TruncateTableContext) => Result;
    /**
     * Visit a parse tree produced by the `copyInto`
     * labeled alternative in `DorisParser.unsupportedDmlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopyInto?: (ctx: CopyIntoContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.stageAndPattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStageAndPattern?: (ctx: StageAndPatternContext) => Result;
    /**
     * Visit a parse tree produced by the `killConnection`
     * labeled alternative in `DorisParser.unsupportedKillStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKillConnection?: (ctx: KillConnectionContext) => Result;
    /**
     * Visit a parse tree produced by the `killQuery`
     * labeled alternative in `DorisParser.unsupportedKillStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKillQuery?: (ctx: KillQueryContext) => Result;
    /**
     * Visit a parse tree produced by the `describeTableValuedFunction`
     * labeled alternative in `DorisParser.unsupportedDescribeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeTableValuedFunction?: (ctx: DescribeTableValuedFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `describeTableAll`
     * labeled alternative in `DorisParser.unsupportedDescribeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeTableAll?: (ctx: DescribeTableAllContext) => Result;
    /**
     * Visit a parse tree produced by the `describeTable`
     * labeled alternative in `DorisParser.unsupportedDescribeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeTable?: (ctx: DescribeTableContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.constraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraint?: (ctx: ConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.partitionSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionSpec?: (ctx: PartitionSpecContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.partitionTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionTable?: (ctx: PartitionTableContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.identityOrFunctionList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentityOrFunctionList?: (ctx: IdentityOrFunctionListContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.identityOrFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentityOrFunction?: (ctx: IdentityOrFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.dataDesc`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDataDesc?: (ctx: DataDescContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.buildMode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBuildMode?: (ctx: BuildModeContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.refreshTrigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshTrigger?: (ctx: RefreshTriggerContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.refreshSchedule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshSchedule?: (ctx: RefreshScheduleContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.refreshMethod`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshMethod?: (ctx: RefreshMethodContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.mvPartition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMvPartition?: (ctx: MvPartitionContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.identifierOrText`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierOrText?: (ctx: IdentifierOrTextContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.identifierOrTextOrAsterisk`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierOrTextOrAsterisk?: (ctx: IdentifierOrTextOrAsteriskContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.multipartIdentifierOrAsterisk`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipartIdentifierOrAsterisk?: (ctx: MultipartIdentifierOrAsteriskContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.identifierOrAsterisk`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierOrAsterisk?: (ctx: IdentifierOrAsteriskContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.userIdentify`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUserIdentify?: (ctx: UserIdentifyContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.grantUserIdentify`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantUserIdentify?: (ctx: GrantUserIdentifyContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.explain`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplain?: (ctx: ExplainContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.explainCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplainCommand?: (ctx: ExplainCommandContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.planType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPlanType?: (ctx: PlanTypeContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.replayCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplayCommand?: (ctx: ReplayCommandContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.replayType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplayType?: (ctx: ReplayTypeContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.mergeType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMergeType?: (ctx: MergeTypeContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.preFilterClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreFilterClause?: (ctx: PreFilterClauseContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.deleteOnClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeleteOnClause?: (ctx: DeleteOnClauseContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.sequenceColClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSequenceColClause?: (ctx: SequenceColClauseContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.colFromPath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColFromPath?: (ctx: ColFromPathContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.colMappingList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColMappingList?: (ctx: ColMappingListContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.mappingExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMappingExpr?: (ctx: MappingExprContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.withRemoteStorageSystem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWithRemoteStorageSystem?: (ctx: WithRemoteStorageSystemContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.resourceDesc`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResourceDesc?: (ctx: ResourceDescContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.mysqlDataDesc`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMysqlDataDesc?: (ctx: MysqlDataDescContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.skipLines`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSkipLines?: (ctx: SkipLinesContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.outFileClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOutFileClause?: (ctx: OutFileClauseContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.query`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuery?: (ctx: QueryContext) => Result;
    /**
     * Visit a parse tree produced by the `queryTermDefault`
     * labeled alternative in `DorisParser.queryTerm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryTermDefault?: (ctx: QueryTermDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `setOperation`
     * labeled alternative in `DorisParser.queryTerm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetOperation?: (ctx: SetOperationContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.setQuantifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetQuantifier?: (ctx: SetQuantifierContext) => Result;
    /**
     * Visit a parse tree produced by the `queryPrimaryDefault`
     * labeled alternative in `DorisParser.queryPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `subquery`
     * labeled alternative in `DorisParser.queryPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubquery?: (ctx: SubqueryContext) => Result;
    /**
     * Visit a parse tree produced by the `valuesTable`
     * labeled alternative in `DorisParser.queryPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValuesTable?: (ctx: ValuesTableContext) => Result;
    /**
     * Visit a parse tree produced by the `regularQuerySpecification`
     * labeled alternative in `DorisParser.querySpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRegularQuerySpecification?: (ctx: RegularQuerySpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.cte`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCte?: (ctx: CteContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.aliasQuery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAliasQuery?: (ctx: AliasQueryContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.columnAliases`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnAliases?: (ctx: ColumnAliasesContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.selectClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectClause?: (ctx: SelectClauseContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.selectColumnClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectColumnClause?: (ctx: SelectColumnClauseContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.whereClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhereClause?: (ctx: WhereClauseContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.fromClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromClause?: (ctx: FromClauseContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.intoClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntoClause?: (ctx: IntoClauseContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.bulkCollectClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBulkCollectClause?: (ctx: BulkCollectClauseContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.tableRow`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableRow?: (ctx: TableRowContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.relations`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelations?: (ctx: RelationsContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.relation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelation?: (ctx: RelationContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.joinRelation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinRelation?: (ctx: JoinRelationContext) => Result;
    /**
     * Visit a parse tree produced by the `bracketDistributeType`
     * labeled alternative in `DorisParser.distributeType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBracketDistributeType?: (ctx: BracketDistributeTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `commentDistributeType`
     * labeled alternative in `DorisParser.distributeType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommentDistributeType?: (ctx: CommentDistributeTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `bracketRelationHint`
     * labeled alternative in `DorisParser.relationHint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBracketRelationHint?: (ctx: BracketRelationHintContext) => Result;
    /**
     * Visit a parse tree produced by the `commentRelationHint`
     * labeled alternative in `DorisParser.relationHint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommentRelationHint?: (ctx: CommentRelationHintContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.aggClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggClause?: (ctx: AggClauseContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.groupingElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingElement?: (ctx: GroupingElementContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.groupingSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingSet?: (ctx: GroupingSetContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.havingClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHavingClause?: (ctx: HavingClauseContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.qualifyClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifyClause?: (ctx: QualifyClauseContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.selectHint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectHint?: (ctx: SelectHintContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.hintStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHintStatement?: (ctx: HintStatementContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.hintAssignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHintAssignment?: (ctx: HintAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.updateAssignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdateAssignment?: (ctx: UpdateAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.updateAssignmentSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdateAssignmentSeq?: (ctx: UpdateAssignmentSeqContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.lateralView`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLateralView?: (ctx: LateralViewContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.queryOrganization`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryOrganization?: (ctx: QueryOrganizationContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.sortClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSortClause?: (ctx: SortClauseContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.sortItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSortItem?: (ctx: SortItemContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.limitClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLimitClause?: (ctx: LimitClauseContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.partitionClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionClause?: (ctx: PartitionClauseContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.joinType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinType?: (ctx: JoinTypeContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.joinCriteria`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinCriteria?: (ctx: JoinCriteriaContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.identifierList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierList?: (ctx: IdentifierListContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.identifierSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierSeq?: (ctx: IdentifierSeqContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.optScanParams`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptScanParams?: (ctx: OptScanParamsContext) => Result;
    /**
     * Visit a parse tree produced by the `tableName`
     * labeled alternative in `DorisParser.relationPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableName?: (ctx: TableNameContext) => Result;
    /**
     * Visit a parse tree produced by the `aliasedQuery`
     * labeled alternative in `DorisParser.relationPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAliasedQuery?: (ctx: AliasedQueryContext) => Result;
    /**
     * Visit a parse tree produced by the `tableValuedFunction`
     * labeled alternative in `DorisParser.relationPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableValuedFunction?: (ctx: TableValuedFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `relationList`
     * labeled alternative in `DorisParser.relationPrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelationList?: (ctx: RelationListContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.materializedViewName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMaterializedViewName?: (ctx: MaterializedViewNameContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.propertyClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyClause?: (ctx: PropertyClauseContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.propertyItemList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyItemList?: (ctx: PropertyItemListContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.propertyItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyItem?: (ctx: PropertyItemContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.propertyKey`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyKey?: (ctx: PropertyKeyContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.propertyValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyValue?: (ctx: PropertyValueContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.tableAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableAlias?: (ctx: TableAliasContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.multipartIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultipartIdentifier?: (ctx: MultipartIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.simpleColumnDefs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleColumnDefs?: (ctx: SimpleColumnDefsContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.simpleColumnDef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleColumnDef?: (ctx: SimpleColumnDefContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.columnDefs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnDefs?: (ctx: ColumnDefsContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.columnDef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnDef?: (ctx: ColumnDefContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.indexDefs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexDefs?: (ctx: IndexDefsContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.indexDef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexDef?: (ctx: IndexDefContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.partitionsDef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionsDef?: (ctx: PartitionsDefContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.partitionDef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionDef?: (ctx: PartitionDefContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.lessThanPartitionDef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLessThanPartitionDef?: (ctx: LessThanPartitionDefContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.fixedPartitionDef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFixedPartitionDef?: (ctx: FixedPartitionDefContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.stepPartitionDef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStepPartitionDef?: (ctx: StepPartitionDefContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.inPartitionDef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInPartitionDef?: (ctx: InPartitionDefContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.partitionValueList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionValueList?: (ctx: PartitionValueListContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.partitionValueDef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionValueDef?: (ctx: PartitionValueDefContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.rollupDefs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRollupDefs?: (ctx: RollupDefsContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.rollupDef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRollupDef?: (ctx: RollupDefContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.aggTypeDef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggTypeDef?: (ctx: AggTypeDefContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.tabletList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTabletList?: (ctx: TabletListContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.inlineTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInlineTable?: (ctx: InlineTableContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.namedExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedExpression?: (ctx: NamedExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.namedExpressionSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedExpressionSeq?: (ctx: NamedExpressionSeqContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.lambdaExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLambdaExpression?: (ctx: LambdaExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `exist`
     * labeled alternative in `DorisParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExist?: (ctx: ExistContext) => Result;
    /**
     * Visit a parse tree produced by the `logicalNot`
     * labeled alternative in `DorisParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalNot?: (ctx: LogicalNotContext) => Result;
    /**
     * Visit a parse tree produced by the `predicated`
     * labeled alternative in `DorisParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicated?: (ctx: PredicatedContext) => Result;
    /**
     * Visit a parse tree produced by the `isnull`
     * labeled alternative in `DorisParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIsnull?: (ctx: IsnullContext) => Result;
    /**
     * Visit a parse tree produced by the `is_not_null_pred`
     * labeled alternative in `DorisParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIs_not_null_pred?: (ctx: Is_not_null_predContext) => Result;
    /**
     * Visit a parse tree produced by the `logicalBinary`
     * labeled alternative in `DorisParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalBinary?: (ctx: LogicalBinaryContext) => Result;
    /**
     * Visit a parse tree produced by the `doublePipes`
     * labeled alternative in `DorisParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDoublePipes?: (ctx: DoublePipesContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.rowConstructor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowConstructor?: (ctx: RowConstructorContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.rowConstructorItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowConstructorItem?: (ctx: RowConstructorItemContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicate?: (ctx: PredicateContext) => Result;
    /**
     * Visit a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `DorisParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `comparison`
     * labeled alternative in `DorisParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparison?: (ctx: ComparisonContext) => Result;
    /**
     * Visit a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `DorisParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => Result;
    /**
     * Visit a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `DorisParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.datetimeUnit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatetimeUnit?: (ctx: DatetimeUnitContext) => Result;
    /**
     * Visit a parse tree produced by the `dateCeil`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDateCeil?: (ctx: DateCeilContext) => Result;
    /**
     * Visit a parse tree produced by the `dereference`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDereference?: (ctx: DereferenceContext) => Result;
    /**
     * Visit a parse tree produced by the `currentDate`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentDate?: (ctx: CurrentDateContext) => Result;
    /**
     * Visit a parse tree produced by the `timestampadd`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimestampadd?: (ctx: TimestampaddContext) => Result;
    /**
     * Visit a parse tree produced by the `date_sub`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDate_sub?: (ctx: Date_subContext) => Result;
    /**
     * Visit a parse tree produced by the `cast`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCast?: (ctx: CastContext) => Result;
    /**
     * Visit a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `userVariable`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUserVariable?: (ctx: UserVariableContext) => Result;
    /**
     * Visit a parse tree produced by the `elementAt`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementAt?: (ctx: ElementAtContext) => Result;
    /**
     * Visit a parse tree produced by the `localTimestamp`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocalTimestamp?: (ctx: LocalTimestampContext) => Result;
    /**
     * Visit a parse tree produced by the `charFunction`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCharFunction?: (ctx: CharFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `intervalLiteral`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntervalLiteral?: (ctx: IntervalLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `arrayRange`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayRange?: (ctx: ArrayRangeContext) => Result;
    /**
     * Visit a parse tree produced by the `simpleCase`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleCase?: (ctx: SimpleCaseContext) => Result;
    /**
     * Visit a parse tree produced by the `columnReference`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnReference?: (ctx: ColumnReferenceContext) => Result;
    /**
     * Visit a parse tree produced by the `star`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStar?: (ctx: StarContext) => Result;
    /**
     * Visit a parse tree produced by the `sessionUser`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSessionUser?: (ctx: SessionUserContext) => Result;
    /**
     * Visit a parse tree produced by the `convertType`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConvertType?: (ctx: ConvertTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `timestampdiff`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimestampdiff?: (ctx: TimestampdiffContext) => Result;
    /**
     * Visit a parse tree produced by the `convertCharSet`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConvertCharSet?: (ctx: ConvertCharSetContext) => Result;
    /**
     * Visit a parse tree produced by the `subqueryExpression`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubqueryExpression?: (ctx: SubqueryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `encryptKey`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEncryptKey?: (ctx: EncryptKeyContext) => Result;
    /**
     * Visit a parse tree produced by the `date_add`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDate_add?: (ctx: Date_addContext) => Result;
    /**
     * Visit a parse tree produced by the `currentTime`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentTime?: (ctx: CurrentTimeContext) => Result;
    /**
     * Visit a parse tree produced by the `localTime`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocalTime?: (ctx: LocalTimeContext) => Result;
    /**
     * Visit a parse tree produced by the `systemVariable`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSystemVariable?: (ctx: SystemVariableContext) => Result;
    /**
     * Visit a parse tree produced by the `collate`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCollate?: (ctx: CollateContext) => Result;
    /**
     * Visit a parse tree produced by the `currentUser`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentUser?: (ctx: CurrentUserContext) => Result;
    /**
     * Visit a parse tree produced by the `constantDefault`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstantDefault?: (ctx: ConstantDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `extract`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtract?: (ctx: ExtractContext) => Result;
    /**
     * Visit a parse tree produced by the `currentTimestamp`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCurrentTimestamp?: (ctx: CurrentTimestampContext) => Result;
    /**
     * Visit a parse tree produced by the `functionCall`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCall?: (ctx: FunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `arraySlice`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArraySlice?: (ctx: ArraySliceContext) => Result;
    /**
     * Visit a parse tree produced by the `bitOperation`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBitOperation?: (ctx: BitOperationContext) => Result;
    /**
     * Visit a parse tree produced by the `dateFloor`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDateFloor?: (ctx: DateFloorContext) => Result;
    /**
     * Visit a parse tree produced by the `searchedCase`
     * labeled alternative in `DorisParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSearchedCase?: (ctx: SearchedCaseContext) => Result;
    /**
     * Visit a parse tree produced by the `except`
     * labeled alternative in `DorisParser.exceptOrReplace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExcept?: (ctx: ExceptContext) => Result;
    /**
     * Visit a parse tree produced by the `replace`
     * labeled alternative in `DorisParser.exceptOrReplace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplace?: (ctx: ReplaceContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.castDataType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCastDataType?: (ctx: CastDataTypeContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.functionCallExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.functionIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionIdentifier?: (ctx: FunctionIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.functionNameIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionNameIdentifier?: (ctx: FunctionNameIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.windowSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowSpec?: (ctx: WindowSpecContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.windowFrame`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowFrame?: (ctx: WindowFrameContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.frameUnits`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrameUnits?: (ctx: FrameUnitsContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.frameBoundary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrameBoundary?: (ctx: FrameBoundaryContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.qualifiedName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedName?: (ctx: QualifiedNameContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.specifiedPartition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSpecifiedPartition?: (ctx: SpecifiedPartitionContext) => Result;
    /**
     * Visit a parse tree produced by the `nullLiteral`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNullLiteral?: (ctx: NullLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `typeConstructor`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeConstructor?: (ctx: TypeConstructorContext) => Result;
    /**
     * Visit a parse tree produced by the `numericLiteral`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `booleanLiteral`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `stringLiteral`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLiteral?: (ctx: StringLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `arrayLiteral`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayLiteral?: (ctx: ArrayLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `mapLiteral`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMapLiteral?: (ctx: MapLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `structLiteral`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructLiteral?: (ctx: StructLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `placeholder`
     * labeled alternative in `DorisParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPlaceholder?: (ctx: PlaceholderContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.comparisonOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.booleanValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanValue?: (ctx: BooleanValueContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.whenClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhenClause?: (ctx: WhenClauseContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.interval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterval?: (ctx: IntervalContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.unitIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnitIdentifier?: (ctx: UnitIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.dataTypeWithNullable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDataTypeWithNullable?: (ctx: DataTypeWithNullableContext) => Result;
    /**
     * Visit a parse tree produced by the `complexDataType`
     * labeled alternative in `DorisParser.dataType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComplexDataType?: (ctx: ComplexDataTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `aggStateDataType`
     * labeled alternative in `DorisParser.dataType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggStateDataType?: (ctx: AggStateDataTypeContext) => Result;
    /**
     * Visit a parse tree produced by the `primitiveDataType`
     * labeled alternative in `DorisParser.dataType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimitiveDataType?: (ctx: PrimitiveDataTypeContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.primitiveColType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimitiveColType?: (ctx: PrimitiveColTypeContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.complexColTypeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComplexColTypeList?: (ctx: ComplexColTypeListContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.complexColType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComplexColType?: (ctx: ComplexColTypeContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.commentSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommentSpec?: (ctx: CommentSpecContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.sample`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSample?: (ctx: SampleContext) => Result;
    /**
     * Visit a parse tree produced by the `sampleByPercentile`
     * labeled alternative in `DorisParser.sampleMethod`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSampleByPercentile?: (ctx: SampleByPercentileContext) => Result;
    /**
     * Visit a parse tree produced by the `sampleByRows`
     * labeled alternative in `DorisParser.sampleMethod`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSampleByRows?: (ctx: SampleByRowsContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.tableSnapshot`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableSnapshot?: (ctx: TableSnapshotContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.errorCapturingIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by the `errorIdent`
     * labeled alternative in `DorisParser.errorCapturingIdentifierExtra`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorIdent?: (ctx: ErrorIdentContext) => Result;
    /**
     * Visit a parse tree produced by the `realIdent`
     * labeled alternative in `DorisParser.errorCapturingIdentifierExtra`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRealIdent?: (ctx: RealIdentContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by the `unquotedIdentifier`
     * labeled alternative in `DorisParser.strictIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by the `quotedIdentifierAlternative`
     * labeled alternative in `DorisParser.strictIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.quotedIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by the `integerLiteral`
     * labeled alternative in `DorisParser.number`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `decimalLiteral`
     * labeled alternative in `DorisParser.number`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecimalLiteral?: (ctx: DecimalLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `DorisParser.nonReserved`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonReserved?: (ctx: NonReservedContext) => Result;
}

