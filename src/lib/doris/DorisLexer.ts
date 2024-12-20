// Generated from dt-sql-parser/src/grammar/doris/DorisLexer.g4 by ANTLR 4.13.1

// @ts-nocheck

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class DorisLexer extends antlr.Lexer {
    public static readonly SEMICOLON = 1;
    public static readonly LEFT_PAREN = 2;
    public static readonly RIGHT_PAREN = 3;
    public static readonly COMMA = 4;
    public static readonly DOT = 5;
    public static readonly DOTDOTDOT = 6;
    public static readonly LEFT_BRACKET = 7;
    public static readonly RIGHT_BRACKET = 8;
    public static readonly LEFT_BRACE = 9;
    public static readonly RIGHT_BRACE = 10;
    public static readonly ACCOUNT_LOCK = 11;
    public static readonly ACCOUNT_UNLOCK = 12;
    public static readonly ACTIONS = 13;
    public static readonly ADD = 14;
    public static readonly ADDDATE = 15;
    public static readonly ADMIN = 16;
    public static readonly AFTER = 17;
    public static readonly AGG_STATE = 18;
    public static readonly AGGREGATE = 19;
    public static readonly ALIAS = 20;
    public static readonly ALL = 21;
    public static readonly ALTER = 22;
    public static readonly ANALYZE = 23;
    public static readonly ANALYZED = 24;
    public static readonly AND = 25;
    public static readonly ANTI = 26;
    public static readonly APPEND = 27;
    public static readonly ARRAY = 28;
    public static readonly ARRAY_RANGE = 29;
    public static readonly AS = 30;
    public static readonly ASC = 31;
    public static readonly AT = 32;
    public static readonly AUTHORS = 33;
    public static readonly AUTO = 34;
    public static readonly AUTO_INCREMENT = 35;
    public static readonly ALWAYS = 36;
    public static readonly BACKEND = 37;
    public static readonly BACKENDS = 38;
    public static readonly BACKUP = 39;
    public static readonly BEGIN = 40;
    public static readonly BELONG = 41;
    public static readonly BETWEEN = 42;
    public static readonly BIGINT = 43;
    public static readonly BIN = 44;
    public static readonly BINARY = 45;
    public static readonly BINLOG = 46;
    public static readonly BITAND = 47;
    public static readonly BITMAP = 48;
    public static readonly BITMAP_EMPTY = 49;
    public static readonly BITMAP_UNION = 50;
    public static readonly BITOR = 51;
    public static readonly BITXOR = 52;
    public static readonly BLOB = 53;
    public static readonly BOOLEAN = 54;
    public static readonly BRIEF = 55;
    public static readonly BROKER = 56;
    public static readonly BUCKETS = 57;
    public static readonly BUILD = 58;
    public static readonly BUILTIN = 59;
    public static readonly BULK = 60;
    public static readonly BY = 61;
    public static readonly CACHE = 62;
    public static readonly CACHED = 63;
    public static readonly CALL = 64;
    public static readonly CANCEL = 65;
    public static readonly CASE = 66;
    public static readonly CAST = 67;
    public static readonly CATALOG = 68;
    public static readonly CATALOGS = 69;
    public static readonly CHAIN = 70;
    public static readonly CHAR = 71;
    public static readonly CHARSET = 72;
    public static readonly CHECK = 73;
    public static readonly CLEAN = 74;
    public static readonly CLUSTER = 75;
    public static readonly CLUSTERS = 76;
    public static readonly COLLATE = 77;
    public static readonly COLLATION = 78;
    public static readonly COLLECT = 79;
    public static readonly COLOCATE = 80;
    public static readonly COLUMN = 81;
    public static readonly COLUMNS = 82;
    public static readonly COMMENT = 83;
    public static readonly COMMIT = 84;
    public static readonly COMMITTED = 85;
    public static readonly COMPACT = 86;
    public static readonly COMPLETE = 87;
    public static readonly COMPRESS_TYPE = 88;
    public static readonly COMPUTE = 89;
    public static readonly CONDITIONS = 90;
    public static readonly CONFIG = 91;
    public static readonly CONNECTION = 92;
    public static readonly CONNECTION_ID = 93;
    public static readonly CONSISTENT = 94;
    public static readonly CONSTRAINT = 95;
    public static readonly CONSTRAINTS = 96;
    public static readonly CONVERT = 97;
    public static readonly CONVERT_LSC = 98;
    public static readonly COPY = 99;
    public static readonly COUNT = 100;
    public static readonly CREATE = 101;
    public static readonly CREATION = 102;
    public static readonly CRON = 103;
    public static readonly CROSS = 104;
    public static readonly CUBE = 105;
    public static readonly CURRENT = 106;
    public static readonly CURRENT_CATALOG = 107;
    public static readonly CURRENT_DATE = 108;
    public static readonly CURRENT_TIME = 109;
    public static readonly CURRENT_TIMESTAMP = 110;
    public static readonly CURRENT_USER = 111;
    public static readonly DATA = 112;
    public static readonly DATABASE = 113;
    public static readonly DATABASES = 114;
    public static readonly DATE = 115;
    public static readonly DATE_ADD = 116;
    public static readonly DATE_CEIL = 117;
    public static readonly DATE_DIFF = 118;
    public static readonly DATE_FLOOR = 119;
    public static readonly DATE_SUB = 120;
    public static readonly DATEADD = 121;
    public static readonly DATEDIFF = 122;
    public static readonly DATETIME = 123;
    public static readonly DATETIMEV2 = 124;
    public static readonly DATEV2 = 125;
    public static readonly DATETIMEV1 = 126;
    public static readonly DATEV1 = 127;
    public static readonly DAY = 128;
    public static readonly DAYS_ADD = 129;
    public static readonly DAYS_SUB = 130;
    public static readonly DECIMAL = 131;
    public static readonly DECIMALV2 = 132;
    public static readonly DECIMALV3 = 133;
    public static readonly DECOMMISSION = 134;
    public static readonly DEFAULT = 135;
    public static readonly DEFERRED = 136;
    public static readonly DELETE = 137;
    public static readonly DEMAND = 138;
    public static readonly DESC = 139;
    public static readonly DESCRIBE = 140;
    public static readonly DIAGNOSE = 141;
    public static readonly DIAGNOSIS = 142;
    public static readonly DISK = 143;
    public static readonly DISTINCT = 144;
    public static readonly DISTINCTPC = 145;
    public static readonly DISTINCTPCSA = 146;
    public static readonly DISTRIBUTED = 147;
    public static readonly DISTRIBUTION = 148;
    public static readonly DIV = 149;
    public static readonly DO = 150;
    public static readonly DORIS_INTERNAL_TABLE_ID = 151;
    public static readonly DOUBLE = 152;
    public static readonly DROP = 153;
    public static readonly DROPP = 154;
    public static readonly DUAL = 155;
    public static readonly DUMP = 156;
    public static readonly DUPLICATE = 157;
    public static readonly DYNAMIC = 158;
    public static readonly E = 159;
    public static readonly ELSE = 160;
    public static readonly ENABLE = 161;
    public static readonly ENCRYPTKEY = 162;
    public static readonly ENCRYPTKEYS = 163;
    public static readonly END = 164;
    public static readonly ENDS = 165;
    public static readonly ENGINE = 166;
    public static readonly ENGINES = 167;
    public static readonly ENTER = 168;
    public static readonly ERRORS = 169;
    public static readonly EVENTS = 170;
    public static readonly EVERY = 171;
    public static readonly EXCEPT = 172;
    public static readonly EXCLUDE = 173;
    public static readonly EXECUTE = 174;
    public static readonly EXISTS = 175;
    public static readonly EXPIRED = 176;
    public static readonly EXPLAIN = 177;
    public static readonly EXPORT = 178;
    public static readonly EXTENDED = 179;
    public static readonly EXTERNAL = 180;
    public static readonly EXTRACT = 181;
    public static readonly FAILED_LOGIN_ATTEMPTS = 182;
    public static readonly FALSE = 183;
    public static readonly FAST = 184;
    public static readonly FEATURE = 185;
    public static readonly FIELDS = 186;
    public static readonly FILE = 187;
    public static readonly FILTER = 188;
    public static readonly FIRST = 189;
    public static readonly FLOAT = 190;
    public static readonly FOLLOWER = 191;
    public static readonly FOLLOWING = 192;
    public static readonly FOR = 193;
    public static readonly FOREIGN = 194;
    public static readonly FORCE = 195;
    public static readonly FORMAT = 196;
    public static readonly FREE = 197;
    public static readonly FROM = 198;
    public static readonly FRONTEND = 199;
    public static readonly FRONTENDS = 200;
    public static readonly FULL = 201;
    public static readonly FUNCTION = 202;
    public static readonly FUNCTIONS = 203;
    public static readonly GENERATED = 204;
    public static readonly GENERIC = 205;
    public static readonly GLOBAL = 206;
    public static readonly GRANT = 207;
    public static readonly GRANTS = 208;
    public static readonly GRAPH = 209;
    public static readonly GROUP = 210;
    public static readonly GROUPING = 211;
    public static readonly GROUPS = 212;
    public static readonly HASH = 213;
    public static readonly HAVING = 214;
    public static readonly HDFS = 215;
    public static readonly HELP = 216;
    public static readonly HISTOGRAM = 217;
    public static readonly HLL = 218;
    public static readonly HLL_UNION = 219;
    public static readonly HOSTNAME = 220;
    public static readonly HOTSPOT = 221;
    public static readonly HOUR = 222;
    public static readonly HUB = 223;
    public static readonly IDENTIFIED = 224;
    public static readonly IF = 225;
    public static readonly IGNORE = 226;
    public static readonly IMMEDIATE = 227;
    public static readonly IN = 228;
    public static readonly INCREMENTAL = 229;
    public static readonly INDEX = 230;
    public static readonly INDEXES = 231;
    public static readonly INFILE = 232;
    public static readonly INNER = 233;
    public static readonly INSERT = 234;
    public static readonly INSTALL = 235;
    public static readonly INT = 236;
    public static readonly INTEGER = 237;
    public static readonly INTERMEDIATE = 238;
    public static readonly INTERSECT = 239;
    public static readonly INTERVAL = 240;
    public static readonly INTO = 241;
    public static readonly INVERTED = 242;
    public static readonly IPV4 = 243;
    public static readonly IPV6 = 244;
    public static readonly IS = 245;
    public static readonly IS_NOT_NULL_PRED = 246;
    public static readonly IS_NULL_PRED = 247;
    public static readonly ISNULL = 248;
    public static readonly ISOLATION = 249;
    public static readonly JOB = 250;
    public static readonly JOBS = 251;
    public static readonly JOIN = 252;
    public static readonly JSON = 253;
    public static readonly JSONB = 254;
    public static readonly KEY = 255;
    public static readonly KEYS = 256;
    public static readonly KILL = 257;
    public static readonly LABEL = 258;
    public static readonly LARGEINT = 259;
    public static readonly LAST = 260;
    public static readonly LATERAL = 261;
    public static readonly LDAP = 262;
    public static readonly LDAP_ADMIN_PASSWORD = 263;
    public static readonly LEFT = 264;
    public static readonly LESS = 265;
    public static readonly LEVEL = 266;
    public static readonly LIKE = 267;
    public static readonly LIMIT = 268;
    public static readonly LINES = 269;
    public static readonly LINK = 270;
    public static readonly LIST = 271;
    public static readonly LOAD = 272;
    public static readonly LOCAL = 273;
    public static readonly LOCALTIME = 274;
    public static readonly LOCALTIMESTAMP = 275;
    public static readonly LOCATION = 276;
    public static readonly LOCK = 277;
    public static readonly LOGICAL = 278;
    public static readonly LOW_PRIORITY = 279;
    public static readonly MANUAL = 280;
    public static readonly MAP = 281;
    public static readonly MATCH = 282;
    public static readonly MATCH_ALL = 283;
    public static readonly MATCH_ANY = 284;
    public static readonly MATCH_PHRASE = 285;
    public static readonly MATCH_PHRASE_EDGE = 286;
    public static readonly MATCH_PHRASE_PREFIX = 287;
    public static readonly MATCH_REGEXP = 288;
    public static readonly MATERIALIZED = 289;
    public static readonly MAX = 290;
    public static readonly MAXVALUE = 291;
    public static readonly MEMO = 292;
    public static readonly MERGE = 293;
    public static readonly MIGRATE = 294;
    public static readonly MIGRATIONS = 295;
    public static readonly MIN = 296;
    public static readonly MINUS = 297;
    public static readonly MINUTE = 298;
    public static readonly MODIFY = 299;
    public static readonly MONTH = 300;
    public static readonly MTMV = 301;
    public static readonly NAME = 302;
    public static readonly NAMES = 303;
    public static readonly NATURAL = 304;
    public static readonly NEGATIVE = 305;
    public static readonly NEVER = 306;
    public static readonly NEXT = 307;
    public static readonly NGRAM_BF = 308;
    public static readonly NO = 309;
    public static readonly NON_NULLABLE = 310;
    public static readonly NOT = 311;
    public static readonly NULL = 312;
    public static readonly NULLS = 313;
    public static readonly OBSERVER = 314;
    public static readonly OF = 315;
    public static readonly OFFSET = 316;
    public static readonly ON = 317;
    public static readonly ONLY = 318;
    public static readonly OPEN = 319;
    public static readonly OPTIMIZED = 320;
    public static readonly OR = 321;
    public static readonly ORDER = 322;
    public static readonly OUTER = 323;
    public static readonly OUTFILE = 324;
    public static readonly OVER = 325;
    public static readonly OVERWRITE = 326;
    public static readonly PARAMETER = 327;
    public static readonly PARSED = 328;
    public static readonly PARTITION = 329;
    public static readonly PARTITIONS = 330;
    public static readonly PASSWORD = 331;
    public static readonly PASSWORD_EXPIRE = 332;
    public static readonly PASSWORD_HISTORY = 333;
    public static readonly PASSWORD_LOCK_TIME = 334;
    public static readonly PASSWORD_REUSE = 335;
    public static readonly PATH = 336;
    public static readonly PAUSE = 337;
    public static readonly PERCENT = 338;
    public static readonly PERIOD = 339;
    public static readonly PERMISSIVE = 340;
    public static readonly PHYSICAL = 341;
    public static readonly PI = 342;
    public static readonly PLACEHOLDER = 343;
    public static readonly PLAN = 344;
    public static readonly PLAY = 345;
    public static readonly PRIVILEGES = 346;
    public static readonly PROCESS = 347;
    public static readonly PLUGIN = 348;
    public static readonly PLUGINS = 349;
    public static readonly POLICY = 350;
    public static readonly PRECEDING = 351;
    public static readonly PREPARE = 352;
    public static readonly PRIMARY = 353;
    public static readonly PROC = 354;
    public static readonly PROCEDURE = 355;
    public static readonly PROCESSLIST = 356;
    public static readonly PROFILE = 357;
    public static readonly PROPERTIES = 358;
    public static readonly PROPERTY = 359;
    public static readonly QUANTILE_STATE = 360;
    public static readonly QUANTILE_UNION = 361;
    public static readonly QUERY = 362;
    public static readonly QUOTA = 363;
    public static readonly QUALIFY = 364;
    public static readonly RANDOM = 365;
    public static readonly RANGE = 366;
    public static readonly READ = 367;
    public static readonly REAL = 368;
    public static readonly REBALANCE = 369;
    public static readonly RECENT = 370;
    public static readonly RECOVER = 371;
    public static readonly RECYCLE = 372;
    public static readonly REFRESH = 373;
    public static readonly REFERENCES = 374;
    public static readonly REGEXP = 375;
    public static readonly RELEASE = 376;
    public static readonly RENAME = 377;
    public static readonly REPAIR = 378;
    public static readonly REPEATABLE = 379;
    public static readonly REPLACE = 380;
    public static readonly REPLACE_IF_NOT_NULL = 381;
    public static readonly REPLAYER = 382;
    public static readonly REPLICA = 383;
    public static readonly REPOSITORIES = 384;
    public static readonly REPOSITORY = 385;
    public static readonly RESOURCE = 386;
    public static readonly RESOURCES = 387;
    public static readonly RESTORE = 388;
    public static readonly RESTRICTIVE = 389;
    public static readonly RESUME = 390;
    public static readonly RETURNS = 391;
    public static readonly REVOKE = 392;
    public static readonly REWRITTEN = 393;
    public static readonly RIGHT = 394;
    public static readonly RLIKE = 395;
    public static readonly ROLE = 396;
    public static readonly ROLES = 397;
    public static readonly ROLLBACK = 398;
    public static readonly ROLLUP = 399;
    public static readonly ROUTINE = 400;
    public static readonly ROW = 401;
    public static readonly ROWS = 402;
    public static readonly S3 = 403;
    public static readonly SAMPLE = 404;
    public static readonly SCHEDULE = 405;
    public static readonly SCHEDULER = 406;
    public static readonly SCHEMA = 407;
    public static readonly SCHEMAS = 408;
    public static readonly SECOND = 409;
    public static readonly SELECT = 410;
    public static readonly SEMI = 411;
    public static readonly SEQUENCE = 412;
    public static readonly SERIALIZABLE = 413;
    public static readonly SESSION = 414;
    public static readonly SESSION_USER = 415;
    public static readonly SET = 416;
    public static readonly SETS = 417;
    public static readonly SET_SESSION_VARIABLE = 418;
    public static readonly SHAPE = 419;
    public static readonly SHOW = 420;
    public static readonly SIGNED = 421;
    public static readonly SKEW = 422;
    public static readonly SMALLINT = 423;
    public static readonly SNAPSHOT = 424;
    public static readonly SONAME = 425;
    public static readonly SPLIT = 426;
    public static readonly SQL = 427;
    public static readonly SQL_BLOCK_RULE = 428;
    public static readonly STAGE = 429;
    public static readonly STAGES = 430;
    public static readonly START = 431;
    public static readonly STARTS = 432;
    public static readonly STATS = 433;
    public static readonly STATUS = 434;
    public static readonly STOP = 435;
    public static readonly STORAGE = 436;
    public static readonly STREAM = 437;
    public static readonly STREAMING = 438;
    public static readonly STRING = 439;
    public static readonly STRUCT = 440;
    public static readonly SUBDATE = 441;
    public static readonly SUM = 442;
    public static readonly SUPERUSER = 443;
    public static readonly SWITCH = 444;
    public static readonly SYNC = 445;
    public static readonly SYSTEM = 446;
    public static readonly TABLE = 447;
    public static readonly TABLES = 448;
    public static readonly TABLESAMPLE = 449;
    public static readonly TABLET = 450;
    public static readonly TABLETS = 451;
    public static readonly TASK = 452;
    public static readonly TASKS = 453;
    public static readonly TEMPORARY = 454;
    public static readonly TERMINATED = 455;
    public static readonly TEXT = 456;
    public static readonly THAN = 457;
    public static readonly THEN = 458;
    public static readonly TIME = 459;
    public static readonly TIMESTAMP = 460;
    public static readonly TIMESTAMPADD = 461;
    public static readonly TIMESTAMPDIFF = 462;
    public static readonly TINYINT = 463;
    public static readonly TO = 464;
    public static readonly TRANSACTION = 465;
    public static readonly TRASH = 466;
    public static readonly TREE = 467;
    public static readonly TRIGGERS = 468;
    public static readonly TRIM = 469;
    public static readonly TRUE = 470;
    public static readonly TRUNCATE = 471;
    public static readonly TYPE = 472;
    public static readonly TYPECAST = 473;
    public static readonly TYPES = 474;
    public static readonly UNBOUNDED = 475;
    public static readonly UNCOMMITTED = 476;
    public static readonly UNINSTALL = 477;
    public static readonly UNION = 478;
    public static readonly UNIQUE = 479;
    public static readonly UNLOCK = 480;
    public static readonly UNSET = 481;
    public static readonly UNSIGNED = 482;
    public static readonly UP = 483;
    public static readonly UPDATE = 484;
    public static readonly USE = 485;
    public static readonly USER = 486;
    public static readonly USING = 487;
    public static readonly VALUE = 488;
    public static readonly VALUES = 489;
    public static readonly VARCHAR = 490;
    public static readonly VARIABLE = 491;
    public static readonly VARIABLES = 492;
    public static readonly VARIANT = 493;
    public static readonly VAULT = 494;
    public static readonly VAULTS = 495;
    public static readonly VERBOSE = 496;
    public static readonly VERSION = 497;
    public static readonly VIEW = 498;
    public static readonly VIEWS = 499;
    public static readonly WARM = 500;
    public static readonly WARNINGS = 501;
    public static readonly WEEK = 502;
    public static readonly WHEN = 503;
    public static readonly WHERE = 504;
    public static readonly WHITELIST = 505;
    public static readonly WITH = 506;
    public static readonly WORK = 507;
    public static readonly WORKLOAD = 508;
    public static readonly WRITE = 509;
    public static readonly XOR = 510;
    public static readonly YEAR = 511;
    public static readonly EQ = 512;
    public static readonly NSEQ = 513;
    public static readonly NEQ = 514;
    public static readonly LT = 515;
    public static readonly LTE = 516;
    public static readonly GT = 517;
    public static readonly GTE = 518;
    public static readonly PLUS = 519;
    public static readonly SUBTRACT = 520;
    public static readonly ASTERISK = 521;
    public static readonly SLASH = 522;
    public static readonly MOD = 523;
    public static readonly TILDE = 524;
    public static readonly AMPERSAND = 525;
    public static readonly LOGICALAND = 526;
    public static readonly LOGICALNOT = 527;
    public static readonly PIPE = 528;
    public static readonly DOUBLEPIPES = 529;
    public static readonly HAT = 530;
    public static readonly COLON = 531;
    public static readonly ARROW = 532;
    public static readonly HINT_START = 533;
    public static readonly HINT_END = 534;
    public static readonly COMMENT_START = 535;
    public static readonly ATSIGN = 536;
    public static readonly DOUBLEATSIGN = 537;
    public static readonly STRING_LITERAL = 538;
    public static readonly LEADING_STRING = 539;
    public static readonly BIGINT_LITERAL = 540;
    public static readonly SMALLINT_LITERAL = 541;
    public static readonly TINYINT_LITERAL = 542;
    public static readonly INTEGER_VALUE = 543;
    public static readonly EXPONENT_VALUE = 544;
    public static readonly DECIMAL_VALUE = 545;
    public static readonly BIGDECIMAL_LITERAL = 546;
    public static readonly IDENTIFIER = 547;
    public static readonly BACKQUOTED_IDENTIFIER = 548;
    public static readonly SIMPLE_COMMENT = 549;
    public static readonly BRACKETED_COMMENT = 550;
    public static readonly FROM_DUAL = 551;
    public static readonly WS = 552;
    public static readonly UNRECOGNIZED = 553;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "';'", "'('", "')'", "','", "'.'", "'...'", "'['", "']'", 
        "'{'", "'}'", "'ACCOUNT_LOCK'", "'ACCOUNT_UNLOCK'", "'ACTIONS'", 
        "'ADD'", "'ADDDATE'", "'ADMIN'", "'AFTER'", "'AGG_STATE'", "'AGGREGATE'", 
        "'ALIAS'", "'ALL'", "'ALTER'", "'ANALYZE'", "'ANALYZED'", "'AND'", 
        "'ANTI'", "'APPEND'", "'ARRAY'", "'ARRAY_RANGE'", "'AS'", "'ASC'", 
        "'AT'", "'AUTHORS'", "'AUTO'", "'AUTO_INCREMENT'", "'ALWAYS'", "'BACKEND'", 
        "'BACKENDS'", "'BACKUP'", "'BEGIN'", "'BELONG'", "'BETWEEN'", "'BIGINT'", 
        "'BIN'", "'BINARY'", "'BINLOG'", "'BITAND'", "'BITMAP'", "'BITMAP_EMPTY'", 
        "'BITMAP_UNION'", "'BITOR'", "'BITXOR'", "'BLOB'", "'BOOLEAN'", 
        "'BRIEF'", "'BROKER'", "'BUCKETS'", "'BUILD'", "'BUILTIN'", "'BULK'", 
        "'BY'", "'CACHE'", "'CACHED'", "'CALL'", "'CANCEL'", "'CASE'", "'CAST'", 
        "'CATALOG'", "'CATALOGS'", "'CHAIN'", null, "'CHARSET'", "'CHECK'", 
        "'CLEAN'", "'CLUSTER'", "'CLUSTERS'", "'COLLATE'", "'COLLATION'", 
        "'COLLECT'", "'COLOCATE'", "'COLUMN'", "'COLUMNS'", "'COMMENT'", 
        "'COMMIT'", "'COMMITTED'", "'COMPACT'", "'COMPLETE'", "'COMPRESS_TYPE'", 
        "'COMPUTE'", "'CONDITIONS'", "'CONFIG'", "'CONNECTION'", "'CONNECTION_ID'", 
        "'CONSISTENT'", "'CONSTRAINT'", "'CONSTRAINTS'", "'CONVERT'", "'CONVERT_LIGHT_SCHEMA_CHANGE_PROCESS'", 
        "'COPY'", "'COUNT'", "'CREATE'", "'CREATION'", "'CRON'", "'CROSS'", 
        "'CUBE'", "'CURRENT'", "'CURRENT_CATALOG'", "'CURRENT_DATE'", "'CURRENT_TIME'", 
        "'CURRENT_TIMESTAMP'", "'CURRENT_USER'", "'DATA'", "'DATABASE'", 
        "'DATABASES'", "'DATE'", "'DATE_ADD'", "'DATE_CEIL'", "'DATE_DIFF'", 
        "'DATE_FLOOR'", "'DATE_SUB'", "'DATEADD'", "'DATEDIFF'", "'DATETIME'", 
        "'DATETIMEV2'", "'DATEV2'", "'DATETIMEV1'", "'DATEV1'", "'DAY'", 
        "'DAYS_ADD'", "'DAYS_SUB'", "'DECIMAL'", "'DECIMALV2'", "'DECIMALV3'", 
        "'DECOMMISSION'", "'DEFAULT'", "'DEFERRED'", "'DELETE'", "'DEMAND'", 
        "'DESC'", "'DESCRIBE'", "'DIAGNOSE'", "'DIAGNOSIS'", "'DISK'", "'DISTINCT'", 
        "'DISTINCTPC'", "'DISTINCTPCSA'", "'DISTRIBUTED'", "'DISTRIBUTION'", 
        "'DIV'", "'DO'", "'DORIS_INTERNAL_TABLE_ID'", "'DOUBLE'", "'DROP'", 
        "'DROPP'", "'DUAL'", "'DUMP'", "'DUPLICATE'", "'DYNAMIC'", "'E'", 
        "'ELSE'", "'ENABLE'", "'ENCRYPTKEY'", "'ENCRYPTKEYS'", "'END'", 
        "'ENDS'", "'ENGINE'", "'ENGINES'", "'ENTER'", "'ERRORS'", "'EVENTS'", 
        "'EVERY'", "'EXCEPT'", "'EXCLUDE'", "'EXECUTE'", "'EXISTS'", "'EXPIRED'", 
        "'EXPLAIN'", "'EXPORT'", "'EXTENDED'", "'EXTERNAL'", "'EXTRACT'", 
        "'FAILED_LOGIN_ATTEMPTS'", "'FALSE'", "'FAST'", "'FEATURE'", "'FIELDS'", 
        "'FILE'", "'FILTER'", "'FIRST'", "'FLOAT'", "'FOLLOWER'", "'FOLLOWING'", 
        "'FOR'", "'FOREIGN'", "'FORCE'", "'FORMAT'", "'FREE'", "'FROM'", 
        "'FRONTEND'", "'FRONTENDS'", "'FULL'", "'FUNCTION'", "'FUNCTIONS'", 
        "'GENERATED'", "'GENERIC'", "'GLOBAL'", "'GRANT'", "'GRANTS'", "'GRAPH'", 
        "'GROUP'", "'GROUPING'", "'GROUPS'", "'HASH'", "'HAVING'", "'HDFS'", 
        "'HELP'", "'HISTOGRAM'", "'HLL'", "'HLL_UNION'", "'HOSTNAME'", "'HOTSPOT'", 
        "'HOUR'", "'HUB'", "'IDENTIFIED'", "'IF'", "'IGNORE'", "'IMMEDIATE'", 
        "'IN'", "'INCREMENTAL'", "'INDEX'", "'INDEXES'", "'INFILE'", "'INNER'", 
        "'INSERT'", "'INSTALL'", "'INT'", "'INTEGER'", "'INTERMEDIATE'", 
        "'INTERSECT'", "'INTERVAL'", "'INTO'", "'INVERTED'", "'IPV4'", "'IPV6'", 
        "'IS'", "'IS_NOT_NULL_PRED'", "'IS_NULL_PRED'", "'ISNULL'", "'ISOLATION'", 
        "'JOB'", "'JOBS'", "'JOIN'", "'JSON'", "'JSONB'", "'KEY'", "'KEYS'", 
        "'KILL'", "'LABEL'", "'LARGEINT'", "'LAST'", "'LATERAL'", "'LDAP'", 
        "'LDAP_ADMIN_PASSWORD'", "'LEFT'", "'LESS'", "'LEVEL'", "'LIKE'", 
        "'LIMIT'", "'LINES'", "'LINK'", "'LIST'", "'LOAD'", "'LOCAL'", "'LOCALTIME'", 
        "'LOCALTIMESTAMP'", "'LOCATION'", "'LOCK'", "'LOGICAL'", "'LOW_PRIORITY'", 
        "'MANUAL'", "'MAP'", "'MATCH'", "'MATCH_ALL'", "'MATCH_ANY'", "'MATCH_PHRASE'", 
        "'MATCH_PHRASE_EDGE'", "'MATCH_PHRASE_PREFIX'", "'MATCH_REGEXP'", 
        "'MATERIALIZED'", "'MAX'", "'MAXVALUE'", "'MEMO'", "'MERGE'", "'MIGRATE'", 
        "'MIGRATIONS'", "'MIN'", "'MINUS'", "'MINUTE'", "'MODIFY'", "'MONTH'", 
        "'MTMV'", "'NAME'", "'NAMES'", "'NATURAL'", "'NEGATIVE'", "'NEVER'", 
        "'NEXT'", "'NGRAM_BF'", "'NO'", "'NON_NULLABLE'", "'NOT'", "'NULL'", 
        "'NULLS'", "'OBSERVER'", "'OF'", "'OFFSET'", "'ON'", "'ONLY'", "'OPEN'", 
        "'OPTIMIZED'", "'OR'", "'ORDER'", "'OUTER'", "'OUTFILE'", "'OVER'", 
        "'OVERWRITE'", "'PARAMETER'", "'PARSED'", "'PARTITION'", "'PARTITIONS'", 
        "'PASSWORD'", "'PASSWORD_EXPIRE'", "'PASSWORD_HISTORY'", "'PASSWORD_LOCK_TIME'", 
        "'PASSWORD_REUSE'", "'PATH'", "'PAUSE'", "'PERCENT'", "'PERIOD'", 
        "'PERMISSIVE'", "'PHYSICAL'", "'PI'", "'?'", "'PLAN'", "'PLAY'", 
        "'PRIVILEGES'", "'PROCESS'", "'PLUGIN'", "'PLUGINS'", "'POLICY'", 
        "'PRECEDING'", "'PREPARE'", "'PRIMARY'", "'PROC'", "'PROCEDURE'", 
        "'PROCESSLIST'", "'PROFILE'", "'PROPERTIES'", "'PROPERTY'", "'QUANTILE_STATE'", 
        "'QUANTILE_UNION'", "'QUERY'", "'QUOTA'", "'QUALIFY'", "'RANDOM'", 
        "'RANGE'", "'READ'", "'REAL'", "'REBALANCE'", "'RECENT'", "'RECOVER'", 
        "'RECYCLE'", "'REFRESH'", "'REFERENCES'", "'REGEXP'", "'RELEASE'", 
        "'RENAME'", "'REPAIR'", "'REPEATABLE'", "'REPLACE'", "'REPLACE_IF_NOT_NULL'", 
        "'REPLAYER'", "'REPLICA'", "'REPOSITORIES'", "'REPOSITORY'", "'RESOURCE'", 
        "'RESOURCES'", "'RESTORE'", "'RESTRICTIVE'", "'RESUME'", "'RETURNS'", 
        "'REVOKE'", "'REWRITTEN'", "'RIGHT'", "'RLIKE'", "'ROLE'", "'ROLES'", 
        "'ROLLBACK'", "'ROLLUP'", "'ROUTINE'", "'ROW'", "'ROWS'", "'S3'", 
        "'SAMPLE'", "'SCHEDULE'", "'SCHEDULER'", "'SCHEMA'", "'SCHEMAS'", 
        "'SECOND'", "'SELECT'", "'SEMI'", "'SEQUENCE'", "'SERIALIZABLE'", 
        "'SESSION'", "'SESSION_USER'", "'SET'", "'SETS'", "'SET_SESSION_VARIABLE'", 
        "'SHAPE'", "'SHOW'", "'SIGNED'", "'SKEW'", "'SMALLINT'", "'SNAPSHOT'", 
        "'SONAME'", "'SPLIT'", "'SQL'", "'SQL_BLOCK_RULE'", "'STAGE'", "'STAGES'", 
        "'START'", "'STARTS'", "'STATS'", "'STATUS'", "'STOP'", "'STORAGE'", 
        "'STREAM'", "'STREAMING'", "'STRING'", "'STRUCT'", "'SUBDATE'", 
        "'SUM'", "'SUPERUSER'", "'SWITCH'", "'SYNC'", "'SYSTEM'", "'TABLE'", 
        "'TABLES'", "'TABLESAMPLE'", "'TABLET'", "'TABLETS'", "'TASK'", 
        "'TASKS'", "'TEMPORARY'", "'TERMINATED'", "'TEXT'", "'THAN'", "'THEN'", 
        "'TIME'", "'TIMESTAMP'", "'TIMESTAMPADD'", "'TIMESTAMPDIFF'", "'TINYINT'", 
        "'TO'", "'TRANSACTION'", "'TRASH'", "'TREE'", "'TRIGGERS'", "'TRIM'", 
        "'TRUE'", "'TRUNCATE'", "'TYPE'", "'TYPE_CAST'", "'TYPES'", "'UNBOUNDED'", 
        "'UNCOMMITTED'", "'UNINSTALL'", "'UNION'", "'UNIQUE'", "'UNLOCK'", 
        "'UNSET'", "'UNSIGNED'", "'UP'", "'UPDATE'", "'USE'", "'USER'", 
        "'USING'", "'VALUE'", "'VALUES'", "'VARCHAR'", "'VARIABLE'", "'VARIABLES'", 
        "'VARIANT'", "'VAULT'", "'VAULTS'", "'VERBOSE'", "'VERSION'", "'VIEW'", 
        "'VIEWS'", "'WARM'", "'WARNINGS'", "'WEEK'", "'WHEN'", "'WHERE'", 
        "'WHITELIST'", "'WITH'", "'WORK'", "'WORKLOAD'", "'WRITE'", "'XOR'", 
        "'YEAR'", null, "'<=>'", null, "'<'", null, "'>'", null, "'+'", 
        "'-'", "'*'", "'/'", "'%'", "'~'", "'&'", "'&&'", "'!'", "'|'", 
        "'||'", "'^'", "':'", "'->'", "'/*+'", "'*/'", "'/*'", "'@'", "'@@'"
    ];

    public static readonly symbolicNames = [
        null, "SEMICOLON", "LEFT_PAREN", "RIGHT_PAREN", "COMMA", "DOT", 
        "DOTDOTDOT", "LEFT_BRACKET", "RIGHT_BRACKET", "LEFT_BRACE", "RIGHT_BRACE", 
        "ACCOUNT_LOCK", "ACCOUNT_UNLOCK", "ACTIONS", "ADD", "ADDDATE", "ADMIN", 
        "AFTER", "AGG_STATE", "AGGREGATE", "ALIAS", "ALL", "ALTER", "ANALYZE", 
        "ANALYZED", "AND", "ANTI", "APPEND", "ARRAY", "ARRAY_RANGE", "AS", 
        "ASC", "AT", "AUTHORS", "AUTO", "AUTO_INCREMENT", "ALWAYS", "BACKEND", 
        "BACKENDS", "BACKUP", "BEGIN", "BELONG", "BETWEEN", "BIGINT", "BIN", 
        "BINARY", "BINLOG", "BITAND", "BITMAP", "BITMAP_EMPTY", "BITMAP_UNION", 
        "BITOR", "BITXOR", "BLOB", "BOOLEAN", "BRIEF", "BROKER", "BUCKETS", 
        "BUILD", "BUILTIN", "BULK", "BY", "CACHE", "CACHED", "CALL", "CANCEL", 
        "CASE", "CAST", "CATALOG", "CATALOGS", "CHAIN", "CHAR", "CHARSET", 
        "CHECK", "CLEAN", "CLUSTER", "CLUSTERS", "COLLATE", "COLLATION", 
        "COLLECT", "COLOCATE", "COLUMN", "COLUMNS", "COMMENT", "COMMIT", 
        "COMMITTED", "COMPACT", "COMPLETE", "COMPRESS_TYPE", "COMPUTE", 
        "CONDITIONS", "CONFIG", "CONNECTION", "CONNECTION_ID", "CONSISTENT", 
        "CONSTRAINT", "CONSTRAINTS", "CONVERT", "CONVERT_LSC", "COPY", "COUNT", 
        "CREATE", "CREATION", "CRON", "CROSS", "CUBE", "CURRENT", "CURRENT_CATALOG", 
        "CURRENT_DATE", "CURRENT_TIME", "CURRENT_TIMESTAMP", "CURRENT_USER", 
        "DATA", "DATABASE", "DATABASES", "DATE", "DATE_ADD", "DATE_CEIL", 
        "DATE_DIFF", "DATE_FLOOR", "DATE_SUB", "DATEADD", "DATEDIFF", "DATETIME", 
        "DATETIMEV2", "DATEV2", "DATETIMEV1", "DATEV1", "DAY", "DAYS_ADD", 
        "DAYS_SUB", "DECIMAL", "DECIMALV2", "DECIMALV3", "DECOMMISSION", 
        "DEFAULT", "DEFERRED", "DELETE", "DEMAND", "DESC", "DESCRIBE", "DIAGNOSE", 
        "DIAGNOSIS", "DISK", "DISTINCT", "DISTINCTPC", "DISTINCTPCSA", "DISTRIBUTED", 
        "DISTRIBUTION", "DIV", "DO", "DORIS_INTERNAL_TABLE_ID", "DOUBLE", 
        "DROP", "DROPP", "DUAL", "DUMP", "DUPLICATE", "DYNAMIC", "E", "ELSE", 
        "ENABLE", "ENCRYPTKEY", "ENCRYPTKEYS", "END", "ENDS", "ENGINE", 
        "ENGINES", "ENTER", "ERRORS", "EVENTS", "EVERY", "EXCEPT", "EXCLUDE", 
        "EXECUTE", "EXISTS", "EXPIRED", "EXPLAIN", "EXPORT", "EXTENDED", 
        "EXTERNAL", "EXTRACT", "FAILED_LOGIN_ATTEMPTS", "FALSE", "FAST", 
        "FEATURE", "FIELDS", "FILE", "FILTER", "FIRST", "FLOAT", "FOLLOWER", 
        "FOLLOWING", "FOR", "FOREIGN", "FORCE", "FORMAT", "FREE", "FROM", 
        "FRONTEND", "FRONTENDS", "FULL", "FUNCTION", "FUNCTIONS", "GENERATED", 
        "GENERIC", "GLOBAL", "GRANT", "GRANTS", "GRAPH", "GROUP", "GROUPING", 
        "GROUPS", "HASH", "HAVING", "HDFS", "HELP", "HISTOGRAM", "HLL", 
        "HLL_UNION", "HOSTNAME", "HOTSPOT", "HOUR", "HUB", "IDENTIFIED", 
        "IF", "IGNORE", "IMMEDIATE", "IN", "INCREMENTAL", "INDEX", "INDEXES", 
        "INFILE", "INNER", "INSERT", "INSTALL", "INT", "INTEGER", "INTERMEDIATE", 
        "INTERSECT", "INTERVAL", "INTO", "INVERTED", "IPV4", "IPV6", "IS", 
        "IS_NOT_NULL_PRED", "IS_NULL_PRED", "ISNULL", "ISOLATION", "JOB", 
        "JOBS", "JOIN", "JSON", "JSONB", "KEY", "KEYS", "KILL", "LABEL", 
        "LARGEINT", "LAST", "LATERAL", "LDAP", "LDAP_ADMIN_PASSWORD", "LEFT", 
        "LESS", "LEVEL", "LIKE", "LIMIT", "LINES", "LINK", "LIST", "LOAD", 
        "LOCAL", "LOCALTIME", "LOCALTIMESTAMP", "LOCATION", "LOCK", "LOGICAL", 
        "LOW_PRIORITY", "MANUAL", "MAP", "MATCH", "MATCH_ALL", "MATCH_ANY", 
        "MATCH_PHRASE", "MATCH_PHRASE_EDGE", "MATCH_PHRASE_PREFIX", "MATCH_REGEXP", 
        "MATERIALIZED", "MAX", "MAXVALUE", "MEMO", "MERGE", "MIGRATE", "MIGRATIONS", 
        "MIN", "MINUS", "MINUTE", "MODIFY", "MONTH", "MTMV", "NAME", "NAMES", 
        "NATURAL", "NEGATIVE", "NEVER", "NEXT", "NGRAM_BF", "NO", "NON_NULLABLE", 
        "NOT", "NULL", "NULLS", "OBSERVER", "OF", "OFFSET", "ON", "ONLY", 
        "OPEN", "OPTIMIZED", "OR", "ORDER", "OUTER", "OUTFILE", "OVER", 
        "OVERWRITE", "PARAMETER", "PARSED", "PARTITION", "PARTITIONS", "PASSWORD", 
        "PASSWORD_EXPIRE", "PASSWORD_HISTORY", "PASSWORD_LOCK_TIME", "PASSWORD_REUSE", 
        "PATH", "PAUSE", "PERCENT", "PERIOD", "PERMISSIVE", "PHYSICAL", 
        "PI", "PLACEHOLDER", "PLAN", "PLAY", "PRIVILEGES", "PROCESS", "PLUGIN", 
        "PLUGINS", "POLICY", "PRECEDING", "PREPARE", "PRIMARY", "PROC", 
        "PROCEDURE", "PROCESSLIST", "PROFILE", "PROPERTIES", "PROPERTY", 
        "QUANTILE_STATE", "QUANTILE_UNION", "QUERY", "QUOTA", "QUALIFY", 
        "RANDOM", "RANGE", "READ", "REAL", "REBALANCE", "RECENT", "RECOVER", 
        "RECYCLE", "REFRESH", "REFERENCES", "REGEXP", "RELEASE", "RENAME", 
        "REPAIR", "REPEATABLE", "REPLACE", "REPLACE_IF_NOT_NULL", "REPLAYER", 
        "REPLICA", "REPOSITORIES", "REPOSITORY", "RESOURCE", "RESOURCES", 
        "RESTORE", "RESTRICTIVE", "RESUME", "RETURNS", "REVOKE", "REWRITTEN", 
        "RIGHT", "RLIKE", "ROLE", "ROLES", "ROLLBACK", "ROLLUP", "ROUTINE", 
        "ROW", "ROWS", "S3", "SAMPLE", "SCHEDULE", "SCHEDULER", "SCHEMA", 
        "SCHEMAS", "SECOND", "SELECT", "SEMI", "SEQUENCE", "SERIALIZABLE", 
        "SESSION", "SESSION_USER", "SET", "SETS", "SET_SESSION_VARIABLE", 
        "SHAPE", "SHOW", "SIGNED", "SKEW", "SMALLINT", "SNAPSHOT", "SONAME", 
        "SPLIT", "SQL", "SQL_BLOCK_RULE", "STAGE", "STAGES", "START", "STARTS", 
        "STATS", "STATUS", "STOP", "STORAGE", "STREAM", "STREAMING", "STRING", 
        "STRUCT", "SUBDATE", "SUM", "SUPERUSER", "SWITCH", "SYNC", "SYSTEM", 
        "TABLE", "TABLES", "TABLESAMPLE", "TABLET", "TABLETS", "TASK", "TASKS", 
        "TEMPORARY", "TERMINATED", "TEXT", "THAN", "THEN", "TIME", "TIMESTAMP", 
        "TIMESTAMPADD", "TIMESTAMPDIFF", "TINYINT", "TO", "TRANSACTION", 
        "TRASH", "TREE", "TRIGGERS", "TRIM", "TRUE", "TRUNCATE", "TYPE", 
        "TYPECAST", "TYPES", "UNBOUNDED", "UNCOMMITTED", "UNINSTALL", "UNION", 
        "UNIQUE", "UNLOCK", "UNSET", "UNSIGNED", "UP", "UPDATE", "USE", 
        "USER", "USING", "VALUE", "VALUES", "VARCHAR", "VARIABLE", "VARIABLES", 
        "VARIANT", "VAULT", "VAULTS", "VERBOSE", "VERSION", "VIEW", "VIEWS", 
        "WARM", "WARNINGS", "WEEK", "WHEN", "WHERE", "WHITELIST", "WITH", 
        "WORK", "WORKLOAD", "WRITE", "XOR", "YEAR", "EQ", "NSEQ", "NEQ", 
        "LT", "LTE", "GT", "GTE", "PLUS", "SUBTRACT", "ASTERISK", "SLASH", 
        "MOD", "TILDE", "AMPERSAND", "LOGICALAND", "LOGICALNOT", "PIPE", 
        "DOUBLEPIPES", "HAT", "COLON", "ARROW", "HINT_START", "HINT_END", 
        "COMMENT_START", "ATSIGN", "DOUBLEATSIGN", "STRING_LITERAL", "LEADING_STRING", 
        "BIGINT_LITERAL", "SMALLINT_LITERAL", "TINYINT_LITERAL", "INTEGER_VALUE", 
        "EXPONENT_VALUE", "DECIMAL_VALUE", "BIGDECIMAL_LITERAL", "IDENTIFIER", 
        "BACKQUOTED_IDENTIFIER", "SIMPLE_COMMENT", "BRACKETED_COMMENT", 
        "FROM_DUAL", "WS", "UNRECOGNIZED"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "SEMICOLON", "LEFT_PAREN", "RIGHT_PAREN", "COMMA", "DOT", "DOTDOTDOT", 
        "LEFT_BRACKET", "RIGHT_BRACKET", "LEFT_BRACE", "RIGHT_BRACE", "ACCOUNT_LOCK", 
        "ACCOUNT_UNLOCK", "ACTIONS", "ADD", "ADDDATE", "ADMIN", "AFTER", 
        "AGG_STATE", "AGGREGATE", "ALIAS", "ALL", "ALTER", "ANALYZE", "ANALYZED", 
        "AND", "ANTI", "APPEND", "ARRAY", "ARRAY_RANGE", "AS", "ASC", "AT", 
        "AUTHORS", "AUTO", "AUTO_INCREMENT", "ALWAYS", "BACKEND", "BACKENDS", 
        "BACKUP", "BEGIN", "BELONG", "BETWEEN", "BIGINT", "BIN", "BINARY", 
        "BINLOG", "BITAND", "BITMAP", "BITMAP_EMPTY", "BITMAP_UNION", "BITOR", 
        "BITXOR", "BLOB", "BOOLEAN", "BRIEF", "BROKER", "BUCKETS", "BUILD", 
        "BUILTIN", "BULK", "BY", "CACHE", "CACHED", "CALL", "CANCEL", "CASE", 
        "CAST", "CATALOG", "CATALOGS", "CHAIN", "CHAR", "CHARSET", "CHECK", 
        "CLEAN", "CLUSTER", "CLUSTERS", "COLLATE", "COLLATION", "COLLECT", 
        "COLOCATE", "COLUMN", "COLUMNS", "COMMENT", "COMMIT", "COMMITTED", 
        "COMPACT", "COMPLETE", "COMPRESS_TYPE", "COMPUTE", "CONDITIONS", 
        "CONFIG", "CONNECTION", "CONNECTION_ID", "CONSISTENT", "CONSTRAINT", 
        "CONSTRAINTS", "CONVERT", "CONVERT_LSC", "COPY", "COUNT", "CREATE", 
        "CREATION", "CRON", "CROSS", "CUBE", "CURRENT", "CURRENT_CATALOG", 
        "CURRENT_DATE", "CURRENT_TIME", "CURRENT_TIMESTAMP", "CURRENT_USER", 
        "DATA", "DATABASE", "DATABASES", "DATE", "DATE_ADD", "DATE_CEIL", 
        "DATE_DIFF", "DATE_FLOOR", "DATE_SUB", "DATEADD", "DATEDIFF", "DATETIME", 
        "DATETIMEV2", "DATEV2", "DATETIMEV1", "DATEV1", "DAY", "DAYS_ADD", 
        "DAYS_SUB", "DECIMAL", "DECIMALV2", "DECIMALV3", "DECOMMISSION", 
        "DEFAULT", "DEFERRED", "DELETE", "DEMAND", "DESC", "DESCRIBE", "DIAGNOSE", 
        "DIAGNOSIS", "DISK", "DISTINCT", "DISTINCTPC", "DISTINCTPCSA", "DISTRIBUTED", 
        "DISTRIBUTION", "DIV", "DO", "DORIS_INTERNAL_TABLE_ID", "DOUBLE", 
        "DROP", "DROPP", "DUAL", "DUMP", "DUPLICATE", "DYNAMIC", "E", "ELSE", 
        "ENABLE", "ENCRYPTKEY", "ENCRYPTKEYS", "END", "ENDS", "ENGINE", 
        "ENGINES", "ENTER", "ERRORS", "EVENTS", "EVERY", "EXCEPT", "EXCLUDE", 
        "EXECUTE", "EXISTS", "EXPIRED", "EXPLAIN", "EXPORT", "EXTENDED", 
        "EXTERNAL", "EXTRACT", "FAILED_LOGIN_ATTEMPTS", "FALSE", "FAST", 
        "FEATURE", "FIELDS", "FILE", "FILTER", "FIRST", "FLOAT", "FOLLOWER", 
        "FOLLOWING", "FOR", "FOREIGN", "FORCE", "FORMAT", "FREE", "FROM", 
        "FRONTEND", "FRONTENDS", "FULL", "FUNCTION", "FUNCTIONS", "GENERATED", 
        "GENERIC", "GLOBAL", "GRANT", "GRANTS", "GRAPH", "GROUP", "GROUPING", 
        "GROUPS", "HASH", "HAVING", "HDFS", "HELP", "HISTOGRAM", "HLL", 
        "HLL_UNION", "HOSTNAME", "HOTSPOT", "HOUR", "HUB", "IDENTIFIED", 
        "IF", "IGNORE", "IMMEDIATE", "IN", "INCREMENTAL", "INDEX", "INDEXES", 
        "INFILE", "INNER", "INSERT", "INSTALL", "INT", "INTEGER", "INTERMEDIATE", 
        "INTERSECT", "INTERVAL", "INTO", "INVERTED", "IPV4", "IPV6", "IS", 
        "IS_NOT_NULL_PRED", "IS_NULL_PRED", "ISNULL", "ISOLATION", "JOB", 
        "JOBS", "JOIN", "JSON", "JSONB", "KEY", "KEYS", "KILL", "LABEL", 
        "LARGEINT", "LAST", "LATERAL", "LDAP", "LDAP_ADMIN_PASSWORD", "LEFT", 
        "LESS", "LEVEL", "LIKE", "LIMIT", "LINES", "LINK", "LIST", "LOAD", 
        "LOCAL", "LOCALTIME", "LOCALTIMESTAMP", "LOCATION", "LOCK", "LOGICAL", 
        "LOW_PRIORITY", "MANUAL", "MAP", "MATCH", "MATCH_ALL", "MATCH_ANY", 
        "MATCH_PHRASE", "MATCH_PHRASE_EDGE", "MATCH_PHRASE_PREFIX", "MATCH_REGEXP", 
        "MATERIALIZED", "MAX", "MAXVALUE", "MEMO", "MERGE", "MIGRATE", "MIGRATIONS", 
        "MIN", "MINUS", "MINUTE", "MODIFY", "MONTH", "MTMV", "NAME", "NAMES", 
        "NATURAL", "NEGATIVE", "NEVER", "NEXT", "NGRAM_BF", "NO", "NON_NULLABLE", 
        "NOT", "NULL", "NULLS", "OBSERVER", "OF", "OFFSET", "ON", "ONLY", 
        "OPEN", "OPTIMIZED", "OR", "ORDER", "OUTER", "OUTFILE", "OVER", 
        "OVERWRITE", "PARAMETER", "PARSED", "PARTITION", "PARTITIONS", "PASSWORD", 
        "PASSWORD_EXPIRE", "PASSWORD_HISTORY", "PASSWORD_LOCK_TIME", "PASSWORD_REUSE", 
        "PATH", "PAUSE", "PERCENT", "PERIOD", "PERMISSIVE", "PHYSICAL", 
        "PI", "PLACEHOLDER", "PLAN", "PLAY", "PRIVILEGES", "PROCESS", "PLUGIN", 
        "PLUGINS", "POLICY", "PRECEDING", "PREPARE", "PRIMARY", "PROC", 
        "PROCEDURE", "PROCESSLIST", "PROFILE", "PROPERTIES", "PROPERTY", 
        "QUANTILE_STATE", "QUANTILE_UNION", "QUERY", "QUOTA", "QUALIFY", 
        "RANDOM", "RANGE", "READ", "REAL", "REBALANCE", "RECENT", "RECOVER", 
        "RECYCLE", "REFRESH", "REFERENCES", "REGEXP", "RELEASE", "RENAME", 
        "REPAIR", "REPEATABLE", "REPLACE", "REPLACE_IF_NOT_NULL", "REPLAYER", 
        "REPLICA", "REPOSITORIES", "REPOSITORY", "RESOURCE", "RESOURCES", 
        "RESTORE", "RESTRICTIVE", "RESUME", "RETURNS", "REVOKE", "REWRITTEN", 
        "RIGHT", "RLIKE", "ROLE", "ROLES", "ROLLBACK", "ROLLUP", "ROUTINE", 
        "ROW", "ROWS", "S3", "SAMPLE", "SCHEDULE", "SCHEDULER", "SCHEMA", 
        "SCHEMAS", "SECOND", "SELECT", "SEMI", "SEQUENCE", "SERIALIZABLE", 
        "SESSION", "SESSION_USER", "SET", "SETS", "SET_SESSION_VARIABLE", 
        "SHAPE", "SHOW", "SIGNED", "SKEW", "SMALLINT", "SNAPSHOT", "SONAME", 
        "SPLIT", "SQL", "SQL_BLOCK_RULE", "STAGE", "STAGES", "START", "STARTS", 
        "STATS", "STATUS", "STOP", "STORAGE", "STREAM", "STREAMING", "STRING", 
        "STRUCT", "SUBDATE", "SUM", "SUPERUSER", "SWITCH", "SYNC", "SYSTEM", 
        "TABLE", "TABLES", "TABLESAMPLE", "TABLET", "TABLETS", "TASK", "TASKS", 
        "TEMPORARY", "TERMINATED", "TEXT", "THAN", "THEN", "TIME", "TIMESTAMP", 
        "TIMESTAMPADD", "TIMESTAMPDIFF", "TINYINT", "TO", "TRANSACTION", 
        "TRASH", "TREE", "TRIGGERS", "TRIM", "TRUE", "TRUNCATE", "TYPE", 
        "TYPECAST", "TYPES", "UNBOUNDED", "UNCOMMITTED", "UNINSTALL", "UNION", 
        "UNIQUE", "UNLOCK", "UNSET", "UNSIGNED", "UP", "UPDATE", "USE", 
        "USER", "USING", "VALUE", "VALUES", "VARCHAR", "VARIABLE", "VARIABLES", 
        "VARIANT", "VAULT", "VAULTS", "VERBOSE", "VERSION", "VIEW", "VIEWS", 
        "WARM", "WARNINGS", "WEEK", "WHEN", "WHERE", "WHITELIST", "WITH", 
        "WORK", "WORKLOAD", "WRITE", "XOR", "YEAR", "EQ", "NSEQ", "NEQ", 
        "LT", "LTE", "GT", "GTE", "PLUS", "SUBTRACT", "ASTERISK", "SLASH", 
        "MOD", "TILDE", "AMPERSAND", "LOGICALAND", "LOGICALNOT", "PIPE", 
        "DOUBLEPIPES", "HAT", "COLON", "ARROW", "HINT_START", "HINT_END", 
        "COMMENT_START", "ATSIGN", "DOUBLEATSIGN", "STRING_LITERAL", "LEADING_STRING", 
        "BIGINT_LITERAL", "SMALLINT_LITERAL", "TINYINT_LITERAL", "INTEGER_VALUE", 
        "EXPONENT_VALUE", "DECIMAL_VALUE", "BIGDECIMAL_LITERAL", "IDENTIFIER", 
        "BACKQUOTED_IDENTIFIER", "DECIMAL_DIGITS", "EXPONENT", "DIGIT", 
        "LETTER", "SIMPLE_COMMENT", "BRACKETED_COMMENT", "FROM_DUAL", "WS", 
        "UNRECOGNIZED",
    ];


      /**
       * When true, parser should throw ParseExcetion for unclosed bracketed comment.
       */
      public has_unclosed_bracketed_comment = false;

      /**
       * Verify whether current token is a valid decimal token (which contains dot).
       * Returns true if the character that follows the token is not a digit or letter or underscore.
       *
       * For example:
       * For char stream "2.3", "2." is not a valid decimal token, because it is followed by digit '3'.
       * For char stream "2.3_", "2.3" is not a valid decimal token, because it is followed by '_'.
       * For char stream "2.3W", "2.3" is not a valid decimal token, because it is followed by 'W'.
       * For char stream "12.0D 34.E2+0.12 "  12.0D is a valid decimal token because it is followed
       * by a space. 34.E2 is a valid decimal token because it is followed by symbol '+'
       * which is not a digit or letter or underscore.
       */
      public isValidDecimal() {
        const nextChar = _input.LA(1);
        if (nextChar >= 'A' && nextChar <= 'Z' || nextChar >= '0' && nextChar <= '9' ||
          nextChar == '_') {
          return false;
        } else {
          return true;
        }
      }

      /**
       * This method will be called when the character stream ends and try to find out the
       * unclosed bracketed comment.
       * If the method be called, it means the end of the entire character stream match,
       * and we set the flag and fail later.
       */
      public markUnclosedComment() {
        has_unclosed_bracketed_comment = true;
      }


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, DorisLexer._ATN, DorisLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "DorisLexer.g4"; }

    public get literalNames(): (string | null)[] { return DorisLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return DorisLexer.symbolicNames; }
    public get ruleNames(): string[] { return DorisLexer.ruleNames; }

    public get serializedATN(): number[] { return DorisLexer._serializedATN; }

    public get channelNames(): string[] { return DorisLexer.channelNames; }

    public get modeNames(): string[] { return DorisLexer.modeNames; }

    public override action(localContext: antlr.RuleContext | null, ruleIndex: number, actionIndex: number): void {
        switch (ruleIndex) {
        case 553:
            this.BRACKETED_COMMENT_action(localContext, actionIndex);
            break;
        }
    }
    private BRACKETED_COMMENT_action(localContext: antlr.RuleContext | null, actionIndex: number): void {
        switch (actionIndex) {
        case 0:
            markUnclosedComment();
            break;
        }
    }
    public override sempred(localContext: antlr.RuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 543:
            return this.EXPONENT_VALUE_sempred(localContext, predIndex);
        case 544:
            return this.DECIMAL_VALUE_sempred(localContext, predIndex);
        case 545:
            return this.BIGDECIMAL_LITERAL_sempred(localContext, predIndex);
        }
        return true;
    }
    private EXPONENT_VALUE_sempred(localContext: antlr.RuleContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return isValidDecimal();
        }
        return true;
    }
    private DECIMAL_VALUE_sempred(localContext: antlr.RuleContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 1:
            return isValidDecimal();
        }
        return true;
    }
    private BIGDECIMAL_LITERAL_sempred(localContext: antlr.RuleContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 2:
            return isValidDecimal();
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,0,553,5386,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,
        5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
        2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,
        7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,
        2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,
        7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
        2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,
        7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,
        2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,
        7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,
        2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,
        7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,
        2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,
        7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,
        2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,
        7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,
        7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,
        2,109,7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,
        7,114,2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,
        2,120,7,120,2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,
        7,125,2,126,7,126,2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,
        2,131,7,131,2,132,7,132,2,133,7,133,2,134,7,134,2,135,7,135,2,136,
        7,136,2,137,7,137,2,138,7,138,2,139,7,139,2,140,7,140,2,141,7,141,
        2,142,7,142,2,143,7,143,2,144,7,144,2,145,7,145,2,146,7,146,2,147,
        7,147,2,148,7,148,2,149,7,149,2,150,7,150,2,151,7,151,2,152,7,152,
        2,153,7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,7,157,2,158,
        7,158,2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,7,163,
        2,164,7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,
        7,169,2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,
        2,175,7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,
        7,180,2,181,7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,
        2,186,7,186,2,187,7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,
        7,191,2,192,7,192,2,193,7,193,2,194,7,194,2,195,7,195,2,196,7,196,
        2,197,7,197,2,198,7,198,2,199,7,199,2,200,7,200,2,201,7,201,2,202,
        7,202,2,203,7,203,2,204,7,204,2,205,7,205,2,206,7,206,2,207,7,207,
        2,208,7,208,2,209,7,209,2,210,7,210,2,211,7,211,2,212,7,212,2,213,
        7,213,2,214,7,214,2,215,7,215,2,216,7,216,2,217,7,217,2,218,7,218,
        2,219,7,219,2,220,7,220,2,221,7,221,2,222,7,222,2,223,7,223,2,224,
        7,224,2,225,7,225,2,226,7,226,2,227,7,227,2,228,7,228,2,229,7,229,
        2,230,7,230,2,231,7,231,2,232,7,232,2,233,7,233,2,234,7,234,2,235,
        7,235,2,236,7,236,2,237,7,237,2,238,7,238,2,239,7,239,2,240,7,240,
        2,241,7,241,2,242,7,242,2,243,7,243,2,244,7,244,2,245,7,245,2,246,
        7,246,2,247,7,247,2,248,7,248,2,249,7,249,2,250,7,250,2,251,7,251,
        2,252,7,252,2,253,7,253,2,254,7,254,2,255,7,255,2,256,7,256,2,257,
        7,257,2,258,7,258,2,259,7,259,2,260,7,260,2,261,7,261,2,262,7,262,
        2,263,7,263,2,264,7,264,2,265,7,265,2,266,7,266,2,267,7,267,2,268,
        7,268,2,269,7,269,2,270,7,270,2,271,7,271,2,272,7,272,2,273,7,273,
        2,274,7,274,2,275,7,275,2,276,7,276,2,277,7,277,2,278,7,278,2,279,
        7,279,2,280,7,280,2,281,7,281,2,282,7,282,2,283,7,283,2,284,7,284,
        2,285,7,285,2,286,7,286,2,287,7,287,2,288,7,288,2,289,7,289,2,290,
        7,290,2,291,7,291,2,292,7,292,2,293,7,293,2,294,7,294,2,295,7,295,
        2,296,7,296,2,297,7,297,2,298,7,298,2,299,7,299,2,300,7,300,2,301,
        7,301,2,302,7,302,2,303,7,303,2,304,7,304,2,305,7,305,2,306,7,306,
        2,307,7,307,2,308,7,308,2,309,7,309,2,310,7,310,2,311,7,311,2,312,
        7,312,2,313,7,313,2,314,7,314,2,315,7,315,2,316,7,316,2,317,7,317,
        2,318,7,318,2,319,7,319,2,320,7,320,2,321,7,321,2,322,7,322,2,323,
        7,323,2,324,7,324,2,325,7,325,2,326,7,326,2,327,7,327,2,328,7,328,
        2,329,7,329,2,330,7,330,2,331,7,331,2,332,7,332,2,333,7,333,2,334,
        7,334,2,335,7,335,2,336,7,336,2,337,7,337,2,338,7,338,2,339,7,339,
        2,340,7,340,2,341,7,341,2,342,7,342,2,343,7,343,2,344,7,344,2,345,
        7,345,2,346,7,346,2,347,7,347,2,348,7,348,2,349,7,349,2,350,7,350,
        2,351,7,351,2,352,7,352,2,353,7,353,2,354,7,354,2,355,7,355,2,356,
        7,356,2,357,7,357,2,358,7,358,2,359,7,359,2,360,7,360,2,361,7,361,
        2,362,7,362,2,363,7,363,2,364,7,364,2,365,7,365,2,366,7,366,2,367,
        7,367,2,368,7,368,2,369,7,369,2,370,7,370,2,371,7,371,2,372,7,372,
        2,373,7,373,2,374,7,374,2,375,7,375,2,376,7,376,2,377,7,377,2,378,
        7,378,2,379,7,379,2,380,7,380,2,381,7,381,2,382,7,382,2,383,7,383,
        2,384,7,384,2,385,7,385,2,386,7,386,2,387,7,387,2,388,7,388,2,389,
        7,389,2,390,7,390,2,391,7,391,2,392,7,392,2,393,7,393,2,394,7,394,
        2,395,7,395,2,396,7,396,2,397,7,397,2,398,7,398,2,399,7,399,2,400,
        7,400,2,401,7,401,2,402,7,402,2,403,7,403,2,404,7,404,2,405,7,405,
        2,406,7,406,2,407,7,407,2,408,7,408,2,409,7,409,2,410,7,410,2,411,
        7,411,2,412,7,412,2,413,7,413,2,414,7,414,2,415,7,415,2,416,7,416,
        2,417,7,417,2,418,7,418,2,419,7,419,2,420,7,420,2,421,7,421,2,422,
        7,422,2,423,7,423,2,424,7,424,2,425,7,425,2,426,7,426,2,427,7,427,
        2,428,7,428,2,429,7,429,2,430,7,430,2,431,7,431,2,432,7,432,2,433,
        7,433,2,434,7,434,2,435,7,435,2,436,7,436,2,437,7,437,2,438,7,438,
        2,439,7,439,2,440,7,440,2,441,7,441,2,442,7,442,2,443,7,443,2,444,
        7,444,2,445,7,445,2,446,7,446,2,447,7,447,2,448,7,448,2,449,7,449,
        2,450,7,450,2,451,7,451,2,452,7,452,2,453,7,453,2,454,7,454,2,455,
        7,455,2,456,7,456,2,457,7,457,2,458,7,458,2,459,7,459,2,460,7,460,
        2,461,7,461,2,462,7,462,2,463,7,463,2,464,7,464,2,465,7,465,2,466,
        7,466,2,467,7,467,2,468,7,468,2,469,7,469,2,470,7,470,2,471,7,471,
        2,472,7,472,2,473,7,473,2,474,7,474,2,475,7,475,2,476,7,476,2,477,
        7,477,2,478,7,478,2,479,7,479,2,480,7,480,2,481,7,481,2,482,7,482,
        2,483,7,483,2,484,7,484,2,485,7,485,2,486,7,486,2,487,7,487,2,488,
        7,488,2,489,7,489,2,490,7,490,2,491,7,491,2,492,7,492,2,493,7,493,
        2,494,7,494,2,495,7,495,2,496,7,496,2,497,7,497,2,498,7,498,2,499,
        7,499,2,500,7,500,2,501,7,501,2,502,7,502,2,503,7,503,2,504,7,504,
        2,505,7,505,2,506,7,506,2,507,7,507,2,508,7,508,2,509,7,509,2,510,
        7,510,2,511,7,511,2,512,7,512,2,513,7,513,2,514,7,514,2,515,7,515,
        2,516,7,516,2,517,7,517,2,518,7,518,2,519,7,519,2,520,7,520,2,521,
        7,521,2,522,7,522,2,523,7,523,2,524,7,524,2,525,7,525,2,526,7,526,
        2,527,7,527,2,528,7,528,2,529,7,529,2,530,7,530,2,531,7,531,2,532,
        7,532,2,533,7,533,2,534,7,534,2,535,7,535,2,536,7,536,2,537,7,537,
        2,538,7,538,2,539,7,539,2,540,7,540,2,541,7,541,2,542,7,542,2,543,
        7,543,2,544,7,544,2,545,7,545,2,546,7,546,2,547,7,547,2,548,7,548,
        2,549,7,549,2,550,7,550,2,551,7,551,2,552,7,552,2,553,7,553,2,554,
        7,554,2,555,7,555,2,556,7,556,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,
        4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,
        1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,
        1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
        1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,14,
        1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,
        1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
        1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
        1,19,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,21,1,21,1,21,
        1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,
        1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,25,1,25,
        1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,
        1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,
        1,28,1,28,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,32,
        1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,34,
        1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,
        1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,
        1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,38,
        1,38,1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,39,1,40,
        1,40,1,40,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,
        1,41,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,44,
        1,44,1,44,1,44,1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,
        1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,47,1,47,1,47,1,47,1,47,1,47,
        1,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,
        1,48,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,
        1,49,1,50,1,50,1,50,1,50,1,50,1,50,1,51,1,51,1,51,1,51,1,51,1,51,
        1,51,1,52,1,52,1,52,1,52,1,52,1,53,1,53,1,53,1,53,1,53,1,53,1,53,
        1,53,1,54,1,54,1,54,1,54,1,54,1,54,1,55,1,55,1,55,1,55,1,55,1,55,
        1,55,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,57,1,57,1,57,1,57,
        1,57,1,57,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,59,1,59,1,59,
        1,59,1,59,1,60,1,60,1,60,1,61,1,61,1,61,1,61,1,61,1,61,1,62,1,62,
        1,62,1,62,1,62,1,62,1,62,1,63,1,63,1,63,1,63,1,63,1,64,1,64,1,64,
        1,64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,1,65,1,66,1,66,1,66,1,66,
        1,66,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,68,1,68,1,68,1,68,
        1,68,1,68,1,68,1,68,1,68,1,69,1,69,1,69,1,69,1,69,1,69,1,70,1,70,
        1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,3,70,1580,
        8,70,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,71,1,72,1,72,1,72,1,72,
        1,72,1,72,1,73,1,73,1,73,1,73,1,73,1,73,1,74,1,74,1,74,1,74,1,74,
        1,74,1,74,1,74,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,75,1,76,
        1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,77,1,77,1,77,1,77,1,77,1,77,
        1,77,1,77,1,77,1,77,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,79,
        1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,80,1,80,1,80,1,80,1,80,
        1,80,1,80,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,82,1,82,1,82,
        1,82,1,82,1,82,1,82,1,82,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,84,
        1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,85,1,85,1,85,1,85,
        1,85,1,85,1,85,1,85,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,1,86,
        1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,
        1,87,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,89,1,89,1,89,1,89,
        1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,90,1,90,1,90,1,90,1,90,1,90,
        1,90,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,92,
        1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,
        1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,94,1,94,
        1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,95,1,95,1,95,1,95,
        1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,96,1,96,1,96,1,96,1,96,
        1,96,1,96,1,96,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,
        1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,
        1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,
        1,98,1,98,1,98,1,98,1,98,1,99,1,99,1,99,1,99,1,99,1,99,1,100,1,100,
        1,100,1,100,1,100,1,100,1,100,1,101,1,101,1,101,1,101,1,101,1,101,
        1,101,1,101,1,101,1,102,1,102,1,102,1,102,1,102,1,103,1,103,1,103,
        1,103,1,103,1,103,1,104,1,104,1,104,1,104,1,104,1,105,1,105,1,105,
        1,105,1,105,1,105,1,105,1,105,1,106,1,106,1,106,1,106,1,106,1,106,
        1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,106,1,107,
        1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,
        1,107,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
        1,108,1,108,1,108,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,
        1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,110,
        1,110,1,110,1,110,1,110,1,110,1,110,1,110,1,110,1,110,1,110,1,110,
        1,110,1,111,1,111,1,111,1,111,1,111,1,112,1,112,1,112,1,112,1,112,
        1,112,1,112,1,112,1,112,1,113,1,113,1,113,1,113,1,113,1,113,1,113,
        1,113,1,113,1,113,1,114,1,114,1,114,1,114,1,114,1,115,1,115,1,115,
        1,115,1,115,1,115,1,115,1,115,1,115,1,116,1,116,1,116,1,116,1,116,
        1,116,1,116,1,116,1,116,1,116,1,117,1,117,1,117,1,117,1,117,1,117,
        1,117,1,117,1,117,1,117,1,118,1,118,1,118,1,118,1,118,1,118,1,118,
        1,118,1,118,1,118,1,118,1,119,1,119,1,119,1,119,1,119,1,119,1,119,
        1,119,1,119,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,120,1,121,
        1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,121,1,122,1,122,1,122,
        1,122,1,122,1,122,1,122,1,122,1,122,1,123,1,123,1,123,1,123,1,123,
        1,123,1,123,1,123,1,123,1,123,1,123,1,124,1,124,1,124,1,124,1,124,
        1,124,1,124,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,
        1,125,1,125,1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,127,1,127,
        1,127,1,127,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,
        1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,130,1,130,
        1,130,1,130,1,130,1,130,1,130,1,130,1,131,1,131,1,131,1,131,1,131,
        1,131,1,131,1,131,1,131,1,131,1,132,1,132,1,132,1,132,1,132,1,132,
        1,132,1,132,1,132,1,132,1,133,1,133,1,133,1,133,1,133,1,133,1,133,
        1,133,1,133,1,133,1,133,1,133,1,133,1,134,1,134,1,134,1,134,1,134,
        1,134,1,134,1,134,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,
        1,135,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,137,1,137,1,137,
        1,137,1,137,1,137,1,137,1,138,1,138,1,138,1,138,1,138,1,139,1,139,
        1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,140,1,140,1,140,1,140,
        1,140,1,140,1,140,1,140,1,140,1,141,1,141,1,141,1,141,1,141,1,141,
        1,141,1,141,1,141,1,141,1,142,1,142,1,142,1,142,1,142,1,143,1,143,
        1,143,1,143,1,143,1,143,1,143,1,143,1,143,1,144,1,144,1,144,1,144,
        1,144,1,144,1,144,1,144,1,144,1,144,1,144,1,145,1,145,1,145,1,145,
        1,145,1,145,1,145,1,145,1,145,1,145,1,145,1,145,1,145,1,146,1,146,
        1,146,1,146,1,146,1,146,1,146,1,146,1,146,1,146,1,146,1,146,1,147,
        1,147,1,147,1,147,1,147,1,147,1,147,1,147,1,147,1,147,1,147,1,147,
        1,147,1,148,1,148,1,148,1,148,1,149,1,149,1,149,1,150,1,150,1,150,
        1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,
        1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,150,1,151,
        1,151,1,151,1,151,1,151,1,151,1,151,1,152,1,152,1,152,1,152,1,152,
        1,153,1,153,1,153,1,153,1,153,1,153,1,154,1,154,1,154,1,154,1,154,
        1,155,1,155,1,155,1,155,1,155,1,156,1,156,1,156,1,156,1,156,1,156,
        1,156,1,156,1,156,1,156,1,157,1,157,1,157,1,157,1,157,1,157,1,157,
        1,157,1,158,1,158,1,159,1,159,1,159,1,159,1,159,1,160,1,160,1,160,
        1,160,1,160,1,160,1,160,1,161,1,161,1,161,1,161,1,161,1,161,1,161,
        1,161,1,161,1,161,1,161,1,162,1,162,1,162,1,162,1,162,1,162,1,162,
        1,162,1,162,1,162,1,162,1,162,1,163,1,163,1,163,1,163,1,164,1,164,
        1,164,1,164,1,164,1,165,1,165,1,165,1,165,1,165,1,165,1,165,1,166,
        1,166,1,166,1,166,1,166,1,166,1,166,1,166,1,167,1,167,1,167,1,167,
        1,167,1,167,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,169,1,169,
        1,169,1,169,1,169,1,169,1,169,1,170,1,170,1,170,1,170,1,170,1,170,
        1,171,1,171,1,171,1,171,1,171,1,171,1,171,1,172,1,172,1,172,1,172,
        1,172,1,172,1,172,1,172,1,173,1,173,1,173,1,173,1,173,1,173,1,173,
        1,173,1,174,1,174,1,174,1,174,1,174,1,174,1,174,1,175,1,175,1,175,
        1,175,1,175,1,175,1,175,1,175,1,176,1,176,1,176,1,176,1,176,1,176,
        1,176,1,176,1,177,1,177,1,177,1,177,1,177,1,177,1,177,1,178,1,178,
        1,178,1,178,1,178,1,178,1,178,1,178,1,178,1,179,1,179,1,179,1,179,
        1,179,1,179,1,179,1,179,1,179,1,180,1,180,1,180,1,180,1,180,1,180,
        1,180,1,180,1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,181,
        1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,181,1,181,
        1,181,1,181,1,182,1,182,1,182,1,182,1,182,1,182,1,183,1,183,1,183,
        1,183,1,183,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,184,1,185,
        1,185,1,185,1,185,1,185,1,185,1,185,1,186,1,186,1,186,1,186,1,186,
        1,187,1,187,1,187,1,187,1,187,1,187,1,187,1,188,1,188,1,188,1,188,
        1,188,1,188,1,189,1,189,1,189,1,189,1,189,1,189,1,190,1,190,1,190,
        1,190,1,190,1,190,1,190,1,190,1,190,1,191,1,191,1,191,1,191,1,191,
        1,191,1,191,1,191,1,191,1,191,1,192,1,192,1,192,1,192,1,193,1,193,
        1,193,1,193,1,193,1,193,1,193,1,193,1,194,1,194,1,194,1,194,1,194,
        1,194,1,195,1,195,1,195,1,195,1,195,1,195,1,195,1,196,1,196,1,196,
        1,196,1,196,1,197,1,197,1,197,1,197,1,197,1,198,1,198,1,198,1,198,
        1,198,1,198,1,198,1,198,1,198,1,199,1,199,1,199,1,199,1,199,1,199,
        1,199,1,199,1,199,1,199,1,200,1,200,1,200,1,200,1,200,1,201,1,201,
        1,201,1,201,1,201,1,201,1,201,1,201,1,201,1,202,1,202,1,202,1,202,
        1,202,1,202,1,202,1,202,1,202,1,202,1,203,1,203,1,203,1,203,1,203,
        1,203,1,203,1,203,1,203,1,203,1,204,1,204,1,204,1,204,1,204,1,204,
        1,204,1,204,1,205,1,205,1,205,1,205,1,205,1,205,1,205,1,206,1,206,
        1,206,1,206,1,206,1,206,1,207,1,207,1,207,1,207,1,207,1,207,1,207,
        1,208,1,208,1,208,1,208,1,208,1,208,1,209,1,209,1,209,1,209,1,209,
        1,209,1,210,1,210,1,210,1,210,1,210,1,210,1,210,1,210,1,210,1,211,
        1,211,1,211,1,211,1,211,1,211,1,211,1,212,1,212,1,212,1,212,1,212,
        1,213,1,213,1,213,1,213,1,213,1,213,1,213,1,214,1,214,1,214,1,214,
        1,214,1,215,1,215,1,215,1,215,1,215,1,216,1,216,1,216,1,216,1,216,
        1,216,1,216,1,216,1,216,1,216,1,217,1,217,1,217,1,217,1,218,1,218,
        1,218,1,218,1,218,1,218,1,218,1,218,1,218,1,218,1,219,1,219,1,219,
        1,219,1,219,1,219,1,219,1,219,1,219,1,220,1,220,1,220,1,220,1,220,
        1,220,1,220,1,220,1,221,1,221,1,221,1,221,1,221,1,222,1,222,1,222,
        1,222,1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,223,1,223,
        1,223,1,224,1,224,1,224,1,225,1,225,1,225,1,225,1,225,1,225,1,225,
        1,226,1,226,1,226,1,226,1,226,1,226,1,226,1,226,1,226,1,226,1,227,
        1,227,1,227,1,228,1,228,1,228,1,228,1,228,1,228,1,228,1,228,1,228,
        1,228,1,228,1,228,1,229,1,229,1,229,1,229,1,229,1,229,1,230,1,230,
        1,230,1,230,1,230,1,230,1,230,1,230,1,231,1,231,1,231,1,231,1,231,
        1,231,1,231,1,232,1,232,1,232,1,232,1,232,1,232,1,233,1,233,1,233,
        1,233,1,233,1,233,1,233,1,234,1,234,1,234,1,234,1,234,1,234,1,234,
        1,234,1,235,1,235,1,235,1,235,1,236,1,236,1,236,1,236,1,236,1,236,
        1,236,1,236,1,237,1,237,1,237,1,237,1,237,1,237,1,237,1,237,1,237,
        1,237,1,237,1,237,1,237,1,238,1,238,1,238,1,238,1,238,1,238,1,238,
        1,238,1,238,1,238,1,239,1,239,1,239,1,239,1,239,1,239,1,239,1,239,
        1,239,1,240,1,240,1,240,1,240,1,240,1,241,1,241,1,241,1,241,1,241,
        1,241,1,241,1,241,1,241,1,242,1,242,1,242,1,242,1,242,1,243,1,243,
        1,243,1,243,1,243,1,244,1,244,1,244,1,245,1,245,1,245,1,245,1,245,
        1,245,1,245,1,245,1,245,1,245,1,245,1,245,1,245,1,245,1,245,1,245,
        1,245,1,246,1,246,1,246,1,246,1,246,1,246,1,246,1,246,1,246,1,246,
        1,246,1,246,1,246,1,247,1,247,1,247,1,247,1,247,1,247,1,247,1,248,
        1,248,1,248,1,248,1,248,1,248,1,248,1,248,1,248,1,248,1,249,1,249,
        1,249,1,249,1,250,1,250,1,250,1,250,1,250,1,251,1,251,1,251,1,251,
        1,251,1,252,1,252,1,252,1,252,1,252,1,253,1,253,1,253,1,253,1,253,
        1,253,1,254,1,254,1,254,1,254,1,255,1,255,1,255,1,255,1,255,1,256,
        1,256,1,256,1,256,1,256,1,257,1,257,1,257,1,257,1,257,1,257,1,258,
        1,258,1,258,1,258,1,258,1,258,1,258,1,258,1,258,1,259,1,259,1,259,
        1,259,1,259,1,260,1,260,1,260,1,260,1,260,1,260,1,260,1,260,1,261,
        1,261,1,261,1,261,1,261,1,262,1,262,1,262,1,262,1,262,1,262,1,262,
        1,262,1,262,1,262,1,262,1,262,1,262,1,262,1,262,1,262,1,262,1,262,
        1,262,1,262,1,263,1,263,1,263,1,263,1,263,1,264,1,264,1,264,1,264,
        1,264,1,265,1,265,1,265,1,265,1,265,1,265,1,266,1,266,1,266,1,266,
        1,266,1,267,1,267,1,267,1,267,1,267,1,267,1,268,1,268,1,268,1,268,
        1,268,1,268,1,269,1,269,1,269,1,269,1,269,1,270,1,270,1,270,1,270,
        1,270,1,271,1,271,1,271,1,271,1,271,1,272,1,272,1,272,1,272,1,272,
        1,272,1,273,1,273,1,273,1,273,1,273,1,273,1,273,1,273,1,273,1,273,
        1,274,1,274,1,274,1,274,1,274,1,274,1,274,1,274,1,274,1,274,1,274,
        1,274,1,274,1,274,1,274,1,275,1,275,1,275,1,275,1,275,1,275,1,275,
        1,275,1,275,1,276,1,276,1,276,1,276,1,276,1,277,1,277,1,277,1,277,
        1,277,1,277,1,277,1,277,1,278,1,278,1,278,1,278,1,278,1,278,1,278,
        1,278,1,278,1,278,1,278,1,278,1,278,1,279,1,279,1,279,1,279,1,279,
        1,279,1,279,1,280,1,280,1,280,1,280,1,281,1,281,1,281,1,281,1,281,
        1,281,1,282,1,282,1,282,1,282,1,282,1,282,1,282,1,282,1,282,1,282,
        1,283,1,283,1,283,1,283,1,283,1,283,1,283,1,283,1,283,1,283,1,284,
        1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,
        1,284,1,285,1,285,1,285,1,285,1,285,1,285,1,285,1,285,1,285,1,285,
        1,285,1,285,1,285,1,285,1,285,1,285,1,285,1,285,1,286,1,286,1,286,
        1,286,1,286,1,286,1,286,1,286,1,286,1,286,1,286,1,286,1,286,1,286,
        1,286,1,286,1,286,1,286,1,286,1,286,1,287,1,287,1,287,1,287,1,287,
        1,287,1,287,1,287,1,287,1,287,1,287,1,287,1,287,1,288,1,288,1,288,
        1,288,1,288,1,288,1,288,1,288,1,288,1,288,1,288,1,288,1,288,1,289,
        1,289,1,289,1,289,1,290,1,290,1,290,1,290,1,290,1,290,1,290,1,290,
        1,290,1,291,1,291,1,291,1,291,1,291,1,292,1,292,1,292,1,292,1,292,
        1,292,1,293,1,293,1,293,1,293,1,293,1,293,1,293,1,293,1,294,1,294,
        1,294,1,294,1,294,1,294,1,294,1,294,1,294,1,294,1,294,1,295,1,295,
        1,295,1,295,1,296,1,296,1,296,1,296,1,296,1,296,1,297,1,297,1,297,
        1,297,1,297,1,297,1,297,1,298,1,298,1,298,1,298,1,298,1,298,1,298,
        1,299,1,299,1,299,1,299,1,299,1,299,1,300,1,300,1,300,1,300,1,300,
        1,301,1,301,1,301,1,301,1,301,1,302,1,302,1,302,1,302,1,302,1,302,
        1,303,1,303,1,303,1,303,1,303,1,303,1,303,1,303,1,304,1,304,1,304,
        1,304,1,304,1,304,1,304,1,304,1,304,1,305,1,305,1,305,1,305,1,305,
        1,305,1,306,1,306,1,306,1,306,1,306,1,307,1,307,1,307,1,307,1,307,
        1,307,1,307,1,307,1,307,1,308,1,308,1,308,1,309,1,309,1,309,1,309,
        1,309,1,309,1,309,1,309,1,309,1,309,1,309,1,309,1,309,1,310,1,310,
        1,310,1,310,1,311,1,311,1,311,1,311,1,311,1,312,1,312,1,312,1,312,
        1,312,1,312,1,313,1,313,1,313,1,313,1,313,1,313,1,313,1,313,1,313,
        1,314,1,314,1,314,1,315,1,315,1,315,1,315,1,315,1,315,1,315,1,316,
        1,316,1,316,1,317,1,317,1,317,1,317,1,317,1,318,1,318,1,318,1,318,
        1,318,1,319,1,319,1,319,1,319,1,319,1,319,1,319,1,319,1,319,1,319,
        1,320,1,320,1,320,1,321,1,321,1,321,1,321,1,321,1,321,1,322,1,322,
        1,322,1,322,1,322,1,322,1,323,1,323,1,323,1,323,1,323,1,323,1,323,
        1,323,1,324,1,324,1,324,1,324,1,324,1,325,1,325,1,325,1,325,1,325,
        1,325,1,325,1,325,1,325,1,325,1,326,1,326,1,326,1,326,1,326,1,326,
        1,326,1,326,1,326,1,326,1,327,1,327,1,327,1,327,1,327,1,327,1,327,
        1,328,1,328,1,328,1,328,1,328,1,328,1,328,1,328,1,328,1,328,1,329,
        1,329,1,329,1,329,1,329,1,329,1,329,1,329,1,329,1,329,1,329,1,330,
        1,330,1,330,1,330,1,330,1,330,1,330,1,330,1,330,1,331,1,331,1,331,
        1,331,1,331,1,331,1,331,1,331,1,331,1,331,1,331,1,331,1,331,1,331,
        1,331,1,331,1,332,1,332,1,332,1,332,1,332,1,332,1,332,1,332,1,332,
        1,332,1,332,1,332,1,332,1,332,1,332,1,332,1,332,1,333,1,333,1,333,
        1,333,1,333,1,333,1,333,1,333,1,333,1,333,1,333,1,333,1,333,1,333,
        1,333,1,333,1,333,1,333,1,333,1,334,1,334,1,334,1,334,1,334,1,334,
        1,334,1,334,1,334,1,334,1,334,1,334,1,334,1,334,1,334,1,335,1,335,
        1,335,1,335,1,335,1,336,1,336,1,336,1,336,1,336,1,336,1,337,1,337,
        1,337,1,337,1,337,1,337,1,337,1,337,1,338,1,338,1,338,1,338,1,338,
        1,338,1,338,1,339,1,339,1,339,1,339,1,339,1,339,1,339,1,339,1,339,
        1,339,1,339,1,340,1,340,1,340,1,340,1,340,1,340,1,340,1,340,1,340,
        1,341,1,341,1,341,1,342,1,342,1,343,1,343,1,343,1,343,1,343,1,344,
        1,344,1,344,1,344,1,344,1,345,1,345,1,345,1,345,1,345,1,345,1,345,
        1,345,1,345,1,345,1,345,1,346,1,346,1,346,1,346,1,346,1,346,1,346,
        1,346,1,347,1,347,1,347,1,347,1,347,1,347,1,347,1,348,1,348,1,348,
        1,348,1,348,1,348,1,348,1,348,1,349,1,349,1,349,1,349,1,349,1,349,
        1,349,1,350,1,350,1,350,1,350,1,350,1,350,1,350,1,350,1,350,1,350,
        1,351,1,351,1,351,1,351,1,351,1,351,1,351,1,351,1,352,1,352,1,352,
        1,352,1,352,1,352,1,352,1,352,1,353,1,353,1,353,1,353,1,353,1,354,
        1,354,1,354,1,354,1,354,1,354,1,354,1,354,1,354,1,354,1,355,1,355,
        1,355,1,355,1,355,1,355,1,355,1,355,1,355,1,355,1,355,1,355,1,356,
        1,356,1,356,1,356,1,356,1,356,1,356,1,356,1,357,1,357,1,357,1,357,
        1,357,1,357,1,357,1,357,1,357,1,357,1,357,1,358,1,358,1,358,1,358,
        1,358,1,358,1,358,1,358,1,358,1,359,1,359,1,359,1,359,1,359,1,359,
        1,359,1,359,1,359,1,359,1,359,1,359,1,359,1,359,1,359,1,360,1,360,
        1,360,1,360,1,360,1,360,1,360,1,360,1,360,1,360,1,360,1,360,1,360,
        1,360,1,360,1,361,1,361,1,361,1,361,1,361,1,361,1,362,1,362,1,362,
        1,362,1,362,1,362,1,363,1,363,1,363,1,363,1,363,1,363,1,363,1,363,
        1,364,1,364,1,364,1,364,1,364,1,364,1,364,1,365,1,365,1,365,1,365,
        1,365,1,365,1,366,1,366,1,366,1,366,1,366,1,367,1,367,1,367,1,367,
        1,367,1,368,1,368,1,368,1,368,1,368,1,368,1,368,1,368,1,368,1,368,
        1,369,1,369,1,369,1,369,1,369,1,369,1,369,1,370,1,370,1,370,1,370,
        1,370,1,370,1,370,1,370,1,371,1,371,1,371,1,371,1,371,1,371,1,371,
        1,371,1,372,1,372,1,372,1,372,1,372,1,372,1,372,1,372,1,373,1,373,
        1,373,1,373,1,373,1,373,1,373,1,373,1,373,1,373,1,373,1,374,1,374,
        1,374,1,374,1,374,1,374,1,374,1,375,1,375,1,375,1,375,1,375,1,375,
        1,375,1,375,1,376,1,376,1,376,1,376,1,376,1,376,1,376,1,377,1,377,
        1,377,1,377,1,377,1,377,1,377,1,378,1,378,1,378,1,378,1,378,1,378,
        1,378,1,378,1,378,1,378,1,378,1,379,1,379,1,379,1,379,1,379,1,379,
        1,379,1,379,1,380,1,380,1,380,1,380,1,380,1,380,1,380,1,380,1,380,
        1,380,1,380,1,380,1,380,1,380,1,380,1,380,1,380,1,380,1,380,1,380,
        1,381,1,381,1,381,1,381,1,381,1,381,1,381,1,381,1,381,1,382,1,382,
        1,382,1,382,1,382,1,382,1,382,1,382,1,383,1,383,1,383,1,383,1,383,
        1,383,1,383,1,383,1,383,1,383,1,383,1,383,1,383,1,384,1,384,1,384,
        1,384,1,384,1,384,1,384,1,384,1,384,1,384,1,384,1,385,1,385,1,385,
        1,385,1,385,1,385,1,385,1,385,1,385,1,386,1,386,1,386,1,386,1,386,
        1,386,1,386,1,386,1,386,1,386,1,387,1,387,1,387,1,387,1,387,1,387,
        1,387,1,387,1,388,1,388,1,388,1,388,1,388,1,388,1,388,1,388,1,388,
        1,388,1,388,1,388,1,389,1,389,1,389,1,389,1,389,1,389,1,389,1,390,
        1,390,1,390,1,390,1,390,1,390,1,390,1,390,1,391,1,391,1,391,1,391,
        1,391,1,391,1,391,1,392,1,392,1,392,1,392,1,392,1,392,1,392,1,392,
        1,392,1,392,1,393,1,393,1,393,1,393,1,393,1,393,1,394,1,394,1,394,
        1,394,1,394,1,394,1,395,1,395,1,395,1,395,1,395,1,396,1,396,1,396,
        1,396,1,396,1,396,1,397,1,397,1,397,1,397,1,397,1,397,1,397,1,397,
        1,397,1,398,1,398,1,398,1,398,1,398,1,398,1,398,1,399,1,399,1,399,
        1,399,1,399,1,399,1,399,1,399,1,400,1,400,1,400,1,400,1,401,1,401,
        1,401,1,401,1,401,1,402,1,402,1,402,1,403,1,403,1,403,1,403,1,403,
        1,403,1,403,1,404,1,404,1,404,1,404,1,404,1,404,1,404,1,404,1,404,
        1,405,1,405,1,405,1,405,1,405,1,405,1,405,1,405,1,405,1,405,1,406,
        1,406,1,406,1,406,1,406,1,406,1,406,1,407,1,407,1,407,1,407,1,407,
        1,407,1,407,1,407,1,408,1,408,1,408,1,408,1,408,1,408,1,408,1,409,
        1,409,1,409,1,409,1,409,1,409,1,409,1,410,1,410,1,410,1,410,1,410,
        1,411,1,411,1,411,1,411,1,411,1,411,1,411,1,411,1,411,1,412,1,412,
        1,412,1,412,1,412,1,412,1,412,1,412,1,412,1,412,1,412,1,412,1,412,
        1,413,1,413,1,413,1,413,1,413,1,413,1,413,1,413,1,414,1,414,1,414,
        1,414,1,414,1,414,1,414,1,414,1,414,1,414,1,414,1,414,1,414,1,415,
        1,415,1,415,1,415,1,416,1,416,1,416,1,416,1,416,1,417,1,417,1,417,
        1,417,1,417,1,417,1,417,1,417,1,417,1,417,1,417,1,417,1,417,1,417,
        1,417,1,417,1,417,1,417,1,417,1,417,1,417,1,418,1,418,1,418,1,418,
        1,418,1,418,1,419,1,419,1,419,1,419,1,419,1,420,1,420,1,420,1,420,
        1,420,1,420,1,420,1,421,1,421,1,421,1,421,1,421,1,422,1,422,1,422,
        1,422,1,422,1,422,1,422,1,422,1,422,1,423,1,423,1,423,1,423,1,423,
        1,423,1,423,1,423,1,423,1,424,1,424,1,424,1,424,1,424,1,424,1,424,
        1,425,1,425,1,425,1,425,1,425,1,425,1,426,1,426,1,426,1,426,1,427,
        1,427,1,427,1,427,1,427,1,427,1,427,1,427,1,427,1,427,1,427,1,427,
        1,427,1,427,1,427,1,428,1,428,1,428,1,428,1,428,1,428,1,429,1,429,
        1,429,1,429,1,429,1,429,1,429,1,430,1,430,1,430,1,430,1,430,1,430,
        1,431,1,431,1,431,1,431,1,431,1,431,1,431,1,432,1,432,1,432,1,432,
        1,432,1,432,1,433,1,433,1,433,1,433,1,433,1,433,1,433,1,434,1,434,
        1,434,1,434,1,434,1,435,1,435,1,435,1,435,1,435,1,435,1,435,1,435,
        1,436,1,436,1,436,1,436,1,436,1,436,1,436,1,437,1,437,1,437,1,437,
        1,437,1,437,1,437,1,437,1,437,1,437,1,438,1,438,1,438,1,438,1,438,
        1,438,1,438,1,439,1,439,1,439,1,439,1,439,1,439,1,439,1,440,1,440,
        1,440,1,440,1,440,1,440,1,440,1,440,1,441,1,441,1,441,1,441,1,442,
        1,442,1,442,1,442,1,442,1,442,1,442,1,442,1,442,1,442,1,443,1,443,
        1,443,1,443,1,443,1,443,1,443,1,444,1,444,1,444,1,444,1,444,1,445,
        1,445,1,445,1,445,1,445,1,445,1,445,1,446,1,446,1,446,1,446,1,446,
        1,446,1,447,1,447,1,447,1,447,1,447,1,447,1,447,1,448,1,448,1,448,
        1,448,1,448,1,448,1,448,1,448,1,448,1,448,1,448,1,448,1,449,1,449,
        1,449,1,449,1,449,1,449,1,449,1,450,1,450,1,450,1,450,1,450,1,450,
        1,450,1,450,1,451,1,451,1,451,1,451,1,451,1,452,1,452,1,452,1,452,
        1,452,1,452,1,453,1,453,1,453,1,453,1,453,1,453,1,453,1,453,1,453,
        1,453,1,454,1,454,1,454,1,454,1,454,1,454,1,454,1,454,1,454,1,454,
        1,454,1,455,1,455,1,455,1,455,1,455,1,456,1,456,1,456,1,456,1,456,
        1,457,1,457,1,457,1,457,1,457,1,458,1,458,1,458,1,458,1,458,1,459,
        1,459,1,459,1,459,1,459,1,459,1,459,1,459,1,459,1,459,1,460,1,460,
        1,460,1,460,1,460,1,460,1,460,1,460,1,460,1,460,1,460,1,460,1,460,
        1,461,1,461,1,461,1,461,1,461,1,461,1,461,1,461,1,461,1,461,1,461,
        1,461,1,461,1,461,1,462,1,462,1,462,1,462,1,462,1,462,1,462,1,462,
        1,463,1,463,1,463,1,464,1,464,1,464,1,464,1,464,1,464,1,464,1,464,
        1,464,1,464,1,464,1,464,1,465,1,465,1,465,1,465,1,465,1,465,1,466,
        1,466,1,466,1,466,1,466,1,467,1,467,1,467,1,467,1,467,1,467,1,467,
        1,467,1,467,1,468,1,468,1,468,1,468,1,468,1,469,1,469,1,469,1,469,
        1,469,1,470,1,470,1,470,1,470,1,470,1,470,1,470,1,470,1,470,1,471,
        1,471,1,471,1,471,1,471,1,472,1,472,1,472,1,472,1,472,1,472,1,472,
        1,472,1,472,1,472,1,473,1,473,1,473,1,473,1,473,1,473,1,474,1,474,
        1,474,1,474,1,474,1,474,1,474,1,474,1,474,1,474,1,475,1,475,1,475,
        1,475,1,475,1,475,1,475,1,475,1,475,1,475,1,475,1,475,1,476,1,476,
        1,476,1,476,1,476,1,476,1,476,1,476,1,476,1,476,1,477,1,477,1,477,
        1,477,1,477,1,477,1,478,1,478,1,478,1,478,1,478,1,478,1,478,1,479,
        1,479,1,479,1,479,1,479,1,479,1,479,1,480,1,480,1,480,1,480,1,480,
        1,480,1,481,1,481,1,481,1,481,1,481,1,481,1,481,1,481,1,481,1,482,
        1,482,1,482,1,483,1,483,1,483,1,483,1,483,1,483,1,483,1,484,1,484,
        1,484,1,484,1,485,1,485,1,485,1,485,1,485,1,486,1,486,1,486,1,486,
        1,486,1,486,1,487,1,487,1,487,1,487,1,487,1,487,1,488,1,488,1,488,
        1,488,1,488,1,488,1,488,1,489,1,489,1,489,1,489,1,489,1,489,1,489,
        1,489,1,490,1,490,1,490,1,490,1,490,1,490,1,490,1,490,1,490,1,491,
        1,491,1,491,1,491,1,491,1,491,1,491,1,491,1,491,1,491,1,492,1,492,
        1,492,1,492,1,492,1,492,1,492,1,492,1,493,1,493,1,493,1,493,1,493,
        1,493,1,494,1,494,1,494,1,494,1,494,1,494,1,494,1,495,1,495,1,495,
        1,495,1,495,1,495,1,495,1,495,1,496,1,496,1,496,1,496,1,496,1,496,
        1,496,1,496,1,497,1,497,1,497,1,497,1,497,1,498,1,498,1,498,1,498,
        1,498,1,498,1,499,1,499,1,499,1,499,1,499,1,500,1,500,1,500,1,500,
        1,500,1,500,1,500,1,500,1,500,1,501,1,501,1,501,1,501,1,501,1,502,
        1,502,1,502,1,502,1,502,1,503,1,503,1,503,1,503,1,503,1,503,1,504,
        1,504,1,504,1,504,1,504,1,504,1,504,1,504,1,504,1,504,1,505,1,505,
        1,505,1,505,1,505,1,506,1,506,1,506,1,506,1,506,1,507,1,507,1,507,
        1,507,1,507,1,507,1,507,1,507,1,507,1,508,1,508,1,508,1,508,1,508,
        1,508,1,509,1,509,1,509,1,509,1,510,1,510,1,510,1,510,1,510,1,511,
        1,511,1,511,3,511,5081,8,511,1,512,1,512,1,512,1,512,1,513,1,513,
        1,513,1,513,3,513,5091,8,513,1,514,1,514,1,515,1,515,1,515,1,515,
        3,515,5099,8,515,1,516,1,516,1,517,1,517,1,517,1,517,3,517,5107,
        8,517,1,518,1,518,1,519,1,519,1,520,1,520,1,521,1,521,1,522,1,522,
        1,523,1,523,1,524,1,524,1,525,1,525,1,525,1,526,1,526,1,527,1,527,
        1,528,1,528,1,528,1,529,1,529,1,530,1,530,1,531,1,531,1,531,1,532,
        1,532,1,532,1,532,1,533,1,533,1,533,1,534,1,534,1,534,1,535,1,535,
        1,536,1,536,1,536,1,537,1,537,1,537,1,537,1,537,1,537,5,537,5161,
        8,537,10,537,12,537,5164,9,537,1,537,1,537,1,537,1,537,1,537,1,537,
        1,537,5,537,5173,8,537,10,537,12,537,5176,9,537,1,537,1,537,1,537,
        1,537,1,537,5,537,5183,8,537,10,537,12,537,5186,9,537,1,537,1,537,
        1,537,1,537,1,537,5,537,5193,8,537,10,537,12,537,5196,9,537,1,537,
        3,537,5199,8,537,1,538,1,538,1,538,1,538,3,538,5205,8,538,1,539,
        4,539,5208,8,539,11,539,12,539,5209,1,539,1,539,1,540,4,540,5215,
        8,540,11,540,12,540,5216,1,540,1,540,1,541,4,541,5222,8,541,11,541,
        12,541,5223,1,541,1,541,1,542,4,542,5229,8,542,11,542,12,542,5230,
        1,543,4,543,5234,8,543,11,543,12,543,5235,1,543,1,543,1,543,1,543,
        1,543,1,543,3,543,5244,8,543,1,544,1,544,1,544,1,545,4,545,5250,
        8,545,11,545,12,545,5251,1,545,3,545,5255,8,545,1,545,1,545,1,545,
        1,545,1,545,3,545,5262,8,545,1,545,1,545,1,545,1,545,1,545,3,545,
        5269,8,545,1,546,1,546,1,546,4,546,5274,8,546,11,546,12,546,5275,
        1,547,1,547,1,547,1,547,5,547,5282,8,547,10,547,12,547,5285,9,547,
        1,547,1,547,1,548,4,548,5290,8,548,11,548,12,548,5291,1,548,1,548,
        5,548,5296,8,548,10,548,12,548,5299,9,548,1,548,1,548,4,548,5303,
        8,548,11,548,12,548,5304,3,548,5307,8,548,1,549,1,549,3,549,5311,
        8,549,1,549,4,549,5314,8,549,11,549,12,549,5315,1,550,1,550,1,551,
        1,551,1,551,1,551,3,551,5324,8,551,1,552,1,552,1,552,1,552,1,552,
        1,552,5,552,5332,8,552,10,552,12,552,5335,9,552,1,552,3,552,5338,
        8,552,1,552,3,552,5341,8,552,1,552,1,552,1,553,1,553,1,553,5,553,
        5348,8,553,10,553,12,553,5351,9,553,1,553,1,553,1,553,1,553,3,553,
        5357,8,553,1,553,1,553,1,554,1,554,1,554,1,554,1,554,1,554,4,554,
        5367,8,554,11,554,12,554,5368,1,554,1,554,1,554,1,554,1,554,1,554,
        1,554,1,555,4,555,5379,8,555,11,555,12,555,5380,1,555,1,555,1,556,
        1,556,1,5349,0,557,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,
        21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,
        43,22,45,23,47,24,49,25,51,26,53,27,55,28,57,29,59,30,61,31,63,32,
        65,33,67,34,69,35,71,36,73,37,75,38,77,39,79,40,81,41,83,42,85,43,
        87,44,89,45,91,46,93,47,95,48,97,49,99,50,101,51,103,52,105,53,107,
        54,109,55,111,56,113,57,115,58,117,59,119,60,121,61,123,62,125,63,
        127,64,129,65,131,66,133,67,135,68,137,69,139,70,141,71,143,72,145,
        73,147,74,149,75,151,76,153,77,155,78,157,79,159,80,161,81,163,82,
        165,83,167,84,169,85,171,86,173,87,175,88,177,89,179,90,181,91,183,
        92,185,93,187,94,189,95,191,96,193,97,195,98,197,99,199,100,201,
        101,203,102,205,103,207,104,209,105,211,106,213,107,215,108,217,
        109,219,110,221,111,223,112,225,113,227,114,229,115,231,116,233,
        117,235,118,237,119,239,120,241,121,243,122,245,123,247,124,249,
        125,251,126,253,127,255,128,257,129,259,130,261,131,263,132,265,
        133,267,134,269,135,271,136,273,137,275,138,277,139,279,140,281,
        141,283,142,285,143,287,144,289,145,291,146,293,147,295,148,297,
        149,299,150,301,151,303,152,305,153,307,154,309,155,311,156,313,
        157,315,158,317,159,319,160,321,161,323,162,325,163,327,164,329,
        165,331,166,333,167,335,168,337,169,339,170,341,171,343,172,345,
        173,347,174,349,175,351,176,353,177,355,178,357,179,359,180,361,
        181,363,182,365,183,367,184,369,185,371,186,373,187,375,188,377,
        189,379,190,381,191,383,192,385,193,387,194,389,195,391,196,393,
        197,395,198,397,199,399,200,401,201,403,202,405,203,407,204,409,
        205,411,206,413,207,415,208,417,209,419,210,421,211,423,212,425,
        213,427,214,429,215,431,216,433,217,435,218,437,219,439,220,441,
        221,443,222,445,223,447,224,449,225,451,226,453,227,455,228,457,
        229,459,230,461,231,463,232,465,233,467,234,469,235,471,236,473,
        237,475,238,477,239,479,240,481,241,483,242,485,243,487,244,489,
        245,491,246,493,247,495,248,497,249,499,250,501,251,503,252,505,
        253,507,254,509,255,511,256,513,257,515,258,517,259,519,260,521,
        261,523,262,525,263,527,264,529,265,531,266,533,267,535,268,537,
        269,539,270,541,271,543,272,545,273,547,274,549,275,551,276,553,
        277,555,278,557,279,559,280,561,281,563,282,565,283,567,284,569,
        285,571,286,573,287,575,288,577,289,579,290,581,291,583,292,585,
        293,587,294,589,295,591,296,593,297,595,298,597,299,599,300,601,
        301,603,302,605,303,607,304,609,305,611,306,613,307,615,308,617,
        309,619,310,621,311,623,312,625,313,627,314,629,315,631,316,633,
        317,635,318,637,319,639,320,641,321,643,322,645,323,647,324,649,
        325,651,326,653,327,655,328,657,329,659,330,661,331,663,332,665,
        333,667,334,669,335,671,336,673,337,675,338,677,339,679,340,681,
        341,683,342,685,343,687,344,689,345,691,346,693,347,695,348,697,
        349,699,350,701,351,703,352,705,353,707,354,709,355,711,356,713,
        357,715,358,717,359,719,360,721,361,723,362,725,363,727,364,729,
        365,731,366,733,367,735,368,737,369,739,370,741,371,743,372,745,
        373,747,374,749,375,751,376,753,377,755,378,757,379,759,380,761,
        381,763,382,765,383,767,384,769,385,771,386,773,387,775,388,777,
        389,779,390,781,391,783,392,785,393,787,394,789,395,791,396,793,
        397,795,398,797,399,799,400,801,401,803,402,805,403,807,404,809,
        405,811,406,813,407,815,408,817,409,819,410,821,411,823,412,825,
        413,827,414,829,415,831,416,833,417,835,418,837,419,839,420,841,
        421,843,422,845,423,847,424,849,425,851,426,853,427,855,428,857,
        429,859,430,861,431,863,432,865,433,867,434,869,435,871,436,873,
        437,875,438,877,439,879,440,881,441,883,442,885,443,887,444,889,
        445,891,446,893,447,895,448,897,449,899,450,901,451,903,452,905,
        453,907,454,909,455,911,456,913,457,915,458,917,459,919,460,921,
        461,923,462,925,463,927,464,929,465,931,466,933,467,935,468,937,
        469,939,470,941,471,943,472,945,473,947,474,949,475,951,476,953,
        477,955,478,957,479,959,480,961,481,963,482,965,483,967,484,969,
        485,971,486,973,487,975,488,977,489,979,490,981,491,983,492,985,
        493,987,494,989,495,991,496,993,497,995,498,997,499,999,500,1001,
        501,1003,502,1005,503,1007,504,1009,505,1011,506,1013,507,1015,508,
        1017,509,1019,510,1021,511,1023,512,1025,513,1027,514,1029,515,1031,
        516,1033,517,1035,518,1037,519,1039,520,1041,521,1043,522,1045,523,
        1047,524,1049,525,1051,526,1053,527,1055,528,1057,529,1059,530,1061,
        531,1063,532,1065,533,1067,534,1069,535,1071,536,1073,537,1075,538,
        1077,539,1079,540,1081,541,1083,542,1085,543,1087,544,1089,545,1091,
        546,1093,547,1095,548,1097,0,1099,0,1101,0,1103,0,1105,549,1107,
        550,1109,551,1111,552,1113,553,1,0,13,2,0,39,39,92,92,2,0,34,34,
        92,92,1,0,39,39,1,0,34,34,1,0,96,96,2,0,43,43,45,45,1,0,48,57,4,
        0,36,36,65,90,95,95,97,122,2,0,0,127,55296,56319,1,0,55296,56319,
        1,0,56320,57343,2,0,10,10,13,13,3,0,9,10,13,13,32,32,5432,0,1,1,
        0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,
        0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,
        0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,
        0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,
        0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,
        0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,
        0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,
        0,0,73,1,0,0,0,0,75,1,0,0,0,0,77,1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,
        0,0,83,1,0,0,0,0,85,1,0,0,0,0,87,1,0,0,0,0,89,1,0,0,0,0,91,1,0,0,
        0,0,93,1,0,0,0,0,95,1,0,0,0,0,97,1,0,0,0,0,99,1,0,0,0,0,101,1,0,
        0,0,0,103,1,0,0,0,0,105,1,0,0,0,0,107,1,0,0,0,0,109,1,0,0,0,0,111,
        1,0,0,0,0,113,1,0,0,0,0,115,1,0,0,0,0,117,1,0,0,0,0,119,1,0,0,0,
        0,121,1,0,0,0,0,123,1,0,0,0,0,125,1,0,0,0,0,127,1,0,0,0,0,129,1,
        0,0,0,0,131,1,0,0,0,0,133,1,0,0,0,0,135,1,0,0,0,0,137,1,0,0,0,0,
        139,1,0,0,0,0,141,1,0,0,0,0,143,1,0,0,0,0,145,1,0,0,0,0,147,1,0,
        0,0,0,149,1,0,0,0,0,151,1,0,0,0,0,153,1,0,0,0,0,155,1,0,0,0,0,157,
        1,0,0,0,0,159,1,0,0,0,0,161,1,0,0,0,0,163,1,0,0,0,0,165,1,0,0,0,
        0,167,1,0,0,0,0,169,1,0,0,0,0,171,1,0,0,0,0,173,1,0,0,0,0,175,1,
        0,0,0,0,177,1,0,0,0,0,179,1,0,0,0,0,181,1,0,0,0,0,183,1,0,0,0,0,
        185,1,0,0,0,0,187,1,0,0,0,0,189,1,0,0,0,0,191,1,0,0,0,0,193,1,0,
        0,0,0,195,1,0,0,0,0,197,1,0,0,0,0,199,1,0,0,0,0,201,1,0,0,0,0,203,
        1,0,0,0,0,205,1,0,0,0,0,207,1,0,0,0,0,209,1,0,0,0,0,211,1,0,0,0,
        0,213,1,0,0,0,0,215,1,0,0,0,0,217,1,0,0,0,0,219,1,0,0,0,0,221,1,
        0,0,0,0,223,1,0,0,0,0,225,1,0,0,0,0,227,1,0,0,0,0,229,1,0,0,0,0,
        231,1,0,0,0,0,233,1,0,0,0,0,235,1,0,0,0,0,237,1,0,0,0,0,239,1,0,
        0,0,0,241,1,0,0,0,0,243,1,0,0,0,0,245,1,0,0,0,0,247,1,0,0,0,0,249,
        1,0,0,0,0,251,1,0,0,0,0,253,1,0,0,0,0,255,1,0,0,0,0,257,1,0,0,0,
        0,259,1,0,0,0,0,261,1,0,0,0,0,263,1,0,0,0,0,265,1,0,0,0,0,267,1,
        0,0,0,0,269,1,0,0,0,0,271,1,0,0,0,0,273,1,0,0,0,0,275,1,0,0,0,0,
        277,1,0,0,0,0,279,1,0,0,0,0,281,1,0,0,0,0,283,1,0,0,0,0,285,1,0,
        0,0,0,287,1,0,0,0,0,289,1,0,0,0,0,291,1,0,0,0,0,293,1,0,0,0,0,295,
        1,0,0,0,0,297,1,0,0,0,0,299,1,0,0,0,0,301,1,0,0,0,0,303,1,0,0,0,
        0,305,1,0,0,0,0,307,1,0,0,0,0,309,1,0,0,0,0,311,1,0,0,0,0,313,1,
        0,0,0,0,315,1,0,0,0,0,317,1,0,0,0,0,319,1,0,0,0,0,321,1,0,0,0,0,
        323,1,0,0,0,0,325,1,0,0,0,0,327,1,0,0,0,0,329,1,0,0,0,0,331,1,0,
        0,0,0,333,1,0,0,0,0,335,1,0,0,0,0,337,1,0,0,0,0,339,1,0,0,0,0,341,
        1,0,0,0,0,343,1,0,0,0,0,345,1,0,0,0,0,347,1,0,0,0,0,349,1,0,0,0,
        0,351,1,0,0,0,0,353,1,0,0,0,0,355,1,0,0,0,0,357,1,0,0,0,0,359,1,
        0,0,0,0,361,1,0,0,0,0,363,1,0,0,0,0,365,1,0,0,0,0,367,1,0,0,0,0,
        369,1,0,0,0,0,371,1,0,0,0,0,373,1,0,0,0,0,375,1,0,0,0,0,377,1,0,
        0,0,0,379,1,0,0,0,0,381,1,0,0,0,0,383,1,0,0,0,0,385,1,0,0,0,0,387,
        1,0,0,0,0,389,1,0,0,0,0,391,1,0,0,0,0,393,1,0,0,0,0,395,1,0,0,0,
        0,397,1,0,0,0,0,399,1,0,0,0,0,401,1,0,0,0,0,403,1,0,0,0,0,405,1,
        0,0,0,0,407,1,0,0,0,0,409,1,0,0,0,0,411,1,0,0,0,0,413,1,0,0,0,0,
        415,1,0,0,0,0,417,1,0,0,0,0,419,1,0,0,0,0,421,1,0,0,0,0,423,1,0,
        0,0,0,425,1,0,0,0,0,427,1,0,0,0,0,429,1,0,0,0,0,431,1,0,0,0,0,433,
        1,0,0,0,0,435,1,0,0,0,0,437,1,0,0,0,0,439,1,0,0,0,0,441,1,0,0,0,
        0,443,1,0,0,0,0,445,1,0,0,0,0,447,1,0,0,0,0,449,1,0,0,0,0,451,1,
        0,0,0,0,453,1,0,0,0,0,455,1,0,0,0,0,457,1,0,0,0,0,459,1,0,0,0,0,
        461,1,0,0,0,0,463,1,0,0,0,0,465,1,0,0,0,0,467,1,0,0,0,0,469,1,0,
        0,0,0,471,1,0,0,0,0,473,1,0,0,0,0,475,1,0,0,0,0,477,1,0,0,0,0,479,
        1,0,0,0,0,481,1,0,0,0,0,483,1,0,0,0,0,485,1,0,0,0,0,487,1,0,0,0,
        0,489,1,0,0,0,0,491,1,0,0,0,0,493,1,0,0,0,0,495,1,0,0,0,0,497,1,
        0,0,0,0,499,1,0,0,0,0,501,1,0,0,0,0,503,1,0,0,0,0,505,1,0,0,0,0,
        507,1,0,0,0,0,509,1,0,0,0,0,511,1,0,0,0,0,513,1,0,0,0,0,515,1,0,
        0,0,0,517,1,0,0,0,0,519,1,0,0,0,0,521,1,0,0,0,0,523,1,0,0,0,0,525,
        1,0,0,0,0,527,1,0,0,0,0,529,1,0,0,0,0,531,1,0,0,0,0,533,1,0,0,0,
        0,535,1,0,0,0,0,537,1,0,0,0,0,539,1,0,0,0,0,541,1,0,0,0,0,543,1,
        0,0,0,0,545,1,0,0,0,0,547,1,0,0,0,0,549,1,0,0,0,0,551,1,0,0,0,0,
        553,1,0,0,0,0,555,1,0,0,0,0,557,1,0,0,0,0,559,1,0,0,0,0,561,1,0,
        0,0,0,563,1,0,0,0,0,565,1,0,0,0,0,567,1,0,0,0,0,569,1,0,0,0,0,571,
        1,0,0,0,0,573,1,0,0,0,0,575,1,0,0,0,0,577,1,0,0,0,0,579,1,0,0,0,
        0,581,1,0,0,0,0,583,1,0,0,0,0,585,1,0,0,0,0,587,1,0,0,0,0,589,1,
        0,0,0,0,591,1,0,0,0,0,593,1,0,0,0,0,595,1,0,0,0,0,597,1,0,0,0,0,
        599,1,0,0,0,0,601,1,0,0,0,0,603,1,0,0,0,0,605,1,0,0,0,0,607,1,0,
        0,0,0,609,1,0,0,0,0,611,1,0,0,0,0,613,1,0,0,0,0,615,1,0,0,0,0,617,
        1,0,0,0,0,619,1,0,0,0,0,621,1,0,0,0,0,623,1,0,0,0,0,625,1,0,0,0,
        0,627,1,0,0,0,0,629,1,0,0,0,0,631,1,0,0,0,0,633,1,0,0,0,0,635,1,
        0,0,0,0,637,1,0,0,0,0,639,1,0,0,0,0,641,1,0,0,0,0,643,1,0,0,0,0,
        645,1,0,0,0,0,647,1,0,0,0,0,649,1,0,0,0,0,651,1,0,0,0,0,653,1,0,
        0,0,0,655,1,0,0,0,0,657,1,0,0,0,0,659,1,0,0,0,0,661,1,0,0,0,0,663,
        1,0,0,0,0,665,1,0,0,0,0,667,1,0,0,0,0,669,1,0,0,0,0,671,1,0,0,0,
        0,673,1,0,0,0,0,675,1,0,0,0,0,677,1,0,0,0,0,679,1,0,0,0,0,681,1,
        0,0,0,0,683,1,0,0,0,0,685,1,0,0,0,0,687,1,0,0,0,0,689,1,0,0,0,0,
        691,1,0,0,0,0,693,1,0,0,0,0,695,1,0,0,0,0,697,1,0,0,0,0,699,1,0,
        0,0,0,701,1,0,0,0,0,703,1,0,0,0,0,705,1,0,0,0,0,707,1,0,0,0,0,709,
        1,0,0,0,0,711,1,0,0,0,0,713,1,0,0,0,0,715,1,0,0,0,0,717,1,0,0,0,
        0,719,1,0,0,0,0,721,1,0,0,0,0,723,1,0,0,0,0,725,1,0,0,0,0,727,1,
        0,0,0,0,729,1,0,0,0,0,731,1,0,0,0,0,733,1,0,0,0,0,735,1,0,0,0,0,
        737,1,0,0,0,0,739,1,0,0,0,0,741,1,0,0,0,0,743,1,0,0,0,0,745,1,0,
        0,0,0,747,1,0,0,0,0,749,1,0,0,0,0,751,1,0,0,0,0,753,1,0,0,0,0,755,
        1,0,0,0,0,757,1,0,0,0,0,759,1,0,0,0,0,761,1,0,0,0,0,763,1,0,0,0,
        0,765,1,0,0,0,0,767,1,0,0,0,0,769,1,0,0,0,0,771,1,0,0,0,0,773,1,
        0,0,0,0,775,1,0,0,0,0,777,1,0,0,0,0,779,1,0,0,0,0,781,1,0,0,0,0,
        783,1,0,0,0,0,785,1,0,0,0,0,787,1,0,0,0,0,789,1,0,0,0,0,791,1,0,
        0,0,0,793,1,0,0,0,0,795,1,0,0,0,0,797,1,0,0,0,0,799,1,0,0,0,0,801,
        1,0,0,0,0,803,1,0,0,0,0,805,1,0,0,0,0,807,1,0,0,0,0,809,1,0,0,0,
        0,811,1,0,0,0,0,813,1,0,0,0,0,815,1,0,0,0,0,817,1,0,0,0,0,819,1,
        0,0,0,0,821,1,0,0,0,0,823,1,0,0,0,0,825,1,0,0,0,0,827,1,0,0,0,0,
        829,1,0,0,0,0,831,1,0,0,0,0,833,1,0,0,0,0,835,1,0,0,0,0,837,1,0,
        0,0,0,839,1,0,0,0,0,841,1,0,0,0,0,843,1,0,0,0,0,845,1,0,0,0,0,847,
        1,0,0,0,0,849,1,0,0,0,0,851,1,0,0,0,0,853,1,0,0,0,0,855,1,0,0,0,
        0,857,1,0,0,0,0,859,1,0,0,0,0,861,1,0,0,0,0,863,1,0,0,0,0,865,1,
        0,0,0,0,867,1,0,0,0,0,869,1,0,0,0,0,871,1,0,0,0,0,873,1,0,0,0,0,
        875,1,0,0,0,0,877,1,0,0,0,0,879,1,0,0,0,0,881,1,0,0,0,0,883,1,0,
        0,0,0,885,1,0,0,0,0,887,1,0,0,0,0,889,1,0,0,0,0,891,1,0,0,0,0,893,
        1,0,0,0,0,895,1,0,0,0,0,897,1,0,0,0,0,899,1,0,0,0,0,901,1,0,0,0,
        0,903,1,0,0,0,0,905,1,0,0,0,0,907,1,0,0,0,0,909,1,0,0,0,0,911,1,
        0,0,0,0,913,1,0,0,0,0,915,1,0,0,0,0,917,1,0,0,0,0,919,1,0,0,0,0,
        921,1,0,0,0,0,923,1,0,0,0,0,925,1,0,0,0,0,927,1,0,0,0,0,929,1,0,
        0,0,0,931,1,0,0,0,0,933,1,0,0,0,0,935,1,0,0,0,0,937,1,0,0,0,0,939,
        1,0,0,0,0,941,1,0,0,0,0,943,1,0,0,0,0,945,1,0,0,0,0,947,1,0,0,0,
        0,949,1,0,0,0,0,951,1,0,0,0,0,953,1,0,0,0,0,955,1,0,0,0,0,957,1,
        0,0,0,0,959,1,0,0,0,0,961,1,0,0,0,0,963,1,0,0,0,0,965,1,0,0,0,0,
        967,1,0,0,0,0,969,1,0,0,0,0,971,1,0,0,0,0,973,1,0,0,0,0,975,1,0,
        0,0,0,977,1,0,0,0,0,979,1,0,0,0,0,981,1,0,0,0,0,983,1,0,0,0,0,985,
        1,0,0,0,0,987,1,0,0,0,0,989,1,0,0,0,0,991,1,0,0,0,0,993,1,0,0,0,
        0,995,1,0,0,0,0,997,1,0,0,0,0,999,1,0,0,0,0,1001,1,0,0,0,0,1003,
        1,0,0,0,0,1005,1,0,0,0,0,1007,1,0,0,0,0,1009,1,0,0,0,0,1011,1,0,
        0,0,0,1013,1,0,0,0,0,1015,1,0,0,0,0,1017,1,0,0,0,0,1019,1,0,0,0,
        0,1021,1,0,0,0,0,1023,1,0,0,0,0,1025,1,0,0,0,0,1027,1,0,0,0,0,1029,
        1,0,0,0,0,1031,1,0,0,0,0,1033,1,0,0,0,0,1035,1,0,0,0,0,1037,1,0,
        0,0,0,1039,1,0,0,0,0,1041,1,0,0,0,0,1043,1,0,0,0,0,1045,1,0,0,0,
        0,1047,1,0,0,0,0,1049,1,0,0,0,0,1051,1,0,0,0,0,1053,1,0,0,0,0,1055,
        1,0,0,0,0,1057,1,0,0,0,0,1059,1,0,0,0,0,1061,1,0,0,0,0,1063,1,0,
        0,0,0,1065,1,0,0,0,0,1067,1,0,0,0,0,1069,1,0,0,0,0,1071,1,0,0,0,
        0,1073,1,0,0,0,0,1075,1,0,0,0,0,1077,1,0,0,0,0,1079,1,0,0,0,0,1081,
        1,0,0,0,0,1083,1,0,0,0,0,1085,1,0,0,0,0,1087,1,0,0,0,0,1089,1,0,
        0,0,0,1091,1,0,0,0,0,1093,1,0,0,0,0,1095,1,0,0,0,0,1105,1,0,0,0,
        0,1107,1,0,0,0,0,1109,1,0,0,0,0,1111,1,0,0,0,0,1113,1,0,0,0,1,1115,
        1,0,0,0,3,1117,1,0,0,0,5,1119,1,0,0,0,7,1121,1,0,0,0,9,1123,1,0,
        0,0,11,1125,1,0,0,0,13,1129,1,0,0,0,15,1131,1,0,0,0,17,1133,1,0,
        0,0,19,1135,1,0,0,0,21,1137,1,0,0,0,23,1150,1,0,0,0,25,1165,1,0,
        0,0,27,1173,1,0,0,0,29,1177,1,0,0,0,31,1185,1,0,0,0,33,1191,1,0,
        0,0,35,1197,1,0,0,0,37,1207,1,0,0,0,39,1217,1,0,0,0,41,1223,1,0,
        0,0,43,1227,1,0,0,0,45,1233,1,0,0,0,47,1241,1,0,0,0,49,1250,1,0,
        0,0,51,1254,1,0,0,0,53,1259,1,0,0,0,55,1266,1,0,0,0,57,1272,1,0,
        0,0,59,1284,1,0,0,0,61,1287,1,0,0,0,63,1291,1,0,0,0,65,1294,1,0,
        0,0,67,1302,1,0,0,0,69,1307,1,0,0,0,71,1322,1,0,0,0,73,1329,1,0,
        0,0,75,1337,1,0,0,0,77,1346,1,0,0,0,79,1353,1,0,0,0,81,1359,1,0,
        0,0,83,1366,1,0,0,0,85,1374,1,0,0,0,87,1381,1,0,0,0,89,1385,1,0,
        0,0,91,1392,1,0,0,0,93,1399,1,0,0,0,95,1406,1,0,0,0,97,1413,1,0,
        0,0,99,1426,1,0,0,0,101,1439,1,0,0,0,103,1445,1,0,0,0,105,1452,1,
        0,0,0,107,1457,1,0,0,0,109,1465,1,0,0,0,111,1471,1,0,0,0,113,1478,
        1,0,0,0,115,1486,1,0,0,0,117,1492,1,0,0,0,119,1500,1,0,0,0,121,1505,
        1,0,0,0,123,1508,1,0,0,0,125,1514,1,0,0,0,127,1521,1,0,0,0,129,1526,
        1,0,0,0,131,1533,1,0,0,0,133,1538,1,0,0,0,135,1543,1,0,0,0,137,1551,
        1,0,0,0,139,1560,1,0,0,0,141,1579,1,0,0,0,143,1581,1,0,0,0,145,1589,
        1,0,0,0,147,1595,1,0,0,0,149,1601,1,0,0,0,151,1609,1,0,0,0,153,1618,
        1,0,0,0,155,1626,1,0,0,0,157,1636,1,0,0,0,159,1644,1,0,0,0,161,1653,
        1,0,0,0,163,1660,1,0,0,0,165,1668,1,0,0,0,167,1676,1,0,0,0,169,1683,
        1,0,0,0,171,1693,1,0,0,0,173,1701,1,0,0,0,175,1710,1,0,0,0,177,1724,
        1,0,0,0,179,1732,1,0,0,0,181,1743,1,0,0,0,183,1750,1,0,0,0,185,1761,
        1,0,0,0,187,1775,1,0,0,0,189,1786,1,0,0,0,191,1797,1,0,0,0,193,1809,
        1,0,0,0,195,1817,1,0,0,0,197,1853,1,0,0,0,199,1858,1,0,0,0,201,1864,
        1,0,0,0,203,1871,1,0,0,0,205,1880,1,0,0,0,207,1885,1,0,0,0,209,1891,
        1,0,0,0,211,1896,1,0,0,0,213,1904,1,0,0,0,215,1920,1,0,0,0,217,1933,
        1,0,0,0,219,1946,1,0,0,0,221,1964,1,0,0,0,223,1977,1,0,0,0,225,1982,
        1,0,0,0,227,1991,1,0,0,0,229,2001,1,0,0,0,231,2006,1,0,0,0,233,2015,
        1,0,0,0,235,2025,1,0,0,0,237,2035,1,0,0,0,239,2046,1,0,0,0,241,2055,
        1,0,0,0,243,2063,1,0,0,0,245,2072,1,0,0,0,247,2081,1,0,0,0,249,2092,
        1,0,0,0,251,2099,1,0,0,0,253,2110,1,0,0,0,255,2117,1,0,0,0,257,2121,
        1,0,0,0,259,2130,1,0,0,0,261,2139,1,0,0,0,263,2147,1,0,0,0,265,2157,
        1,0,0,0,267,2167,1,0,0,0,269,2180,1,0,0,0,271,2188,1,0,0,0,273,2197,
        1,0,0,0,275,2204,1,0,0,0,277,2211,1,0,0,0,279,2216,1,0,0,0,281,2225,
        1,0,0,0,283,2234,1,0,0,0,285,2244,1,0,0,0,287,2249,1,0,0,0,289,2258,
        1,0,0,0,291,2269,1,0,0,0,293,2282,1,0,0,0,295,2294,1,0,0,0,297,2307,
        1,0,0,0,299,2311,1,0,0,0,301,2314,1,0,0,0,303,2338,1,0,0,0,305,2345,
        1,0,0,0,307,2350,1,0,0,0,309,2356,1,0,0,0,311,2361,1,0,0,0,313,2366,
        1,0,0,0,315,2376,1,0,0,0,317,2384,1,0,0,0,319,2386,1,0,0,0,321,2391,
        1,0,0,0,323,2398,1,0,0,0,325,2409,1,0,0,0,327,2421,1,0,0,0,329,2425,
        1,0,0,0,331,2430,1,0,0,0,333,2437,1,0,0,0,335,2445,1,0,0,0,337,2451,
        1,0,0,0,339,2458,1,0,0,0,341,2465,1,0,0,0,343,2471,1,0,0,0,345,2478,
        1,0,0,0,347,2486,1,0,0,0,349,2494,1,0,0,0,351,2501,1,0,0,0,353,2509,
        1,0,0,0,355,2517,1,0,0,0,357,2524,1,0,0,0,359,2533,1,0,0,0,361,2542,
        1,0,0,0,363,2550,1,0,0,0,365,2572,1,0,0,0,367,2578,1,0,0,0,369,2583,
        1,0,0,0,371,2591,1,0,0,0,373,2598,1,0,0,0,375,2603,1,0,0,0,377,2610,
        1,0,0,0,379,2616,1,0,0,0,381,2622,1,0,0,0,383,2631,1,0,0,0,385,2641,
        1,0,0,0,387,2645,1,0,0,0,389,2653,1,0,0,0,391,2659,1,0,0,0,393,2666,
        1,0,0,0,395,2671,1,0,0,0,397,2676,1,0,0,0,399,2685,1,0,0,0,401,2695,
        1,0,0,0,403,2700,1,0,0,0,405,2709,1,0,0,0,407,2719,1,0,0,0,409,2729,
        1,0,0,0,411,2737,1,0,0,0,413,2744,1,0,0,0,415,2750,1,0,0,0,417,2757,
        1,0,0,0,419,2763,1,0,0,0,421,2769,1,0,0,0,423,2778,1,0,0,0,425,2785,
        1,0,0,0,427,2790,1,0,0,0,429,2797,1,0,0,0,431,2802,1,0,0,0,433,2807,
        1,0,0,0,435,2817,1,0,0,0,437,2821,1,0,0,0,439,2831,1,0,0,0,441,2840,
        1,0,0,0,443,2848,1,0,0,0,445,2853,1,0,0,0,447,2857,1,0,0,0,449,2868,
        1,0,0,0,451,2871,1,0,0,0,453,2878,1,0,0,0,455,2888,1,0,0,0,457,2891,
        1,0,0,0,459,2903,1,0,0,0,461,2909,1,0,0,0,463,2917,1,0,0,0,465,2924,
        1,0,0,0,467,2930,1,0,0,0,469,2937,1,0,0,0,471,2945,1,0,0,0,473,2949,
        1,0,0,0,475,2957,1,0,0,0,477,2970,1,0,0,0,479,2980,1,0,0,0,481,2989,
        1,0,0,0,483,2994,1,0,0,0,485,3003,1,0,0,0,487,3008,1,0,0,0,489,3013,
        1,0,0,0,491,3016,1,0,0,0,493,3033,1,0,0,0,495,3046,1,0,0,0,497,3053,
        1,0,0,0,499,3063,1,0,0,0,501,3067,1,0,0,0,503,3072,1,0,0,0,505,3077,
        1,0,0,0,507,3082,1,0,0,0,509,3088,1,0,0,0,511,3092,1,0,0,0,513,3097,
        1,0,0,0,515,3102,1,0,0,0,517,3108,1,0,0,0,519,3117,1,0,0,0,521,3122,
        1,0,0,0,523,3130,1,0,0,0,525,3135,1,0,0,0,527,3155,1,0,0,0,529,3160,
        1,0,0,0,531,3165,1,0,0,0,533,3171,1,0,0,0,535,3176,1,0,0,0,537,3182,
        1,0,0,0,539,3188,1,0,0,0,541,3193,1,0,0,0,543,3198,1,0,0,0,545,3203,
        1,0,0,0,547,3209,1,0,0,0,549,3219,1,0,0,0,551,3234,1,0,0,0,553,3243,
        1,0,0,0,555,3248,1,0,0,0,557,3256,1,0,0,0,559,3269,1,0,0,0,561,3276,
        1,0,0,0,563,3280,1,0,0,0,565,3286,1,0,0,0,567,3296,1,0,0,0,569,3306,
        1,0,0,0,571,3319,1,0,0,0,573,3337,1,0,0,0,575,3357,1,0,0,0,577,3370,
        1,0,0,0,579,3383,1,0,0,0,581,3387,1,0,0,0,583,3396,1,0,0,0,585,3401,
        1,0,0,0,587,3407,1,0,0,0,589,3415,1,0,0,0,591,3426,1,0,0,0,593,3430,
        1,0,0,0,595,3436,1,0,0,0,597,3443,1,0,0,0,599,3450,1,0,0,0,601,3456,
        1,0,0,0,603,3461,1,0,0,0,605,3466,1,0,0,0,607,3472,1,0,0,0,609,3480,
        1,0,0,0,611,3489,1,0,0,0,613,3495,1,0,0,0,615,3500,1,0,0,0,617,3509,
        1,0,0,0,619,3512,1,0,0,0,621,3525,1,0,0,0,623,3529,1,0,0,0,625,3534,
        1,0,0,0,627,3540,1,0,0,0,629,3549,1,0,0,0,631,3552,1,0,0,0,633,3559,
        1,0,0,0,635,3562,1,0,0,0,637,3567,1,0,0,0,639,3572,1,0,0,0,641,3582,
        1,0,0,0,643,3585,1,0,0,0,645,3591,1,0,0,0,647,3597,1,0,0,0,649,3605,
        1,0,0,0,651,3610,1,0,0,0,653,3620,1,0,0,0,655,3630,1,0,0,0,657,3637,
        1,0,0,0,659,3647,1,0,0,0,661,3658,1,0,0,0,663,3667,1,0,0,0,665,3683,
        1,0,0,0,667,3700,1,0,0,0,669,3719,1,0,0,0,671,3734,1,0,0,0,673,3739,
        1,0,0,0,675,3745,1,0,0,0,677,3753,1,0,0,0,679,3760,1,0,0,0,681,3771,
        1,0,0,0,683,3780,1,0,0,0,685,3783,1,0,0,0,687,3785,1,0,0,0,689,3790,
        1,0,0,0,691,3795,1,0,0,0,693,3806,1,0,0,0,695,3814,1,0,0,0,697,3821,
        1,0,0,0,699,3829,1,0,0,0,701,3836,1,0,0,0,703,3846,1,0,0,0,705,3854,
        1,0,0,0,707,3862,1,0,0,0,709,3867,1,0,0,0,711,3877,1,0,0,0,713,3889,
        1,0,0,0,715,3897,1,0,0,0,717,3908,1,0,0,0,719,3917,1,0,0,0,721,3932,
        1,0,0,0,723,3947,1,0,0,0,725,3953,1,0,0,0,727,3959,1,0,0,0,729,3967,
        1,0,0,0,731,3974,1,0,0,0,733,3980,1,0,0,0,735,3985,1,0,0,0,737,3990,
        1,0,0,0,739,4000,1,0,0,0,741,4007,1,0,0,0,743,4015,1,0,0,0,745,4023,
        1,0,0,0,747,4031,1,0,0,0,749,4042,1,0,0,0,751,4049,1,0,0,0,753,4057,
        1,0,0,0,755,4064,1,0,0,0,757,4071,1,0,0,0,759,4082,1,0,0,0,761,4090,
        1,0,0,0,763,4110,1,0,0,0,765,4119,1,0,0,0,767,4127,1,0,0,0,769,4140,
        1,0,0,0,771,4151,1,0,0,0,773,4160,1,0,0,0,775,4170,1,0,0,0,777,4178,
        1,0,0,0,779,4190,1,0,0,0,781,4197,1,0,0,0,783,4205,1,0,0,0,785,4212,
        1,0,0,0,787,4222,1,0,0,0,789,4228,1,0,0,0,791,4234,1,0,0,0,793,4239,
        1,0,0,0,795,4245,1,0,0,0,797,4254,1,0,0,0,799,4261,1,0,0,0,801,4269,
        1,0,0,0,803,4273,1,0,0,0,805,4278,1,0,0,0,807,4281,1,0,0,0,809,4288,
        1,0,0,0,811,4297,1,0,0,0,813,4307,1,0,0,0,815,4314,1,0,0,0,817,4322,
        1,0,0,0,819,4329,1,0,0,0,821,4336,1,0,0,0,823,4341,1,0,0,0,825,4350,
        1,0,0,0,827,4363,1,0,0,0,829,4371,1,0,0,0,831,4384,1,0,0,0,833,4388,
        1,0,0,0,835,4393,1,0,0,0,837,4414,1,0,0,0,839,4420,1,0,0,0,841,4425,
        1,0,0,0,843,4432,1,0,0,0,845,4437,1,0,0,0,847,4446,1,0,0,0,849,4455,
        1,0,0,0,851,4462,1,0,0,0,853,4468,1,0,0,0,855,4472,1,0,0,0,857,4487,
        1,0,0,0,859,4493,1,0,0,0,861,4500,1,0,0,0,863,4506,1,0,0,0,865,4513,
        1,0,0,0,867,4519,1,0,0,0,869,4526,1,0,0,0,871,4531,1,0,0,0,873,4539,
        1,0,0,0,875,4546,1,0,0,0,877,4556,1,0,0,0,879,4563,1,0,0,0,881,4570,
        1,0,0,0,883,4578,1,0,0,0,885,4582,1,0,0,0,887,4592,1,0,0,0,889,4599,
        1,0,0,0,891,4604,1,0,0,0,893,4611,1,0,0,0,895,4617,1,0,0,0,897,4624,
        1,0,0,0,899,4636,1,0,0,0,901,4643,1,0,0,0,903,4651,1,0,0,0,905,4656,
        1,0,0,0,907,4662,1,0,0,0,909,4672,1,0,0,0,911,4683,1,0,0,0,913,4688,
        1,0,0,0,915,4693,1,0,0,0,917,4698,1,0,0,0,919,4703,1,0,0,0,921,4713,
        1,0,0,0,923,4726,1,0,0,0,925,4740,1,0,0,0,927,4748,1,0,0,0,929,4751,
        1,0,0,0,931,4763,1,0,0,0,933,4769,1,0,0,0,935,4774,1,0,0,0,937,4783,
        1,0,0,0,939,4788,1,0,0,0,941,4793,1,0,0,0,943,4802,1,0,0,0,945,4807,
        1,0,0,0,947,4817,1,0,0,0,949,4823,1,0,0,0,951,4833,1,0,0,0,953,4845,
        1,0,0,0,955,4855,1,0,0,0,957,4861,1,0,0,0,959,4868,1,0,0,0,961,4875,
        1,0,0,0,963,4881,1,0,0,0,965,4890,1,0,0,0,967,4893,1,0,0,0,969,4900,
        1,0,0,0,971,4904,1,0,0,0,973,4909,1,0,0,0,975,4915,1,0,0,0,977,4921,
        1,0,0,0,979,4928,1,0,0,0,981,4936,1,0,0,0,983,4945,1,0,0,0,985,4955,
        1,0,0,0,987,4963,1,0,0,0,989,4969,1,0,0,0,991,4976,1,0,0,0,993,4984,
        1,0,0,0,995,4992,1,0,0,0,997,4997,1,0,0,0,999,5003,1,0,0,0,1001,
        5008,1,0,0,0,1003,5017,1,0,0,0,1005,5022,1,0,0,0,1007,5027,1,0,0,
        0,1009,5033,1,0,0,0,1011,5043,1,0,0,0,1013,5048,1,0,0,0,1015,5053,
        1,0,0,0,1017,5062,1,0,0,0,1019,5068,1,0,0,0,1021,5072,1,0,0,0,1023,
        5080,1,0,0,0,1025,5082,1,0,0,0,1027,5090,1,0,0,0,1029,5092,1,0,0,
        0,1031,5098,1,0,0,0,1033,5100,1,0,0,0,1035,5106,1,0,0,0,1037,5108,
        1,0,0,0,1039,5110,1,0,0,0,1041,5112,1,0,0,0,1043,5114,1,0,0,0,1045,
        5116,1,0,0,0,1047,5118,1,0,0,0,1049,5120,1,0,0,0,1051,5122,1,0,0,
        0,1053,5125,1,0,0,0,1055,5127,1,0,0,0,1057,5129,1,0,0,0,1059,5132,
        1,0,0,0,1061,5134,1,0,0,0,1063,5136,1,0,0,0,1065,5139,1,0,0,0,1067,
        5143,1,0,0,0,1069,5146,1,0,0,0,1071,5149,1,0,0,0,1073,5151,1,0,0,
        0,1075,5198,1,0,0,0,1077,5204,1,0,0,0,1079,5207,1,0,0,0,1081,5214,
        1,0,0,0,1083,5221,1,0,0,0,1085,5228,1,0,0,0,1087,5243,1,0,0,0,1089,
        5245,1,0,0,0,1091,5268,1,0,0,0,1093,5273,1,0,0,0,1095,5277,1,0,0,
        0,1097,5306,1,0,0,0,1099,5308,1,0,0,0,1101,5317,1,0,0,0,1103,5323,
        1,0,0,0,1105,5325,1,0,0,0,1107,5344,1,0,0,0,1109,5360,1,0,0,0,1111,
        5378,1,0,0,0,1113,5384,1,0,0,0,1115,1116,5,59,0,0,1116,2,1,0,0,0,
        1117,1118,5,40,0,0,1118,4,1,0,0,0,1119,1120,5,41,0,0,1120,6,1,0,
        0,0,1121,1122,5,44,0,0,1122,8,1,0,0,0,1123,1124,5,46,0,0,1124,10,
        1,0,0,0,1125,1126,5,46,0,0,1126,1127,5,46,0,0,1127,1128,5,46,0,0,
        1128,12,1,0,0,0,1129,1130,5,91,0,0,1130,14,1,0,0,0,1131,1132,5,93,
        0,0,1132,16,1,0,0,0,1133,1134,5,123,0,0,1134,18,1,0,0,0,1135,1136,
        5,125,0,0,1136,20,1,0,0,0,1137,1138,5,65,0,0,1138,1139,5,67,0,0,
        1139,1140,5,67,0,0,1140,1141,5,79,0,0,1141,1142,5,85,0,0,1142,1143,
        5,78,0,0,1143,1144,5,84,0,0,1144,1145,5,95,0,0,1145,1146,5,76,0,
        0,1146,1147,5,79,0,0,1147,1148,5,67,0,0,1148,1149,5,75,0,0,1149,
        22,1,0,0,0,1150,1151,5,65,0,0,1151,1152,5,67,0,0,1152,1153,5,67,
        0,0,1153,1154,5,79,0,0,1154,1155,5,85,0,0,1155,1156,5,78,0,0,1156,
        1157,5,84,0,0,1157,1158,5,95,0,0,1158,1159,5,85,0,0,1159,1160,5,
        78,0,0,1160,1161,5,76,0,0,1161,1162,5,79,0,0,1162,1163,5,67,0,0,
        1163,1164,5,75,0,0,1164,24,1,0,0,0,1165,1166,5,65,0,0,1166,1167,
        5,67,0,0,1167,1168,5,84,0,0,1168,1169,5,73,0,0,1169,1170,5,79,0,
        0,1170,1171,5,78,0,0,1171,1172,5,83,0,0,1172,26,1,0,0,0,1173,1174,
        5,65,0,0,1174,1175,5,68,0,0,1175,1176,5,68,0,0,1176,28,1,0,0,0,1177,
        1178,5,65,0,0,1178,1179,5,68,0,0,1179,1180,5,68,0,0,1180,1181,5,
        68,0,0,1181,1182,5,65,0,0,1182,1183,5,84,0,0,1183,1184,5,69,0,0,
        1184,30,1,0,0,0,1185,1186,5,65,0,0,1186,1187,5,68,0,0,1187,1188,
        5,77,0,0,1188,1189,5,73,0,0,1189,1190,5,78,0,0,1190,32,1,0,0,0,1191,
        1192,5,65,0,0,1192,1193,5,70,0,0,1193,1194,5,84,0,0,1194,1195,5,
        69,0,0,1195,1196,5,82,0,0,1196,34,1,0,0,0,1197,1198,5,65,0,0,1198,
        1199,5,71,0,0,1199,1200,5,71,0,0,1200,1201,5,95,0,0,1201,1202,5,
        83,0,0,1202,1203,5,84,0,0,1203,1204,5,65,0,0,1204,1205,5,84,0,0,
        1205,1206,5,69,0,0,1206,36,1,0,0,0,1207,1208,5,65,0,0,1208,1209,
        5,71,0,0,1209,1210,5,71,0,0,1210,1211,5,82,0,0,1211,1212,5,69,0,
        0,1212,1213,5,71,0,0,1213,1214,5,65,0,0,1214,1215,5,84,0,0,1215,
        1216,5,69,0,0,1216,38,1,0,0,0,1217,1218,5,65,0,0,1218,1219,5,76,
        0,0,1219,1220,5,73,0,0,1220,1221,5,65,0,0,1221,1222,5,83,0,0,1222,
        40,1,0,0,0,1223,1224,5,65,0,0,1224,1225,5,76,0,0,1225,1226,5,76,
        0,0,1226,42,1,0,0,0,1227,1228,5,65,0,0,1228,1229,5,76,0,0,1229,1230,
        5,84,0,0,1230,1231,5,69,0,0,1231,1232,5,82,0,0,1232,44,1,0,0,0,1233,
        1234,5,65,0,0,1234,1235,5,78,0,0,1235,1236,5,65,0,0,1236,1237,5,
        76,0,0,1237,1238,5,89,0,0,1238,1239,5,90,0,0,1239,1240,5,69,0,0,
        1240,46,1,0,0,0,1241,1242,5,65,0,0,1242,1243,5,78,0,0,1243,1244,
        5,65,0,0,1244,1245,5,76,0,0,1245,1246,5,89,0,0,1246,1247,5,90,0,
        0,1247,1248,5,69,0,0,1248,1249,5,68,0,0,1249,48,1,0,0,0,1250,1251,
        5,65,0,0,1251,1252,5,78,0,0,1252,1253,5,68,0,0,1253,50,1,0,0,0,1254,
        1255,5,65,0,0,1255,1256,5,78,0,0,1256,1257,5,84,0,0,1257,1258,5,
        73,0,0,1258,52,1,0,0,0,1259,1260,5,65,0,0,1260,1261,5,80,0,0,1261,
        1262,5,80,0,0,1262,1263,5,69,0,0,1263,1264,5,78,0,0,1264,1265,5,
        68,0,0,1265,54,1,0,0,0,1266,1267,5,65,0,0,1267,1268,5,82,0,0,1268,
        1269,5,82,0,0,1269,1270,5,65,0,0,1270,1271,5,89,0,0,1271,56,1,0,
        0,0,1272,1273,5,65,0,0,1273,1274,5,82,0,0,1274,1275,5,82,0,0,1275,
        1276,5,65,0,0,1276,1277,5,89,0,0,1277,1278,5,95,0,0,1278,1279,5,
        82,0,0,1279,1280,5,65,0,0,1280,1281,5,78,0,0,1281,1282,5,71,0,0,
        1282,1283,5,69,0,0,1283,58,1,0,0,0,1284,1285,5,65,0,0,1285,1286,
        5,83,0,0,1286,60,1,0,0,0,1287,1288,5,65,0,0,1288,1289,5,83,0,0,1289,
        1290,5,67,0,0,1290,62,1,0,0,0,1291,1292,5,65,0,0,1292,1293,5,84,
        0,0,1293,64,1,0,0,0,1294,1295,5,65,0,0,1295,1296,5,85,0,0,1296,1297,
        5,84,0,0,1297,1298,5,72,0,0,1298,1299,5,79,0,0,1299,1300,5,82,0,
        0,1300,1301,5,83,0,0,1301,66,1,0,0,0,1302,1303,5,65,0,0,1303,1304,
        5,85,0,0,1304,1305,5,84,0,0,1305,1306,5,79,0,0,1306,68,1,0,0,0,1307,
        1308,5,65,0,0,1308,1309,5,85,0,0,1309,1310,5,84,0,0,1310,1311,5,
        79,0,0,1311,1312,5,95,0,0,1312,1313,5,73,0,0,1313,1314,5,78,0,0,
        1314,1315,5,67,0,0,1315,1316,5,82,0,0,1316,1317,5,69,0,0,1317,1318,
        5,77,0,0,1318,1319,5,69,0,0,1319,1320,5,78,0,0,1320,1321,5,84,0,
        0,1321,70,1,0,0,0,1322,1323,5,65,0,0,1323,1324,5,76,0,0,1324,1325,
        5,87,0,0,1325,1326,5,65,0,0,1326,1327,5,89,0,0,1327,1328,5,83,0,
        0,1328,72,1,0,0,0,1329,1330,5,66,0,0,1330,1331,5,65,0,0,1331,1332,
        5,67,0,0,1332,1333,5,75,0,0,1333,1334,5,69,0,0,1334,1335,5,78,0,
        0,1335,1336,5,68,0,0,1336,74,1,0,0,0,1337,1338,5,66,0,0,1338,1339,
        5,65,0,0,1339,1340,5,67,0,0,1340,1341,5,75,0,0,1341,1342,5,69,0,
        0,1342,1343,5,78,0,0,1343,1344,5,68,0,0,1344,1345,5,83,0,0,1345,
        76,1,0,0,0,1346,1347,5,66,0,0,1347,1348,5,65,0,0,1348,1349,5,67,
        0,0,1349,1350,5,75,0,0,1350,1351,5,85,0,0,1351,1352,5,80,0,0,1352,
        78,1,0,0,0,1353,1354,5,66,0,0,1354,1355,5,69,0,0,1355,1356,5,71,
        0,0,1356,1357,5,73,0,0,1357,1358,5,78,0,0,1358,80,1,0,0,0,1359,1360,
        5,66,0,0,1360,1361,5,69,0,0,1361,1362,5,76,0,0,1362,1363,5,79,0,
        0,1363,1364,5,78,0,0,1364,1365,5,71,0,0,1365,82,1,0,0,0,1366,1367,
        5,66,0,0,1367,1368,5,69,0,0,1368,1369,5,84,0,0,1369,1370,5,87,0,
        0,1370,1371,5,69,0,0,1371,1372,5,69,0,0,1372,1373,5,78,0,0,1373,
        84,1,0,0,0,1374,1375,5,66,0,0,1375,1376,5,73,0,0,1376,1377,5,71,
        0,0,1377,1378,5,73,0,0,1378,1379,5,78,0,0,1379,1380,5,84,0,0,1380,
        86,1,0,0,0,1381,1382,5,66,0,0,1382,1383,5,73,0,0,1383,1384,5,78,
        0,0,1384,88,1,0,0,0,1385,1386,5,66,0,0,1386,1387,5,73,0,0,1387,1388,
        5,78,0,0,1388,1389,5,65,0,0,1389,1390,5,82,0,0,1390,1391,5,89,0,
        0,1391,90,1,0,0,0,1392,1393,5,66,0,0,1393,1394,5,73,0,0,1394,1395,
        5,78,0,0,1395,1396,5,76,0,0,1396,1397,5,79,0,0,1397,1398,5,71,0,
        0,1398,92,1,0,0,0,1399,1400,5,66,0,0,1400,1401,5,73,0,0,1401,1402,
        5,84,0,0,1402,1403,5,65,0,0,1403,1404,5,78,0,0,1404,1405,5,68,0,
        0,1405,94,1,0,0,0,1406,1407,5,66,0,0,1407,1408,5,73,0,0,1408,1409,
        5,84,0,0,1409,1410,5,77,0,0,1410,1411,5,65,0,0,1411,1412,5,80,0,
        0,1412,96,1,0,0,0,1413,1414,5,66,0,0,1414,1415,5,73,0,0,1415,1416,
        5,84,0,0,1416,1417,5,77,0,0,1417,1418,5,65,0,0,1418,1419,5,80,0,
        0,1419,1420,5,95,0,0,1420,1421,5,69,0,0,1421,1422,5,77,0,0,1422,
        1423,5,80,0,0,1423,1424,5,84,0,0,1424,1425,5,89,0,0,1425,98,1,0,
        0,0,1426,1427,5,66,0,0,1427,1428,5,73,0,0,1428,1429,5,84,0,0,1429,
        1430,5,77,0,0,1430,1431,5,65,0,0,1431,1432,5,80,0,0,1432,1433,5,
        95,0,0,1433,1434,5,85,0,0,1434,1435,5,78,0,0,1435,1436,5,73,0,0,
        1436,1437,5,79,0,0,1437,1438,5,78,0,0,1438,100,1,0,0,0,1439,1440,
        5,66,0,0,1440,1441,5,73,0,0,1441,1442,5,84,0,0,1442,1443,5,79,0,
        0,1443,1444,5,82,0,0,1444,102,1,0,0,0,1445,1446,5,66,0,0,1446,1447,
        5,73,0,0,1447,1448,5,84,0,0,1448,1449,5,88,0,0,1449,1450,5,79,0,
        0,1450,1451,5,82,0,0,1451,104,1,0,0,0,1452,1453,5,66,0,0,1453,1454,
        5,76,0,0,1454,1455,5,79,0,0,1455,1456,5,66,0,0,1456,106,1,0,0,0,
        1457,1458,5,66,0,0,1458,1459,5,79,0,0,1459,1460,5,79,0,0,1460,1461,
        5,76,0,0,1461,1462,5,69,0,0,1462,1463,5,65,0,0,1463,1464,5,78,0,
        0,1464,108,1,0,0,0,1465,1466,5,66,0,0,1466,1467,5,82,0,0,1467,1468,
        5,73,0,0,1468,1469,5,69,0,0,1469,1470,5,70,0,0,1470,110,1,0,0,0,
        1471,1472,5,66,0,0,1472,1473,5,82,0,0,1473,1474,5,79,0,0,1474,1475,
        5,75,0,0,1475,1476,5,69,0,0,1476,1477,5,82,0,0,1477,112,1,0,0,0,
        1478,1479,5,66,0,0,1479,1480,5,85,0,0,1480,1481,5,67,0,0,1481,1482,
        5,75,0,0,1482,1483,5,69,0,0,1483,1484,5,84,0,0,1484,1485,5,83,0,
        0,1485,114,1,0,0,0,1486,1487,5,66,0,0,1487,1488,5,85,0,0,1488,1489,
        5,73,0,0,1489,1490,5,76,0,0,1490,1491,5,68,0,0,1491,116,1,0,0,0,
        1492,1493,5,66,0,0,1493,1494,5,85,0,0,1494,1495,5,73,0,0,1495,1496,
        5,76,0,0,1496,1497,5,84,0,0,1497,1498,5,73,0,0,1498,1499,5,78,0,
        0,1499,118,1,0,0,0,1500,1501,5,66,0,0,1501,1502,5,85,0,0,1502,1503,
        5,76,0,0,1503,1504,5,75,0,0,1504,120,1,0,0,0,1505,1506,5,66,0,0,
        1506,1507,5,89,0,0,1507,122,1,0,0,0,1508,1509,5,67,0,0,1509,1510,
        5,65,0,0,1510,1511,5,67,0,0,1511,1512,5,72,0,0,1512,1513,5,69,0,
        0,1513,124,1,0,0,0,1514,1515,5,67,0,0,1515,1516,5,65,0,0,1516,1517,
        5,67,0,0,1517,1518,5,72,0,0,1518,1519,5,69,0,0,1519,1520,5,68,0,
        0,1520,126,1,0,0,0,1521,1522,5,67,0,0,1522,1523,5,65,0,0,1523,1524,
        5,76,0,0,1524,1525,5,76,0,0,1525,128,1,0,0,0,1526,1527,5,67,0,0,
        1527,1528,5,65,0,0,1528,1529,5,78,0,0,1529,1530,5,67,0,0,1530,1531,
        5,69,0,0,1531,1532,5,76,0,0,1532,130,1,0,0,0,1533,1534,5,67,0,0,
        1534,1535,5,65,0,0,1535,1536,5,83,0,0,1536,1537,5,69,0,0,1537,132,
        1,0,0,0,1538,1539,5,67,0,0,1539,1540,5,65,0,0,1540,1541,5,83,0,0,
        1541,1542,5,84,0,0,1542,134,1,0,0,0,1543,1544,5,67,0,0,1544,1545,
        5,65,0,0,1545,1546,5,84,0,0,1546,1547,5,65,0,0,1547,1548,5,76,0,
        0,1548,1549,5,79,0,0,1549,1550,5,71,0,0,1550,136,1,0,0,0,1551,1552,
        5,67,0,0,1552,1553,5,65,0,0,1553,1554,5,84,0,0,1554,1555,5,65,0,
        0,1555,1556,5,76,0,0,1556,1557,5,79,0,0,1557,1558,5,71,0,0,1558,
        1559,5,83,0,0,1559,138,1,0,0,0,1560,1561,5,67,0,0,1561,1562,5,72,
        0,0,1562,1563,5,65,0,0,1563,1564,5,73,0,0,1564,1565,5,78,0,0,1565,
        140,1,0,0,0,1566,1567,5,67,0,0,1567,1568,5,72,0,0,1568,1569,5,65,
        0,0,1569,1580,5,82,0,0,1570,1571,5,67,0,0,1571,1572,5,72,0,0,1572,
        1573,5,65,0,0,1573,1574,5,82,0,0,1574,1575,5,65,0,0,1575,1576,5,
        67,0,0,1576,1577,5,84,0,0,1577,1578,5,69,0,0,1578,1580,5,82,0,0,
        1579,1566,1,0,0,0,1579,1570,1,0,0,0,1580,142,1,0,0,0,1581,1582,5,
        67,0,0,1582,1583,5,72,0,0,1583,1584,5,65,0,0,1584,1585,5,82,0,0,
        1585,1586,5,83,0,0,1586,1587,5,69,0,0,1587,1588,5,84,0,0,1588,144,
        1,0,0,0,1589,1590,5,67,0,0,1590,1591,5,72,0,0,1591,1592,5,69,0,0,
        1592,1593,5,67,0,0,1593,1594,5,75,0,0,1594,146,1,0,0,0,1595,1596,
        5,67,0,0,1596,1597,5,76,0,0,1597,1598,5,69,0,0,1598,1599,5,65,0,
        0,1599,1600,5,78,0,0,1600,148,1,0,0,0,1601,1602,5,67,0,0,1602,1603,
        5,76,0,0,1603,1604,5,85,0,0,1604,1605,5,83,0,0,1605,1606,5,84,0,
        0,1606,1607,5,69,0,0,1607,1608,5,82,0,0,1608,150,1,0,0,0,1609,1610,
        5,67,0,0,1610,1611,5,76,0,0,1611,1612,5,85,0,0,1612,1613,5,83,0,
        0,1613,1614,5,84,0,0,1614,1615,5,69,0,0,1615,1616,5,82,0,0,1616,
        1617,5,83,0,0,1617,152,1,0,0,0,1618,1619,5,67,0,0,1619,1620,5,79,
        0,0,1620,1621,5,76,0,0,1621,1622,5,76,0,0,1622,1623,5,65,0,0,1623,
        1624,5,84,0,0,1624,1625,5,69,0,0,1625,154,1,0,0,0,1626,1627,5,67,
        0,0,1627,1628,5,79,0,0,1628,1629,5,76,0,0,1629,1630,5,76,0,0,1630,
        1631,5,65,0,0,1631,1632,5,84,0,0,1632,1633,5,73,0,0,1633,1634,5,
        79,0,0,1634,1635,5,78,0,0,1635,156,1,0,0,0,1636,1637,5,67,0,0,1637,
        1638,5,79,0,0,1638,1639,5,76,0,0,1639,1640,5,76,0,0,1640,1641,5,
        69,0,0,1641,1642,5,67,0,0,1642,1643,5,84,0,0,1643,158,1,0,0,0,1644,
        1645,5,67,0,0,1645,1646,5,79,0,0,1646,1647,5,76,0,0,1647,1648,5,
        79,0,0,1648,1649,5,67,0,0,1649,1650,5,65,0,0,1650,1651,5,84,0,0,
        1651,1652,5,69,0,0,1652,160,1,0,0,0,1653,1654,5,67,0,0,1654,1655,
        5,79,0,0,1655,1656,5,76,0,0,1656,1657,5,85,0,0,1657,1658,5,77,0,
        0,1658,1659,5,78,0,0,1659,162,1,0,0,0,1660,1661,5,67,0,0,1661,1662,
        5,79,0,0,1662,1663,5,76,0,0,1663,1664,5,85,0,0,1664,1665,5,77,0,
        0,1665,1666,5,78,0,0,1666,1667,5,83,0,0,1667,164,1,0,0,0,1668,1669,
        5,67,0,0,1669,1670,5,79,0,0,1670,1671,5,77,0,0,1671,1672,5,77,0,
        0,1672,1673,5,69,0,0,1673,1674,5,78,0,0,1674,1675,5,84,0,0,1675,
        166,1,0,0,0,1676,1677,5,67,0,0,1677,1678,5,79,0,0,1678,1679,5,77,
        0,0,1679,1680,5,77,0,0,1680,1681,5,73,0,0,1681,1682,5,84,0,0,1682,
        168,1,0,0,0,1683,1684,5,67,0,0,1684,1685,5,79,0,0,1685,1686,5,77,
        0,0,1686,1687,5,77,0,0,1687,1688,5,73,0,0,1688,1689,5,84,0,0,1689,
        1690,5,84,0,0,1690,1691,5,69,0,0,1691,1692,5,68,0,0,1692,170,1,0,
        0,0,1693,1694,5,67,0,0,1694,1695,5,79,0,0,1695,1696,5,77,0,0,1696,
        1697,5,80,0,0,1697,1698,5,65,0,0,1698,1699,5,67,0,0,1699,1700,5,
        84,0,0,1700,172,1,0,0,0,1701,1702,5,67,0,0,1702,1703,5,79,0,0,1703,
        1704,5,77,0,0,1704,1705,5,80,0,0,1705,1706,5,76,0,0,1706,1707,5,
        69,0,0,1707,1708,5,84,0,0,1708,1709,5,69,0,0,1709,174,1,0,0,0,1710,
        1711,5,67,0,0,1711,1712,5,79,0,0,1712,1713,5,77,0,0,1713,1714,5,
        80,0,0,1714,1715,5,82,0,0,1715,1716,5,69,0,0,1716,1717,5,83,0,0,
        1717,1718,5,83,0,0,1718,1719,5,95,0,0,1719,1720,5,84,0,0,1720,1721,
        5,89,0,0,1721,1722,5,80,0,0,1722,1723,5,69,0,0,1723,176,1,0,0,0,
        1724,1725,5,67,0,0,1725,1726,5,79,0,0,1726,1727,5,77,0,0,1727,1728,
        5,80,0,0,1728,1729,5,85,0,0,1729,1730,5,84,0,0,1730,1731,5,69,0,
        0,1731,178,1,0,0,0,1732,1733,5,67,0,0,1733,1734,5,79,0,0,1734,1735,
        5,78,0,0,1735,1736,5,68,0,0,1736,1737,5,73,0,0,1737,1738,5,84,0,
        0,1738,1739,5,73,0,0,1739,1740,5,79,0,0,1740,1741,5,78,0,0,1741,
        1742,5,83,0,0,1742,180,1,0,0,0,1743,1744,5,67,0,0,1744,1745,5,79,
        0,0,1745,1746,5,78,0,0,1746,1747,5,70,0,0,1747,1748,5,73,0,0,1748,
        1749,5,71,0,0,1749,182,1,0,0,0,1750,1751,5,67,0,0,1751,1752,5,79,
        0,0,1752,1753,5,78,0,0,1753,1754,5,78,0,0,1754,1755,5,69,0,0,1755,
        1756,5,67,0,0,1756,1757,5,84,0,0,1757,1758,5,73,0,0,1758,1759,5,
        79,0,0,1759,1760,5,78,0,0,1760,184,1,0,0,0,1761,1762,5,67,0,0,1762,
        1763,5,79,0,0,1763,1764,5,78,0,0,1764,1765,5,78,0,0,1765,1766,5,
        69,0,0,1766,1767,5,67,0,0,1767,1768,5,84,0,0,1768,1769,5,73,0,0,
        1769,1770,5,79,0,0,1770,1771,5,78,0,0,1771,1772,5,95,0,0,1772,1773,
        5,73,0,0,1773,1774,5,68,0,0,1774,186,1,0,0,0,1775,1776,5,67,0,0,
        1776,1777,5,79,0,0,1777,1778,5,78,0,0,1778,1779,5,83,0,0,1779,1780,
        5,73,0,0,1780,1781,5,83,0,0,1781,1782,5,84,0,0,1782,1783,5,69,0,
        0,1783,1784,5,78,0,0,1784,1785,5,84,0,0,1785,188,1,0,0,0,1786,1787,
        5,67,0,0,1787,1788,5,79,0,0,1788,1789,5,78,0,0,1789,1790,5,83,0,
        0,1790,1791,5,84,0,0,1791,1792,5,82,0,0,1792,1793,5,65,0,0,1793,
        1794,5,73,0,0,1794,1795,5,78,0,0,1795,1796,5,84,0,0,1796,190,1,0,
        0,0,1797,1798,5,67,0,0,1798,1799,5,79,0,0,1799,1800,5,78,0,0,1800,
        1801,5,83,0,0,1801,1802,5,84,0,0,1802,1803,5,82,0,0,1803,1804,5,
        65,0,0,1804,1805,5,73,0,0,1805,1806,5,78,0,0,1806,1807,5,84,0,0,
        1807,1808,5,83,0,0,1808,192,1,0,0,0,1809,1810,5,67,0,0,1810,1811,
        5,79,0,0,1811,1812,5,78,0,0,1812,1813,5,86,0,0,1813,1814,5,69,0,
        0,1814,1815,5,82,0,0,1815,1816,5,84,0,0,1816,194,1,0,0,0,1817,1818,
        5,67,0,0,1818,1819,5,79,0,0,1819,1820,5,78,0,0,1820,1821,5,86,0,
        0,1821,1822,5,69,0,0,1822,1823,5,82,0,0,1823,1824,5,84,0,0,1824,
        1825,5,95,0,0,1825,1826,5,76,0,0,1826,1827,5,73,0,0,1827,1828,5,
        71,0,0,1828,1829,5,72,0,0,1829,1830,5,84,0,0,1830,1831,5,95,0,0,
        1831,1832,5,83,0,0,1832,1833,5,67,0,0,1833,1834,5,72,0,0,1834,1835,
        5,69,0,0,1835,1836,5,77,0,0,1836,1837,5,65,0,0,1837,1838,5,95,0,
        0,1838,1839,5,67,0,0,1839,1840,5,72,0,0,1840,1841,5,65,0,0,1841,
        1842,5,78,0,0,1842,1843,5,71,0,0,1843,1844,5,69,0,0,1844,1845,5,
        95,0,0,1845,1846,5,80,0,0,1846,1847,5,82,0,0,1847,1848,5,79,0,0,
        1848,1849,5,67,0,0,1849,1850,5,69,0,0,1850,1851,5,83,0,0,1851,1852,
        5,83,0,0,1852,196,1,0,0,0,1853,1854,5,67,0,0,1854,1855,5,79,0,0,
        1855,1856,5,80,0,0,1856,1857,5,89,0,0,1857,198,1,0,0,0,1858,1859,
        5,67,0,0,1859,1860,5,79,0,0,1860,1861,5,85,0,0,1861,1862,5,78,0,
        0,1862,1863,5,84,0,0,1863,200,1,0,0,0,1864,1865,5,67,0,0,1865,1866,
        5,82,0,0,1866,1867,5,69,0,0,1867,1868,5,65,0,0,1868,1869,5,84,0,
        0,1869,1870,5,69,0,0,1870,202,1,0,0,0,1871,1872,5,67,0,0,1872,1873,
        5,82,0,0,1873,1874,5,69,0,0,1874,1875,5,65,0,0,1875,1876,5,84,0,
        0,1876,1877,5,73,0,0,1877,1878,5,79,0,0,1878,1879,5,78,0,0,1879,
        204,1,0,0,0,1880,1881,5,67,0,0,1881,1882,5,82,0,0,1882,1883,5,79,
        0,0,1883,1884,5,78,0,0,1884,206,1,0,0,0,1885,1886,5,67,0,0,1886,
        1887,5,82,0,0,1887,1888,5,79,0,0,1888,1889,5,83,0,0,1889,1890,5,
        83,0,0,1890,208,1,0,0,0,1891,1892,5,67,0,0,1892,1893,5,85,0,0,1893,
        1894,5,66,0,0,1894,1895,5,69,0,0,1895,210,1,0,0,0,1896,1897,5,67,
        0,0,1897,1898,5,85,0,0,1898,1899,5,82,0,0,1899,1900,5,82,0,0,1900,
        1901,5,69,0,0,1901,1902,5,78,0,0,1902,1903,5,84,0,0,1903,212,1,0,
        0,0,1904,1905,5,67,0,0,1905,1906,5,85,0,0,1906,1907,5,82,0,0,1907,
        1908,5,82,0,0,1908,1909,5,69,0,0,1909,1910,5,78,0,0,1910,1911,5,
        84,0,0,1911,1912,5,95,0,0,1912,1913,5,67,0,0,1913,1914,5,65,0,0,
        1914,1915,5,84,0,0,1915,1916,5,65,0,0,1916,1917,5,76,0,0,1917,1918,
        5,79,0,0,1918,1919,5,71,0,0,1919,214,1,0,0,0,1920,1921,5,67,0,0,
        1921,1922,5,85,0,0,1922,1923,5,82,0,0,1923,1924,5,82,0,0,1924,1925,
        5,69,0,0,1925,1926,5,78,0,0,1926,1927,5,84,0,0,1927,1928,5,95,0,
        0,1928,1929,5,68,0,0,1929,1930,5,65,0,0,1930,1931,5,84,0,0,1931,
        1932,5,69,0,0,1932,216,1,0,0,0,1933,1934,5,67,0,0,1934,1935,5,85,
        0,0,1935,1936,5,82,0,0,1936,1937,5,82,0,0,1937,1938,5,69,0,0,1938,
        1939,5,78,0,0,1939,1940,5,84,0,0,1940,1941,5,95,0,0,1941,1942,5,
        84,0,0,1942,1943,5,73,0,0,1943,1944,5,77,0,0,1944,1945,5,69,0,0,
        1945,218,1,0,0,0,1946,1947,5,67,0,0,1947,1948,5,85,0,0,1948,1949,
        5,82,0,0,1949,1950,5,82,0,0,1950,1951,5,69,0,0,1951,1952,5,78,0,
        0,1952,1953,5,84,0,0,1953,1954,5,95,0,0,1954,1955,5,84,0,0,1955,
        1956,5,73,0,0,1956,1957,5,77,0,0,1957,1958,5,69,0,0,1958,1959,5,
        83,0,0,1959,1960,5,84,0,0,1960,1961,5,65,0,0,1961,1962,5,77,0,0,
        1962,1963,5,80,0,0,1963,220,1,0,0,0,1964,1965,5,67,0,0,1965,1966,
        5,85,0,0,1966,1967,5,82,0,0,1967,1968,5,82,0,0,1968,1969,5,69,0,
        0,1969,1970,5,78,0,0,1970,1971,5,84,0,0,1971,1972,5,95,0,0,1972,
        1973,5,85,0,0,1973,1974,5,83,0,0,1974,1975,5,69,0,0,1975,1976,5,
        82,0,0,1976,222,1,0,0,0,1977,1978,5,68,0,0,1978,1979,5,65,0,0,1979,
        1980,5,84,0,0,1980,1981,5,65,0,0,1981,224,1,0,0,0,1982,1983,5,68,
        0,0,1983,1984,5,65,0,0,1984,1985,5,84,0,0,1985,1986,5,65,0,0,1986,
        1987,5,66,0,0,1987,1988,5,65,0,0,1988,1989,5,83,0,0,1989,1990,5,
        69,0,0,1990,226,1,0,0,0,1991,1992,5,68,0,0,1992,1993,5,65,0,0,1993,
        1994,5,84,0,0,1994,1995,5,65,0,0,1995,1996,5,66,0,0,1996,1997,5,
        65,0,0,1997,1998,5,83,0,0,1998,1999,5,69,0,0,1999,2000,5,83,0,0,
        2000,228,1,0,0,0,2001,2002,5,68,0,0,2002,2003,5,65,0,0,2003,2004,
        5,84,0,0,2004,2005,5,69,0,0,2005,230,1,0,0,0,2006,2007,5,68,0,0,
        2007,2008,5,65,0,0,2008,2009,5,84,0,0,2009,2010,5,69,0,0,2010,2011,
        5,95,0,0,2011,2012,5,65,0,0,2012,2013,5,68,0,0,2013,2014,5,68,0,
        0,2014,232,1,0,0,0,2015,2016,5,68,0,0,2016,2017,5,65,0,0,2017,2018,
        5,84,0,0,2018,2019,5,69,0,0,2019,2020,5,95,0,0,2020,2021,5,67,0,
        0,2021,2022,5,69,0,0,2022,2023,5,73,0,0,2023,2024,5,76,0,0,2024,
        234,1,0,0,0,2025,2026,5,68,0,0,2026,2027,5,65,0,0,2027,2028,5,84,
        0,0,2028,2029,5,69,0,0,2029,2030,5,95,0,0,2030,2031,5,68,0,0,2031,
        2032,5,73,0,0,2032,2033,5,70,0,0,2033,2034,5,70,0,0,2034,236,1,0,
        0,0,2035,2036,5,68,0,0,2036,2037,5,65,0,0,2037,2038,5,84,0,0,2038,
        2039,5,69,0,0,2039,2040,5,95,0,0,2040,2041,5,70,0,0,2041,2042,5,
        76,0,0,2042,2043,5,79,0,0,2043,2044,5,79,0,0,2044,2045,5,82,0,0,
        2045,238,1,0,0,0,2046,2047,5,68,0,0,2047,2048,5,65,0,0,2048,2049,
        5,84,0,0,2049,2050,5,69,0,0,2050,2051,5,95,0,0,2051,2052,5,83,0,
        0,2052,2053,5,85,0,0,2053,2054,5,66,0,0,2054,240,1,0,0,0,2055,2056,
        5,68,0,0,2056,2057,5,65,0,0,2057,2058,5,84,0,0,2058,2059,5,69,0,
        0,2059,2060,5,65,0,0,2060,2061,5,68,0,0,2061,2062,5,68,0,0,2062,
        242,1,0,0,0,2063,2064,5,68,0,0,2064,2065,5,65,0,0,2065,2066,5,84,
        0,0,2066,2067,5,69,0,0,2067,2068,5,68,0,0,2068,2069,5,73,0,0,2069,
        2070,5,70,0,0,2070,2071,5,70,0,0,2071,244,1,0,0,0,2072,2073,5,68,
        0,0,2073,2074,5,65,0,0,2074,2075,5,84,0,0,2075,2076,5,69,0,0,2076,
        2077,5,84,0,0,2077,2078,5,73,0,0,2078,2079,5,77,0,0,2079,2080,5,
        69,0,0,2080,246,1,0,0,0,2081,2082,5,68,0,0,2082,2083,5,65,0,0,2083,
        2084,5,84,0,0,2084,2085,5,69,0,0,2085,2086,5,84,0,0,2086,2087,5,
        73,0,0,2087,2088,5,77,0,0,2088,2089,5,69,0,0,2089,2090,5,86,0,0,
        2090,2091,5,50,0,0,2091,248,1,0,0,0,2092,2093,5,68,0,0,2093,2094,
        5,65,0,0,2094,2095,5,84,0,0,2095,2096,5,69,0,0,2096,2097,5,86,0,
        0,2097,2098,5,50,0,0,2098,250,1,0,0,0,2099,2100,5,68,0,0,2100,2101,
        5,65,0,0,2101,2102,5,84,0,0,2102,2103,5,69,0,0,2103,2104,5,84,0,
        0,2104,2105,5,73,0,0,2105,2106,5,77,0,0,2106,2107,5,69,0,0,2107,
        2108,5,86,0,0,2108,2109,5,49,0,0,2109,252,1,0,0,0,2110,2111,5,68,
        0,0,2111,2112,5,65,0,0,2112,2113,5,84,0,0,2113,2114,5,69,0,0,2114,
        2115,5,86,0,0,2115,2116,5,49,0,0,2116,254,1,0,0,0,2117,2118,5,68,
        0,0,2118,2119,5,65,0,0,2119,2120,5,89,0,0,2120,256,1,0,0,0,2121,
        2122,5,68,0,0,2122,2123,5,65,0,0,2123,2124,5,89,0,0,2124,2125,5,
        83,0,0,2125,2126,5,95,0,0,2126,2127,5,65,0,0,2127,2128,5,68,0,0,
        2128,2129,5,68,0,0,2129,258,1,0,0,0,2130,2131,5,68,0,0,2131,2132,
        5,65,0,0,2132,2133,5,89,0,0,2133,2134,5,83,0,0,2134,2135,5,95,0,
        0,2135,2136,5,83,0,0,2136,2137,5,85,0,0,2137,2138,5,66,0,0,2138,
        260,1,0,0,0,2139,2140,5,68,0,0,2140,2141,5,69,0,0,2141,2142,5,67,
        0,0,2142,2143,5,73,0,0,2143,2144,5,77,0,0,2144,2145,5,65,0,0,2145,
        2146,5,76,0,0,2146,262,1,0,0,0,2147,2148,5,68,0,0,2148,2149,5,69,
        0,0,2149,2150,5,67,0,0,2150,2151,5,73,0,0,2151,2152,5,77,0,0,2152,
        2153,5,65,0,0,2153,2154,5,76,0,0,2154,2155,5,86,0,0,2155,2156,5,
        50,0,0,2156,264,1,0,0,0,2157,2158,5,68,0,0,2158,2159,5,69,0,0,2159,
        2160,5,67,0,0,2160,2161,5,73,0,0,2161,2162,5,77,0,0,2162,2163,5,
        65,0,0,2163,2164,5,76,0,0,2164,2165,5,86,0,0,2165,2166,5,51,0,0,
        2166,266,1,0,0,0,2167,2168,5,68,0,0,2168,2169,5,69,0,0,2169,2170,
        5,67,0,0,2170,2171,5,79,0,0,2171,2172,5,77,0,0,2172,2173,5,77,0,
        0,2173,2174,5,73,0,0,2174,2175,5,83,0,0,2175,2176,5,83,0,0,2176,
        2177,5,73,0,0,2177,2178,5,79,0,0,2178,2179,5,78,0,0,2179,268,1,0,
        0,0,2180,2181,5,68,0,0,2181,2182,5,69,0,0,2182,2183,5,70,0,0,2183,
        2184,5,65,0,0,2184,2185,5,85,0,0,2185,2186,5,76,0,0,2186,2187,5,
        84,0,0,2187,270,1,0,0,0,2188,2189,5,68,0,0,2189,2190,5,69,0,0,2190,
        2191,5,70,0,0,2191,2192,5,69,0,0,2192,2193,5,82,0,0,2193,2194,5,
        82,0,0,2194,2195,5,69,0,0,2195,2196,5,68,0,0,2196,272,1,0,0,0,2197,
        2198,5,68,0,0,2198,2199,5,69,0,0,2199,2200,5,76,0,0,2200,2201,5,
        69,0,0,2201,2202,5,84,0,0,2202,2203,5,69,0,0,2203,274,1,0,0,0,2204,
        2205,5,68,0,0,2205,2206,5,69,0,0,2206,2207,5,77,0,0,2207,2208,5,
        65,0,0,2208,2209,5,78,0,0,2209,2210,5,68,0,0,2210,276,1,0,0,0,2211,
        2212,5,68,0,0,2212,2213,5,69,0,0,2213,2214,5,83,0,0,2214,2215,5,
        67,0,0,2215,278,1,0,0,0,2216,2217,5,68,0,0,2217,2218,5,69,0,0,2218,
        2219,5,83,0,0,2219,2220,5,67,0,0,2220,2221,5,82,0,0,2221,2222,5,
        73,0,0,2222,2223,5,66,0,0,2223,2224,5,69,0,0,2224,280,1,0,0,0,2225,
        2226,5,68,0,0,2226,2227,5,73,0,0,2227,2228,5,65,0,0,2228,2229,5,
        71,0,0,2229,2230,5,78,0,0,2230,2231,5,79,0,0,2231,2232,5,83,0,0,
        2232,2233,5,69,0,0,2233,282,1,0,0,0,2234,2235,5,68,0,0,2235,2236,
        5,73,0,0,2236,2237,5,65,0,0,2237,2238,5,71,0,0,2238,2239,5,78,0,
        0,2239,2240,5,79,0,0,2240,2241,5,83,0,0,2241,2242,5,73,0,0,2242,
        2243,5,83,0,0,2243,284,1,0,0,0,2244,2245,5,68,0,0,2245,2246,5,73,
        0,0,2246,2247,5,83,0,0,2247,2248,5,75,0,0,2248,286,1,0,0,0,2249,
        2250,5,68,0,0,2250,2251,5,73,0,0,2251,2252,5,83,0,0,2252,2253,5,
        84,0,0,2253,2254,5,73,0,0,2254,2255,5,78,0,0,2255,2256,5,67,0,0,
        2256,2257,5,84,0,0,2257,288,1,0,0,0,2258,2259,5,68,0,0,2259,2260,
        5,73,0,0,2260,2261,5,83,0,0,2261,2262,5,84,0,0,2262,2263,5,73,0,
        0,2263,2264,5,78,0,0,2264,2265,5,67,0,0,2265,2266,5,84,0,0,2266,
        2267,5,80,0,0,2267,2268,5,67,0,0,2268,290,1,0,0,0,2269,2270,5,68,
        0,0,2270,2271,5,73,0,0,2271,2272,5,83,0,0,2272,2273,5,84,0,0,2273,
        2274,5,73,0,0,2274,2275,5,78,0,0,2275,2276,5,67,0,0,2276,2277,5,
        84,0,0,2277,2278,5,80,0,0,2278,2279,5,67,0,0,2279,2280,5,83,0,0,
        2280,2281,5,65,0,0,2281,292,1,0,0,0,2282,2283,5,68,0,0,2283,2284,
        5,73,0,0,2284,2285,5,83,0,0,2285,2286,5,84,0,0,2286,2287,5,82,0,
        0,2287,2288,5,73,0,0,2288,2289,5,66,0,0,2289,2290,5,85,0,0,2290,
        2291,5,84,0,0,2291,2292,5,69,0,0,2292,2293,5,68,0,0,2293,294,1,0,
        0,0,2294,2295,5,68,0,0,2295,2296,5,73,0,0,2296,2297,5,83,0,0,2297,
        2298,5,84,0,0,2298,2299,5,82,0,0,2299,2300,5,73,0,0,2300,2301,5,
        66,0,0,2301,2302,5,85,0,0,2302,2303,5,84,0,0,2303,2304,5,73,0,0,
        2304,2305,5,79,0,0,2305,2306,5,78,0,0,2306,296,1,0,0,0,2307,2308,
        5,68,0,0,2308,2309,5,73,0,0,2309,2310,5,86,0,0,2310,298,1,0,0,0,
        2311,2312,5,68,0,0,2312,2313,5,79,0,0,2313,300,1,0,0,0,2314,2315,
        5,68,0,0,2315,2316,5,79,0,0,2316,2317,5,82,0,0,2317,2318,5,73,0,
        0,2318,2319,5,83,0,0,2319,2320,5,95,0,0,2320,2321,5,73,0,0,2321,
        2322,5,78,0,0,2322,2323,5,84,0,0,2323,2324,5,69,0,0,2324,2325,5,
        82,0,0,2325,2326,5,78,0,0,2326,2327,5,65,0,0,2327,2328,5,76,0,0,
        2328,2329,5,95,0,0,2329,2330,5,84,0,0,2330,2331,5,65,0,0,2331,2332,
        5,66,0,0,2332,2333,5,76,0,0,2333,2334,5,69,0,0,2334,2335,5,95,0,
        0,2335,2336,5,73,0,0,2336,2337,5,68,0,0,2337,302,1,0,0,0,2338,2339,
        5,68,0,0,2339,2340,5,79,0,0,2340,2341,5,85,0,0,2341,2342,5,66,0,
        0,2342,2343,5,76,0,0,2343,2344,5,69,0,0,2344,304,1,0,0,0,2345,2346,
        5,68,0,0,2346,2347,5,82,0,0,2347,2348,5,79,0,0,2348,2349,5,80,0,
        0,2349,306,1,0,0,0,2350,2351,5,68,0,0,2351,2352,5,82,0,0,2352,2353,
        5,79,0,0,2353,2354,5,80,0,0,2354,2355,5,80,0,0,2355,308,1,0,0,0,
        2356,2357,5,68,0,0,2357,2358,5,85,0,0,2358,2359,5,65,0,0,2359,2360,
        5,76,0,0,2360,310,1,0,0,0,2361,2362,5,68,0,0,2362,2363,5,85,0,0,
        2363,2364,5,77,0,0,2364,2365,5,80,0,0,2365,312,1,0,0,0,2366,2367,
        5,68,0,0,2367,2368,5,85,0,0,2368,2369,5,80,0,0,2369,2370,5,76,0,
        0,2370,2371,5,73,0,0,2371,2372,5,67,0,0,2372,2373,5,65,0,0,2373,
        2374,5,84,0,0,2374,2375,5,69,0,0,2375,314,1,0,0,0,2376,2377,5,68,
        0,0,2377,2378,5,89,0,0,2378,2379,5,78,0,0,2379,2380,5,65,0,0,2380,
        2381,5,77,0,0,2381,2382,5,73,0,0,2382,2383,5,67,0,0,2383,316,1,0,
        0,0,2384,2385,5,69,0,0,2385,318,1,0,0,0,2386,2387,5,69,0,0,2387,
        2388,5,76,0,0,2388,2389,5,83,0,0,2389,2390,5,69,0,0,2390,320,1,0,
        0,0,2391,2392,5,69,0,0,2392,2393,5,78,0,0,2393,2394,5,65,0,0,2394,
        2395,5,66,0,0,2395,2396,5,76,0,0,2396,2397,5,69,0,0,2397,322,1,0,
        0,0,2398,2399,5,69,0,0,2399,2400,5,78,0,0,2400,2401,5,67,0,0,2401,
        2402,5,82,0,0,2402,2403,5,89,0,0,2403,2404,5,80,0,0,2404,2405,5,
        84,0,0,2405,2406,5,75,0,0,2406,2407,5,69,0,0,2407,2408,5,89,0,0,
        2408,324,1,0,0,0,2409,2410,5,69,0,0,2410,2411,5,78,0,0,2411,2412,
        5,67,0,0,2412,2413,5,82,0,0,2413,2414,5,89,0,0,2414,2415,5,80,0,
        0,2415,2416,5,84,0,0,2416,2417,5,75,0,0,2417,2418,5,69,0,0,2418,
        2419,5,89,0,0,2419,2420,5,83,0,0,2420,326,1,0,0,0,2421,2422,5,69,
        0,0,2422,2423,5,78,0,0,2423,2424,5,68,0,0,2424,328,1,0,0,0,2425,
        2426,5,69,0,0,2426,2427,5,78,0,0,2427,2428,5,68,0,0,2428,2429,5,
        83,0,0,2429,330,1,0,0,0,2430,2431,5,69,0,0,2431,2432,5,78,0,0,2432,
        2433,5,71,0,0,2433,2434,5,73,0,0,2434,2435,5,78,0,0,2435,2436,5,
        69,0,0,2436,332,1,0,0,0,2437,2438,5,69,0,0,2438,2439,5,78,0,0,2439,
        2440,5,71,0,0,2440,2441,5,73,0,0,2441,2442,5,78,0,0,2442,2443,5,
        69,0,0,2443,2444,5,83,0,0,2444,334,1,0,0,0,2445,2446,5,69,0,0,2446,
        2447,5,78,0,0,2447,2448,5,84,0,0,2448,2449,5,69,0,0,2449,2450,5,
        82,0,0,2450,336,1,0,0,0,2451,2452,5,69,0,0,2452,2453,5,82,0,0,2453,
        2454,5,82,0,0,2454,2455,5,79,0,0,2455,2456,5,82,0,0,2456,2457,5,
        83,0,0,2457,338,1,0,0,0,2458,2459,5,69,0,0,2459,2460,5,86,0,0,2460,
        2461,5,69,0,0,2461,2462,5,78,0,0,2462,2463,5,84,0,0,2463,2464,5,
        83,0,0,2464,340,1,0,0,0,2465,2466,5,69,0,0,2466,2467,5,86,0,0,2467,
        2468,5,69,0,0,2468,2469,5,82,0,0,2469,2470,5,89,0,0,2470,342,1,0,
        0,0,2471,2472,5,69,0,0,2472,2473,5,88,0,0,2473,2474,5,67,0,0,2474,
        2475,5,69,0,0,2475,2476,5,80,0,0,2476,2477,5,84,0,0,2477,344,1,0,
        0,0,2478,2479,5,69,0,0,2479,2480,5,88,0,0,2480,2481,5,67,0,0,2481,
        2482,5,76,0,0,2482,2483,5,85,0,0,2483,2484,5,68,0,0,2484,2485,5,
        69,0,0,2485,346,1,0,0,0,2486,2487,5,69,0,0,2487,2488,5,88,0,0,2488,
        2489,5,69,0,0,2489,2490,5,67,0,0,2490,2491,5,85,0,0,2491,2492,5,
        84,0,0,2492,2493,5,69,0,0,2493,348,1,0,0,0,2494,2495,5,69,0,0,2495,
        2496,5,88,0,0,2496,2497,5,73,0,0,2497,2498,5,83,0,0,2498,2499,5,
        84,0,0,2499,2500,5,83,0,0,2500,350,1,0,0,0,2501,2502,5,69,0,0,2502,
        2503,5,88,0,0,2503,2504,5,80,0,0,2504,2505,5,73,0,0,2505,2506,5,
        82,0,0,2506,2507,5,69,0,0,2507,2508,5,68,0,0,2508,352,1,0,0,0,2509,
        2510,5,69,0,0,2510,2511,5,88,0,0,2511,2512,5,80,0,0,2512,2513,5,
        76,0,0,2513,2514,5,65,0,0,2514,2515,5,73,0,0,2515,2516,5,78,0,0,
        2516,354,1,0,0,0,2517,2518,5,69,0,0,2518,2519,5,88,0,0,2519,2520,
        5,80,0,0,2520,2521,5,79,0,0,2521,2522,5,82,0,0,2522,2523,5,84,0,
        0,2523,356,1,0,0,0,2524,2525,5,69,0,0,2525,2526,5,88,0,0,2526,2527,
        5,84,0,0,2527,2528,5,69,0,0,2528,2529,5,78,0,0,2529,2530,5,68,0,
        0,2530,2531,5,69,0,0,2531,2532,5,68,0,0,2532,358,1,0,0,0,2533,2534,
        5,69,0,0,2534,2535,5,88,0,0,2535,2536,5,84,0,0,2536,2537,5,69,0,
        0,2537,2538,5,82,0,0,2538,2539,5,78,0,0,2539,2540,5,65,0,0,2540,
        2541,5,76,0,0,2541,360,1,0,0,0,2542,2543,5,69,0,0,2543,2544,5,88,
        0,0,2544,2545,5,84,0,0,2545,2546,5,82,0,0,2546,2547,5,65,0,0,2547,
        2548,5,67,0,0,2548,2549,5,84,0,0,2549,362,1,0,0,0,2550,2551,5,70,
        0,0,2551,2552,5,65,0,0,2552,2553,5,73,0,0,2553,2554,5,76,0,0,2554,
        2555,5,69,0,0,2555,2556,5,68,0,0,2556,2557,5,95,0,0,2557,2558,5,
        76,0,0,2558,2559,5,79,0,0,2559,2560,5,71,0,0,2560,2561,5,73,0,0,
        2561,2562,5,78,0,0,2562,2563,5,95,0,0,2563,2564,5,65,0,0,2564,2565,
        5,84,0,0,2565,2566,5,84,0,0,2566,2567,5,69,0,0,2567,2568,5,77,0,
        0,2568,2569,5,80,0,0,2569,2570,5,84,0,0,2570,2571,5,83,0,0,2571,
        364,1,0,0,0,2572,2573,5,70,0,0,2573,2574,5,65,0,0,2574,2575,5,76,
        0,0,2575,2576,5,83,0,0,2576,2577,5,69,0,0,2577,366,1,0,0,0,2578,
        2579,5,70,0,0,2579,2580,5,65,0,0,2580,2581,5,83,0,0,2581,2582,5,
        84,0,0,2582,368,1,0,0,0,2583,2584,5,70,0,0,2584,2585,5,69,0,0,2585,
        2586,5,65,0,0,2586,2587,5,84,0,0,2587,2588,5,85,0,0,2588,2589,5,
        82,0,0,2589,2590,5,69,0,0,2590,370,1,0,0,0,2591,2592,5,70,0,0,2592,
        2593,5,73,0,0,2593,2594,5,69,0,0,2594,2595,5,76,0,0,2595,2596,5,
        68,0,0,2596,2597,5,83,0,0,2597,372,1,0,0,0,2598,2599,5,70,0,0,2599,
        2600,5,73,0,0,2600,2601,5,76,0,0,2601,2602,5,69,0,0,2602,374,1,0,
        0,0,2603,2604,5,70,0,0,2604,2605,5,73,0,0,2605,2606,5,76,0,0,2606,
        2607,5,84,0,0,2607,2608,5,69,0,0,2608,2609,5,82,0,0,2609,376,1,0,
        0,0,2610,2611,5,70,0,0,2611,2612,5,73,0,0,2612,2613,5,82,0,0,2613,
        2614,5,83,0,0,2614,2615,5,84,0,0,2615,378,1,0,0,0,2616,2617,5,70,
        0,0,2617,2618,5,76,0,0,2618,2619,5,79,0,0,2619,2620,5,65,0,0,2620,
        2621,5,84,0,0,2621,380,1,0,0,0,2622,2623,5,70,0,0,2623,2624,5,79,
        0,0,2624,2625,5,76,0,0,2625,2626,5,76,0,0,2626,2627,5,79,0,0,2627,
        2628,5,87,0,0,2628,2629,5,69,0,0,2629,2630,5,82,0,0,2630,382,1,0,
        0,0,2631,2632,5,70,0,0,2632,2633,5,79,0,0,2633,2634,5,76,0,0,2634,
        2635,5,76,0,0,2635,2636,5,79,0,0,2636,2637,5,87,0,0,2637,2638,5,
        73,0,0,2638,2639,5,78,0,0,2639,2640,5,71,0,0,2640,384,1,0,0,0,2641,
        2642,5,70,0,0,2642,2643,5,79,0,0,2643,2644,5,82,0,0,2644,386,1,0,
        0,0,2645,2646,5,70,0,0,2646,2647,5,79,0,0,2647,2648,5,82,0,0,2648,
        2649,5,69,0,0,2649,2650,5,73,0,0,2650,2651,5,71,0,0,2651,2652,5,
        78,0,0,2652,388,1,0,0,0,2653,2654,5,70,0,0,2654,2655,5,79,0,0,2655,
        2656,5,82,0,0,2656,2657,5,67,0,0,2657,2658,5,69,0,0,2658,390,1,0,
        0,0,2659,2660,5,70,0,0,2660,2661,5,79,0,0,2661,2662,5,82,0,0,2662,
        2663,5,77,0,0,2663,2664,5,65,0,0,2664,2665,5,84,0,0,2665,392,1,0,
        0,0,2666,2667,5,70,0,0,2667,2668,5,82,0,0,2668,2669,5,69,0,0,2669,
        2670,5,69,0,0,2670,394,1,0,0,0,2671,2672,5,70,0,0,2672,2673,5,82,
        0,0,2673,2674,5,79,0,0,2674,2675,5,77,0,0,2675,396,1,0,0,0,2676,
        2677,5,70,0,0,2677,2678,5,82,0,0,2678,2679,5,79,0,0,2679,2680,5,
        78,0,0,2680,2681,5,84,0,0,2681,2682,5,69,0,0,2682,2683,5,78,0,0,
        2683,2684,5,68,0,0,2684,398,1,0,0,0,2685,2686,5,70,0,0,2686,2687,
        5,82,0,0,2687,2688,5,79,0,0,2688,2689,5,78,0,0,2689,2690,5,84,0,
        0,2690,2691,5,69,0,0,2691,2692,5,78,0,0,2692,2693,5,68,0,0,2693,
        2694,5,83,0,0,2694,400,1,0,0,0,2695,2696,5,70,0,0,2696,2697,5,85,
        0,0,2697,2698,5,76,0,0,2698,2699,5,76,0,0,2699,402,1,0,0,0,2700,
        2701,5,70,0,0,2701,2702,5,85,0,0,2702,2703,5,78,0,0,2703,2704,5,
        67,0,0,2704,2705,5,84,0,0,2705,2706,5,73,0,0,2706,2707,5,79,0,0,
        2707,2708,5,78,0,0,2708,404,1,0,0,0,2709,2710,5,70,0,0,2710,2711,
        5,85,0,0,2711,2712,5,78,0,0,2712,2713,5,67,0,0,2713,2714,5,84,0,
        0,2714,2715,5,73,0,0,2715,2716,5,79,0,0,2716,2717,5,78,0,0,2717,
        2718,5,83,0,0,2718,406,1,0,0,0,2719,2720,5,71,0,0,2720,2721,5,69,
        0,0,2721,2722,5,78,0,0,2722,2723,5,69,0,0,2723,2724,5,82,0,0,2724,
        2725,5,65,0,0,2725,2726,5,84,0,0,2726,2727,5,69,0,0,2727,2728,5,
        68,0,0,2728,408,1,0,0,0,2729,2730,5,71,0,0,2730,2731,5,69,0,0,2731,
        2732,5,78,0,0,2732,2733,5,69,0,0,2733,2734,5,82,0,0,2734,2735,5,
        73,0,0,2735,2736,5,67,0,0,2736,410,1,0,0,0,2737,2738,5,71,0,0,2738,
        2739,5,76,0,0,2739,2740,5,79,0,0,2740,2741,5,66,0,0,2741,2742,5,
        65,0,0,2742,2743,5,76,0,0,2743,412,1,0,0,0,2744,2745,5,71,0,0,2745,
        2746,5,82,0,0,2746,2747,5,65,0,0,2747,2748,5,78,0,0,2748,2749,5,
        84,0,0,2749,414,1,0,0,0,2750,2751,5,71,0,0,2751,2752,5,82,0,0,2752,
        2753,5,65,0,0,2753,2754,5,78,0,0,2754,2755,5,84,0,0,2755,2756,5,
        83,0,0,2756,416,1,0,0,0,2757,2758,5,71,0,0,2758,2759,5,82,0,0,2759,
        2760,5,65,0,0,2760,2761,5,80,0,0,2761,2762,5,72,0,0,2762,418,1,0,
        0,0,2763,2764,5,71,0,0,2764,2765,5,82,0,0,2765,2766,5,79,0,0,2766,
        2767,5,85,0,0,2767,2768,5,80,0,0,2768,420,1,0,0,0,2769,2770,5,71,
        0,0,2770,2771,5,82,0,0,2771,2772,5,79,0,0,2772,2773,5,85,0,0,2773,
        2774,5,80,0,0,2774,2775,5,73,0,0,2775,2776,5,78,0,0,2776,2777,5,
        71,0,0,2777,422,1,0,0,0,2778,2779,5,71,0,0,2779,2780,5,82,0,0,2780,
        2781,5,79,0,0,2781,2782,5,85,0,0,2782,2783,5,80,0,0,2783,2784,5,
        83,0,0,2784,424,1,0,0,0,2785,2786,5,72,0,0,2786,2787,5,65,0,0,2787,
        2788,5,83,0,0,2788,2789,5,72,0,0,2789,426,1,0,0,0,2790,2791,5,72,
        0,0,2791,2792,5,65,0,0,2792,2793,5,86,0,0,2793,2794,5,73,0,0,2794,
        2795,5,78,0,0,2795,2796,5,71,0,0,2796,428,1,0,0,0,2797,2798,5,72,
        0,0,2798,2799,5,68,0,0,2799,2800,5,70,0,0,2800,2801,5,83,0,0,2801,
        430,1,0,0,0,2802,2803,5,72,0,0,2803,2804,5,69,0,0,2804,2805,5,76,
        0,0,2805,2806,5,80,0,0,2806,432,1,0,0,0,2807,2808,5,72,0,0,2808,
        2809,5,73,0,0,2809,2810,5,83,0,0,2810,2811,5,84,0,0,2811,2812,5,
        79,0,0,2812,2813,5,71,0,0,2813,2814,5,82,0,0,2814,2815,5,65,0,0,
        2815,2816,5,77,0,0,2816,434,1,0,0,0,2817,2818,5,72,0,0,2818,2819,
        5,76,0,0,2819,2820,5,76,0,0,2820,436,1,0,0,0,2821,2822,5,72,0,0,
        2822,2823,5,76,0,0,2823,2824,5,76,0,0,2824,2825,5,95,0,0,2825,2826,
        5,85,0,0,2826,2827,5,78,0,0,2827,2828,5,73,0,0,2828,2829,5,79,0,
        0,2829,2830,5,78,0,0,2830,438,1,0,0,0,2831,2832,5,72,0,0,2832,2833,
        5,79,0,0,2833,2834,5,83,0,0,2834,2835,5,84,0,0,2835,2836,5,78,0,
        0,2836,2837,5,65,0,0,2837,2838,5,77,0,0,2838,2839,5,69,0,0,2839,
        440,1,0,0,0,2840,2841,5,72,0,0,2841,2842,5,79,0,0,2842,2843,5,84,
        0,0,2843,2844,5,83,0,0,2844,2845,5,80,0,0,2845,2846,5,79,0,0,2846,
        2847,5,84,0,0,2847,442,1,0,0,0,2848,2849,5,72,0,0,2849,2850,5,79,
        0,0,2850,2851,5,85,0,0,2851,2852,5,82,0,0,2852,444,1,0,0,0,2853,
        2854,5,72,0,0,2854,2855,5,85,0,0,2855,2856,5,66,0,0,2856,446,1,0,
        0,0,2857,2858,5,73,0,0,2858,2859,5,68,0,0,2859,2860,5,69,0,0,2860,
        2861,5,78,0,0,2861,2862,5,84,0,0,2862,2863,5,73,0,0,2863,2864,5,
        70,0,0,2864,2865,5,73,0,0,2865,2866,5,69,0,0,2866,2867,5,68,0,0,
        2867,448,1,0,0,0,2868,2869,5,73,0,0,2869,2870,5,70,0,0,2870,450,
        1,0,0,0,2871,2872,5,73,0,0,2872,2873,5,71,0,0,2873,2874,5,78,0,0,
        2874,2875,5,79,0,0,2875,2876,5,82,0,0,2876,2877,5,69,0,0,2877,452,
        1,0,0,0,2878,2879,5,73,0,0,2879,2880,5,77,0,0,2880,2881,5,77,0,0,
        2881,2882,5,69,0,0,2882,2883,5,68,0,0,2883,2884,5,73,0,0,2884,2885,
        5,65,0,0,2885,2886,5,84,0,0,2886,2887,5,69,0,0,2887,454,1,0,0,0,
        2888,2889,5,73,0,0,2889,2890,5,78,0,0,2890,456,1,0,0,0,2891,2892,
        5,73,0,0,2892,2893,5,78,0,0,2893,2894,5,67,0,0,2894,2895,5,82,0,
        0,2895,2896,5,69,0,0,2896,2897,5,77,0,0,2897,2898,5,69,0,0,2898,
        2899,5,78,0,0,2899,2900,5,84,0,0,2900,2901,5,65,0,0,2901,2902,5,
        76,0,0,2902,458,1,0,0,0,2903,2904,5,73,0,0,2904,2905,5,78,0,0,2905,
        2906,5,68,0,0,2906,2907,5,69,0,0,2907,2908,5,88,0,0,2908,460,1,0,
        0,0,2909,2910,5,73,0,0,2910,2911,5,78,0,0,2911,2912,5,68,0,0,2912,
        2913,5,69,0,0,2913,2914,5,88,0,0,2914,2915,5,69,0,0,2915,2916,5,
        83,0,0,2916,462,1,0,0,0,2917,2918,5,73,0,0,2918,2919,5,78,0,0,2919,
        2920,5,70,0,0,2920,2921,5,73,0,0,2921,2922,5,76,0,0,2922,2923,5,
        69,0,0,2923,464,1,0,0,0,2924,2925,5,73,0,0,2925,2926,5,78,0,0,2926,
        2927,5,78,0,0,2927,2928,5,69,0,0,2928,2929,5,82,0,0,2929,466,1,0,
        0,0,2930,2931,5,73,0,0,2931,2932,5,78,0,0,2932,2933,5,83,0,0,2933,
        2934,5,69,0,0,2934,2935,5,82,0,0,2935,2936,5,84,0,0,2936,468,1,0,
        0,0,2937,2938,5,73,0,0,2938,2939,5,78,0,0,2939,2940,5,83,0,0,2940,
        2941,5,84,0,0,2941,2942,5,65,0,0,2942,2943,5,76,0,0,2943,2944,5,
        76,0,0,2944,470,1,0,0,0,2945,2946,5,73,0,0,2946,2947,5,78,0,0,2947,
        2948,5,84,0,0,2948,472,1,0,0,0,2949,2950,5,73,0,0,2950,2951,5,78,
        0,0,2951,2952,5,84,0,0,2952,2953,5,69,0,0,2953,2954,5,71,0,0,2954,
        2955,5,69,0,0,2955,2956,5,82,0,0,2956,474,1,0,0,0,2957,2958,5,73,
        0,0,2958,2959,5,78,0,0,2959,2960,5,84,0,0,2960,2961,5,69,0,0,2961,
        2962,5,82,0,0,2962,2963,5,77,0,0,2963,2964,5,69,0,0,2964,2965,5,
        68,0,0,2965,2966,5,73,0,0,2966,2967,5,65,0,0,2967,2968,5,84,0,0,
        2968,2969,5,69,0,0,2969,476,1,0,0,0,2970,2971,5,73,0,0,2971,2972,
        5,78,0,0,2972,2973,5,84,0,0,2973,2974,5,69,0,0,2974,2975,5,82,0,
        0,2975,2976,5,83,0,0,2976,2977,5,69,0,0,2977,2978,5,67,0,0,2978,
        2979,5,84,0,0,2979,478,1,0,0,0,2980,2981,5,73,0,0,2981,2982,5,78,
        0,0,2982,2983,5,84,0,0,2983,2984,5,69,0,0,2984,2985,5,82,0,0,2985,
        2986,5,86,0,0,2986,2987,5,65,0,0,2987,2988,5,76,0,0,2988,480,1,0,
        0,0,2989,2990,5,73,0,0,2990,2991,5,78,0,0,2991,2992,5,84,0,0,2992,
        2993,5,79,0,0,2993,482,1,0,0,0,2994,2995,5,73,0,0,2995,2996,5,78,
        0,0,2996,2997,5,86,0,0,2997,2998,5,69,0,0,2998,2999,5,82,0,0,2999,
        3000,5,84,0,0,3000,3001,5,69,0,0,3001,3002,5,68,0,0,3002,484,1,0,
        0,0,3003,3004,5,73,0,0,3004,3005,5,80,0,0,3005,3006,5,86,0,0,3006,
        3007,5,52,0,0,3007,486,1,0,0,0,3008,3009,5,73,0,0,3009,3010,5,80,
        0,0,3010,3011,5,86,0,0,3011,3012,5,54,0,0,3012,488,1,0,0,0,3013,
        3014,5,73,0,0,3014,3015,5,83,0,0,3015,490,1,0,0,0,3016,3017,5,73,
        0,0,3017,3018,5,83,0,0,3018,3019,5,95,0,0,3019,3020,5,78,0,0,3020,
        3021,5,79,0,0,3021,3022,5,84,0,0,3022,3023,5,95,0,0,3023,3024,5,
        78,0,0,3024,3025,5,85,0,0,3025,3026,5,76,0,0,3026,3027,5,76,0,0,
        3027,3028,5,95,0,0,3028,3029,5,80,0,0,3029,3030,5,82,0,0,3030,3031,
        5,69,0,0,3031,3032,5,68,0,0,3032,492,1,0,0,0,3033,3034,5,73,0,0,
        3034,3035,5,83,0,0,3035,3036,5,95,0,0,3036,3037,5,78,0,0,3037,3038,
        5,85,0,0,3038,3039,5,76,0,0,3039,3040,5,76,0,0,3040,3041,5,95,0,
        0,3041,3042,5,80,0,0,3042,3043,5,82,0,0,3043,3044,5,69,0,0,3044,
        3045,5,68,0,0,3045,494,1,0,0,0,3046,3047,5,73,0,0,3047,3048,5,83,
        0,0,3048,3049,5,78,0,0,3049,3050,5,85,0,0,3050,3051,5,76,0,0,3051,
        3052,5,76,0,0,3052,496,1,0,0,0,3053,3054,5,73,0,0,3054,3055,5,83,
        0,0,3055,3056,5,79,0,0,3056,3057,5,76,0,0,3057,3058,5,65,0,0,3058,
        3059,5,84,0,0,3059,3060,5,73,0,0,3060,3061,5,79,0,0,3061,3062,5,
        78,0,0,3062,498,1,0,0,0,3063,3064,5,74,0,0,3064,3065,5,79,0,0,3065,
        3066,5,66,0,0,3066,500,1,0,0,0,3067,3068,5,74,0,0,3068,3069,5,79,
        0,0,3069,3070,5,66,0,0,3070,3071,5,83,0,0,3071,502,1,0,0,0,3072,
        3073,5,74,0,0,3073,3074,5,79,0,0,3074,3075,5,73,0,0,3075,3076,5,
        78,0,0,3076,504,1,0,0,0,3077,3078,5,74,0,0,3078,3079,5,83,0,0,3079,
        3080,5,79,0,0,3080,3081,5,78,0,0,3081,506,1,0,0,0,3082,3083,5,74,
        0,0,3083,3084,5,83,0,0,3084,3085,5,79,0,0,3085,3086,5,78,0,0,3086,
        3087,5,66,0,0,3087,508,1,0,0,0,3088,3089,5,75,0,0,3089,3090,5,69,
        0,0,3090,3091,5,89,0,0,3091,510,1,0,0,0,3092,3093,5,75,0,0,3093,
        3094,5,69,0,0,3094,3095,5,89,0,0,3095,3096,5,83,0,0,3096,512,1,0,
        0,0,3097,3098,5,75,0,0,3098,3099,5,73,0,0,3099,3100,5,76,0,0,3100,
        3101,5,76,0,0,3101,514,1,0,0,0,3102,3103,5,76,0,0,3103,3104,5,65,
        0,0,3104,3105,5,66,0,0,3105,3106,5,69,0,0,3106,3107,5,76,0,0,3107,
        516,1,0,0,0,3108,3109,5,76,0,0,3109,3110,5,65,0,0,3110,3111,5,82,
        0,0,3111,3112,5,71,0,0,3112,3113,5,69,0,0,3113,3114,5,73,0,0,3114,
        3115,5,78,0,0,3115,3116,5,84,0,0,3116,518,1,0,0,0,3117,3118,5,76,
        0,0,3118,3119,5,65,0,0,3119,3120,5,83,0,0,3120,3121,5,84,0,0,3121,
        520,1,0,0,0,3122,3123,5,76,0,0,3123,3124,5,65,0,0,3124,3125,5,84,
        0,0,3125,3126,5,69,0,0,3126,3127,5,82,0,0,3127,3128,5,65,0,0,3128,
        3129,5,76,0,0,3129,522,1,0,0,0,3130,3131,5,76,0,0,3131,3132,5,68,
        0,0,3132,3133,5,65,0,0,3133,3134,5,80,0,0,3134,524,1,0,0,0,3135,
        3136,5,76,0,0,3136,3137,5,68,0,0,3137,3138,5,65,0,0,3138,3139,5,
        80,0,0,3139,3140,5,95,0,0,3140,3141,5,65,0,0,3141,3142,5,68,0,0,
        3142,3143,5,77,0,0,3143,3144,5,73,0,0,3144,3145,5,78,0,0,3145,3146,
        5,95,0,0,3146,3147,5,80,0,0,3147,3148,5,65,0,0,3148,3149,5,83,0,
        0,3149,3150,5,83,0,0,3150,3151,5,87,0,0,3151,3152,5,79,0,0,3152,
        3153,5,82,0,0,3153,3154,5,68,0,0,3154,526,1,0,0,0,3155,3156,5,76,
        0,0,3156,3157,5,69,0,0,3157,3158,5,70,0,0,3158,3159,5,84,0,0,3159,
        528,1,0,0,0,3160,3161,5,76,0,0,3161,3162,5,69,0,0,3162,3163,5,83,
        0,0,3163,3164,5,83,0,0,3164,530,1,0,0,0,3165,3166,5,76,0,0,3166,
        3167,5,69,0,0,3167,3168,5,86,0,0,3168,3169,5,69,0,0,3169,3170,5,
        76,0,0,3170,532,1,0,0,0,3171,3172,5,76,0,0,3172,3173,5,73,0,0,3173,
        3174,5,75,0,0,3174,3175,5,69,0,0,3175,534,1,0,0,0,3176,3177,5,76,
        0,0,3177,3178,5,73,0,0,3178,3179,5,77,0,0,3179,3180,5,73,0,0,3180,
        3181,5,84,0,0,3181,536,1,0,0,0,3182,3183,5,76,0,0,3183,3184,5,73,
        0,0,3184,3185,5,78,0,0,3185,3186,5,69,0,0,3186,3187,5,83,0,0,3187,
        538,1,0,0,0,3188,3189,5,76,0,0,3189,3190,5,73,0,0,3190,3191,5,78,
        0,0,3191,3192,5,75,0,0,3192,540,1,0,0,0,3193,3194,5,76,0,0,3194,
        3195,5,73,0,0,3195,3196,5,83,0,0,3196,3197,5,84,0,0,3197,542,1,0,
        0,0,3198,3199,5,76,0,0,3199,3200,5,79,0,0,3200,3201,5,65,0,0,3201,
        3202,5,68,0,0,3202,544,1,0,0,0,3203,3204,5,76,0,0,3204,3205,5,79,
        0,0,3205,3206,5,67,0,0,3206,3207,5,65,0,0,3207,3208,5,76,0,0,3208,
        546,1,0,0,0,3209,3210,5,76,0,0,3210,3211,5,79,0,0,3211,3212,5,67,
        0,0,3212,3213,5,65,0,0,3213,3214,5,76,0,0,3214,3215,5,84,0,0,3215,
        3216,5,73,0,0,3216,3217,5,77,0,0,3217,3218,5,69,0,0,3218,548,1,0,
        0,0,3219,3220,5,76,0,0,3220,3221,5,79,0,0,3221,3222,5,67,0,0,3222,
        3223,5,65,0,0,3223,3224,5,76,0,0,3224,3225,5,84,0,0,3225,3226,5,
        73,0,0,3226,3227,5,77,0,0,3227,3228,5,69,0,0,3228,3229,5,83,0,0,
        3229,3230,5,84,0,0,3230,3231,5,65,0,0,3231,3232,5,77,0,0,3232,3233,
        5,80,0,0,3233,550,1,0,0,0,3234,3235,5,76,0,0,3235,3236,5,79,0,0,
        3236,3237,5,67,0,0,3237,3238,5,65,0,0,3238,3239,5,84,0,0,3239,3240,
        5,73,0,0,3240,3241,5,79,0,0,3241,3242,5,78,0,0,3242,552,1,0,0,0,
        3243,3244,5,76,0,0,3244,3245,5,79,0,0,3245,3246,5,67,0,0,3246,3247,
        5,75,0,0,3247,554,1,0,0,0,3248,3249,5,76,0,0,3249,3250,5,79,0,0,
        3250,3251,5,71,0,0,3251,3252,5,73,0,0,3252,3253,5,67,0,0,3253,3254,
        5,65,0,0,3254,3255,5,76,0,0,3255,556,1,0,0,0,3256,3257,5,76,0,0,
        3257,3258,5,79,0,0,3258,3259,5,87,0,0,3259,3260,5,95,0,0,3260,3261,
        5,80,0,0,3261,3262,5,82,0,0,3262,3263,5,73,0,0,3263,3264,5,79,0,
        0,3264,3265,5,82,0,0,3265,3266,5,73,0,0,3266,3267,5,84,0,0,3267,
        3268,5,89,0,0,3268,558,1,0,0,0,3269,3270,5,77,0,0,3270,3271,5,65,
        0,0,3271,3272,5,78,0,0,3272,3273,5,85,0,0,3273,3274,5,65,0,0,3274,
        3275,5,76,0,0,3275,560,1,0,0,0,3276,3277,5,77,0,0,3277,3278,5,65,
        0,0,3278,3279,5,80,0,0,3279,562,1,0,0,0,3280,3281,5,77,0,0,3281,
        3282,5,65,0,0,3282,3283,5,84,0,0,3283,3284,5,67,0,0,3284,3285,5,
        72,0,0,3285,564,1,0,0,0,3286,3287,5,77,0,0,3287,3288,5,65,0,0,3288,
        3289,5,84,0,0,3289,3290,5,67,0,0,3290,3291,5,72,0,0,3291,3292,5,
        95,0,0,3292,3293,5,65,0,0,3293,3294,5,76,0,0,3294,3295,5,76,0,0,
        3295,566,1,0,0,0,3296,3297,5,77,0,0,3297,3298,5,65,0,0,3298,3299,
        5,84,0,0,3299,3300,5,67,0,0,3300,3301,5,72,0,0,3301,3302,5,95,0,
        0,3302,3303,5,65,0,0,3303,3304,5,78,0,0,3304,3305,5,89,0,0,3305,
        568,1,0,0,0,3306,3307,5,77,0,0,3307,3308,5,65,0,0,3308,3309,5,84,
        0,0,3309,3310,5,67,0,0,3310,3311,5,72,0,0,3311,3312,5,95,0,0,3312,
        3313,5,80,0,0,3313,3314,5,72,0,0,3314,3315,5,82,0,0,3315,3316,5,
        65,0,0,3316,3317,5,83,0,0,3317,3318,5,69,0,0,3318,570,1,0,0,0,3319,
        3320,5,77,0,0,3320,3321,5,65,0,0,3321,3322,5,84,0,0,3322,3323,5,
        67,0,0,3323,3324,5,72,0,0,3324,3325,5,95,0,0,3325,3326,5,80,0,0,
        3326,3327,5,72,0,0,3327,3328,5,82,0,0,3328,3329,5,65,0,0,3329,3330,
        5,83,0,0,3330,3331,5,69,0,0,3331,3332,5,95,0,0,3332,3333,5,69,0,
        0,3333,3334,5,68,0,0,3334,3335,5,71,0,0,3335,3336,5,69,0,0,3336,
        572,1,0,0,0,3337,3338,5,77,0,0,3338,3339,5,65,0,0,3339,3340,5,84,
        0,0,3340,3341,5,67,0,0,3341,3342,5,72,0,0,3342,3343,5,95,0,0,3343,
        3344,5,80,0,0,3344,3345,5,72,0,0,3345,3346,5,82,0,0,3346,3347,5,
        65,0,0,3347,3348,5,83,0,0,3348,3349,5,69,0,0,3349,3350,5,95,0,0,
        3350,3351,5,80,0,0,3351,3352,5,82,0,0,3352,3353,5,69,0,0,3353,3354,
        5,70,0,0,3354,3355,5,73,0,0,3355,3356,5,88,0,0,3356,574,1,0,0,0,
        3357,3358,5,77,0,0,3358,3359,5,65,0,0,3359,3360,5,84,0,0,3360,3361,
        5,67,0,0,3361,3362,5,72,0,0,3362,3363,5,95,0,0,3363,3364,5,82,0,
        0,3364,3365,5,69,0,0,3365,3366,5,71,0,0,3366,3367,5,69,0,0,3367,
        3368,5,88,0,0,3368,3369,5,80,0,0,3369,576,1,0,0,0,3370,3371,5,77,
        0,0,3371,3372,5,65,0,0,3372,3373,5,84,0,0,3373,3374,5,69,0,0,3374,
        3375,5,82,0,0,3375,3376,5,73,0,0,3376,3377,5,65,0,0,3377,3378,5,
        76,0,0,3378,3379,5,73,0,0,3379,3380,5,90,0,0,3380,3381,5,69,0,0,
        3381,3382,5,68,0,0,3382,578,1,0,0,0,3383,3384,5,77,0,0,3384,3385,
        5,65,0,0,3385,3386,5,88,0,0,3386,580,1,0,0,0,3387,3388,5,77,0,0,
        3388,3389,5,65,0,0,3389,3390,5,88,0,0,3390,3391,5,86,0,0,3391,3392,
        5,65,0,0,3392,3393,5,76,0,0,3393,3394,5,85,0,0,3394,3395,5,69,0,
        0,3395,582,1,0,0,0,3396,3397,5,77,0,0,3397,3398,5,69,0,0,3398,3399,
        5,77,0,0,3399,3400,5,79,0,0,3400,584,1,0,0,0,3401,3402,5,77,0,0,
        3402,3403,5,69,0,0,3403,3404,5,82,0,0,3404,3405,5,71,0,0,3405,3406,
        5,69,0,0,3406,586,1,0,0,0,3407,3408,5,77,0,0,3408,3409,5,73,0,0,
        3409,3410,5,71,0,0,3410,3411,5,82,0,0,3411,3412,5,65,0,0,3412,3413,
        5,84,0,0,3413,3414,5,69,0,0,3414,588,1,0,0,0,3415,3416,5,77,0,0,
        3416,3417,5,73,0,0,3417,3418,5,71,0,0,3418,3419,5,82,0,0,3419,3420,
        5,65,0,0,3420,3421,5,84,0,0,3421,3422,5,73,0,0,3422,3423,5,79,0,
        0,3423,3424,5,78,0,0,3424,3425,5,83,0,0,3425,590,1,0,0,0,3426,3427,
        5,77,0,0,3427,3428,5,73,0,0,3428,3429,5,78,0,0,3429,592,1,0,0,0,
        3430,3431,5,77,0,0,3431,3432,5,73,0,0,3432,3433,5,78,0,0,3433,3434,
        5,85,0,0,3434,3435,5,83,0,0,3435,594,1,0,0,0,3436,3437,5,77,0,0,
        3437,3438,5,73,0,0,3438,3439,5,78,0,0,3439,3440,5,85,0,0,3440,3441,
        5,84,0,0,3441,3442,5,69,0,0,3442,596,1,0,0,0,3443,3444,5,77,0,0,
        3444,3445,5,79,0,0,3445,3446,5,68,0,0,3446,3447,5,73,0,0,3447,3448,
        5,70,0,0,3448,3449,5,89,0,0,3449,598,1,0,0,0,3450,3451,5,77,0,0,
        3451,3452,5,79,0,0,3452,3453,5,78,0,0,3453,3454,5,84,0,0,3454,3455,
        5,72,0,0,3455,600,1,0,0,0,3456,3457,5,77,0,0,3457,3458,5,84,0,0,
        3458,3459,5,77,0,0,3459,3460,5,86,0,0,3460,602,1,0,0,0,3461,3462,
        5,78,0,0,3462,3463,5,65,0,0,3463,3464,5,77,0,0,3464,3465,5,69,0,
        0,3465,604,1,0,0,0,3466,3467,5,78,0,0,3467,3468,5,65,0,0,3468,3469,
        5,77,0,0,3469,3470,5,69,0,0,3470,3471,5,83,0,0,3471,606,1,0,0,0,
        3472,3473,5,78,0,0,3473,3474,5,65,0,0,3474,3475,5,84,0,0,3475,3476,
        5,85,0,0,3476,3477,5,82,0,0,3477,3478,5,65,0,0,3478,3479,5,76,0,
        0,3479,608,1,0,0,0,3480,3481,5,78,0,0,3481,3482,5,69,0,0,3482,3483,
        5,71,0,0,3483,3484,5,65,0,0,3484,3485,5,84,0,0,3485,3486,5,73,0,
        0,3486,3487,5,86,0,0,3487,3488,5,69,0,0,3488,610,1,0,0,0,3489,3490,
        5,78,0,0,3490,3491,5,69,0,0,3491,3492,5,86,0,0,3492,3493,5,69,0,
        0,3493,3494,5,82,0,0,3494,612,1,0,0,0,3495,3496,5,78,0,0,3496,3497,
        5,69,0,0,3497,3498,5,88,0,0,3498,3499,5,84,0,0,3499,614,1,0,0,0,
        3500,3501,5,78,0,0,3501,3502,5,71,0,0,3502,3503,5,82,0,0,3503,3504,
        5,65,0,0,3504,3505,5,77,0,0,3505,3506,5,95,0,0,3506,3507,5,66,0,
        0,3507,3508,5,70,0,0,3508,616,1,0,0,0,3509,3510,5,78,0,0,3510,3511,
        5,79,0,0,3511,618,1,0,0,0,3512,3513,5,78,0,0,3513,3514,5,79,0,0,
        3514,3515,5,78,0,0,3515,3516,5,95,0,0,3516,3517,5,78,0,0,3517,3518,
        5,85,0,0,3518,3519,5,76,0,0,3519,3520,5,76,0,0,3520,3521,5,65,0,
        0,3521,3522,5,66,0,0,3522,3523,5,76,0,0,3523,3524,5,69,0,0,3524,
        620,1,0,0,0,3525,3526,5,78,0,0,3526,3527,5,79,0,0,3527,3528,5,84,
        0,0,3528,622,1,0,0,0,3529,3530,5,78,0,0,3530,3531,5,85,0,0,3531,
        3532,5,76,0,0,3532,3533,5,76,0,0,3533,624,1,0,0,0,3534,3535,5,78,
        0,0,3535,3536,5,85,0,0,3536,3537,5,76,0,0,3537,3538,5,76,0,0,3538,
        3539,5,83,0,0,3539,626,1,0,0,0,3540,3541,5,79,0,0,3541,3542,5,66,
        0,0,3542,3543,5,83,0,0,3543,3544,5,69,0,0,3544,3545,5,82,0,0,3545,
        3546,5,86,0,0,3546,3547,5,69,0,0,3547,3548,5,82,0,0,3548,628,1,0,
        0,0,3549,3550,5,79,0,0,3550,3551,5,70,0,0,3551,630,1,0,0,0,3552,
        3553,5,79,0,0,3553,3554,5,70,0,0,3554,3555,5,70,0,0,3555,3556,5,
        83,0,0,3556,3557,5,69,0,0,3557,3558,5,84,0,0,3558,632,1,0,0,0,3559,
        3560,5,79,0,0,3560,3561,5,78,0,0,3561,634,1,0,0,0,3562,3563,5,79,
        0,0,3563,3564,5,78,0,0,3564,3565,5,76,0,0,3565,3566,5,89,0,0,3566,
        636,1,0,0,0,3567,3568,5,79,0,0,3568,3569,5,80,0,0,3569,3570,5,69,
        0,0,3570,3571,5,78,0,0,3571,638,1,0,0,0,3572,3573,5,79,0,0,3573,
        3574,5,80,0,0,3574,3575,5,84,0,0,3575,3576,5,73,0,0,3576,3577,5,
        77,0,0,3577,3578,5,73,0,0,3578,3579,5,90,0,0,3579,3580,5,69,0,0,
        3580,3581,5,68,0,0,3581,640,1,0,0,0,3582,3583,5,79,0,0,3583,3584,
        5,82,0,0,3584,642,1,0,0,0,3585,3586,5,79,0,0,3586,3587,5,82,0,0,
        3587,3588,5,68,0,0,3588,3589,5,69,0,0,3589,3590,5,82,0,0,3590,644,
        1,0,0,0,3591,3592,5,79,0,0,3592,3593,5,85,0,0,3593,3594,5,84,0,0,
        3594,3595,5,69,0,0,3595,3596,5,82,0,0,3596,646,1,0,0,0,3597,3598,
        5,79,0,0,3598,3599,5,85,0,0,3599,3600,5,84,0,0,3600,3601,5,70,0,
        0,3601,3602,5,73,0,0,3602,3603,5,76,0,0,3603,3604,5,69,0,0,3604,
        648,1,0,0,0,3605,3606,5,79,0,0,3606,3607,5,86,0,0,3607,3608,5,69,
        0,0,3608,3609,5,82,0,0,3609,650,1,0,0,0,3610,3611,5,79,0,0,3611,
        3612,5,86,0,0,3612,3613,5,69,0,0,3613,3614,5,82,0,0,3614,3615,5,
        87,0,0,3615,3616,5,82,0,0,3616,3617,5,73,0,0,3617,3618,5,84,0,0,
        3618,3619,5,69,0,0,3619,652,1,0,0,0,3620,3621,5,80,0,0,3621,3622,
        5,65,0,0,3622,3623,5,82,0,0,3623,3624,5,65,0,0,3624,3625,5,77,0,
        0,3625,3626,5,69,0,0,3626,3627,5,84,0,0,3627,3628,5,69,0,0,3628,
        3629,5,82,0,0,3629,654,1,0,0,0,3630,3631,5,80,0,0,3631,3632,5,65,
        0,0,3632,3633,5,82,0,0,3633,3634,5,83,0,0,3634,3635,5,69,0,0,3635,
        3636,5,68,0,0,3636,656,1,0,0,0,3637,3638,5,80,0,0,3638,3639,5,65,
        0,0,3639,3640,5,82,0,0,3640,3641,5,84,0,0,3641,3642,5,73,0,0,3642,
        3643,5,84,0,0,3643,3644,5,73,0,0,3644,3645,5,79,0,0,3645,3646,5,
        78,0,0,3646,658,1,0,0,0,3647,3648,5,80,0,0,3648,3649,5,65,0,0,3649,
        3650,5,82,0,0,3650,3651,5,84,0,0,3651,3652,5,73,0,0,3652,3653,5,
        84,0,0,3653,3654,5,73,0,0,3654,3655,5,79,0,0,3655,3656,5,78,0,0,
        3656,3657,5,83,0,0,3657,660,1,0,0,0,3658,3659,5,80,0,0,3659,3660,
        5,65,0,0,3660,3661,5,83,0,0,3661,3662,5,83,0,0,3662,3663,5,87,0,
        0,3663,3664,5,79,0,0,3664,3665,5,82,0,0,3665,3666,5,68,0,0,3666,
        662,1,0,0,0,3667,3668,5,80,0,0,3668,3669,5,65,0,0,3669,3670,5,83,
        0,0,3670,3671,5,83,0,0,3671,3672,5,87,0,0,3672,3673,5,79,0,0,3673,
        3674,5,82,0,0,3674,3675,5,68,0,0,3675,3676,5,95,0,0,3676,3677,5,
        69,0,0,3677,3678,5,88,0,0,3678,3679,5,80,0,0,3679,3680,5,73,0,0,
        3680,3681,5,82,0,0,3681,3682,5,69,0,0,3682,664,1,0,0,0,3683,3684,
        5,80,0,0,3684,3685,5,65,0,0,3685,3686,5,83,0,0,3686,3687,5,83,0,
        0,3687,3688,5,87,0,0,3688,3689,5,79,0,0,3689,3690,5,82,0,0,3690,
        3691,5,68,0,0,3691,3692,5,95,0,0,3692,3693,5,72,0,0,3693,3694,5,
        73,0,0,3694,3695,5,83,0,0,3695,3696,5,84,0,0,3696,3697,5,79,0,0,
        3697,3698,5,82,0,0,3698,3699,5,89,0,0,3699,666,1,0,0,0,3700,3701,
        5,80,0,0,3701,3702,5,65,0,0,3702,3703,5,83,0,0,3703,3704,5,83,0,
        0,3704,3705,5,87,0,0,3705,3706,5,79,0,0,3706,3707,5,82,0,0,3707,
        3708,5,68,0,0,3708,3709,5,95,0,0,3709,3710,5,76,0,0,3710,3711,5,
        79,0,0,3711,3712,5,67,0,0,3712,3713,5,75,0,0,3713,3714,5,95,0,0,
        3714,3715,5,84,0,0,3715,3716,5,73,0,0,3716,3717,5,77,0,0,3717,3718,
        5,69,0,0,3718,668,1,0,0,0,3719,3720,5,80,0,0,3720,3721,5,65,0,0,
        3721,3722,5,83,0,0,3722,3723,5,83,0,0,3723,3724,5,87,0,0,3724,3725,
        5,79,0,0,3725,3726,5,82,0,0,3726,3727,5,68,0,0,3727,3728,5,95,0,
        0,3728,3729,5,82,0,0,3729,3730,5,69,0,0,3730,3731,5,85,0,0,3731,
        3732,5,83,0,0,3732,3733,5,69,0,0,3733,670,1,0,0,0,3734,3735,5,80,
        0,0,3735,3736,5,65,0,0,3736,3737,5,84,0,0,3737,3738,5,72,0,0,3738,
        672,1,0,0,0,3739,3740,5,80,0,0,3740,3741,5,65,0,0,3741,3742,5,85,
        0,0,3742,3743,5,83,0,0,3743,3744,5,69,0,0,3744,674,1,0,0,0,3745,
        3746,5,80,0,0,3746,3747,5,69,0,0,3747,3748,5,82,0,0,3748,3749,5,
        67,0,0,3749,3750,5,69,0,0,3750,3751,5,78,0,0,3751,3752,5,84,0,0,
        3752,676,1,0,0,0,3753,3754,5,80,0,0,3754,3755,5,69,0,0,3755,3756,
        5,82,0,0,3756,3757,5,73,0,0,3757,3758,5,79,0,0,3758,3759,5,68,0,
        0,3759,678,1,0,0,0,3760,3761,5,80,0,0,3761,3762,5,69,0,0,3762,3763,
        5,82,0,0,3763,3764,5,77,0,0,3764,3765,5,73,0,0,3765,3766,5,83,0,
        0,3766,3767,5,83,0,0,3767,3768,5,73,0,0,3768,3769,5,86,0,0,3769,
        3770,5,69,0,0,3770,680,1,0,0,0,3771,3772,5,80,0,0,3772,3773,5,72,
        0,0,3773,3774,5,89,0,0,3774,3775,5,83,0,0,3775,3776,5,73,0,0,3776,
        3777,5,67,0,0,3777,3778,5,65,0,0,3778,3779,5,76,0,0,3779,682,1,0,
        0,0,3780,3781,5,80,0,0,3781,3782,5,73,0,0,3782,684,1,0,0,0,3783,
        3784,5,63,0,0,3784,686,1,0,0,0,3785,3786,5,80,0,0,3786,3787,5,76,
        0,0,3787,3788,5,65,0,0,3788,3789,5,78,0,0,3789,688,1,0,0,0,3790,
        3791,5,80,0,0,3791,3792,5,76,0,0,3792,3793,5,65,0,0,3793,3794,5,
        89,0,0,3794,690,1,0,0,0,3795,3796,5,80,0,0,3796,3797,5,82,0,0,3797,
        3798,5,73,0,0,3798,3799,5,86,0,0,3799,3800,5,73,0,0,3800,3801,5,
        76,0,0,3801,3802,5,69,0,0,3802,3803,5,71,0,0,3803,3804,5,69,0,0,
        3804,3805,5,83,0,0,3805,692,1,0,0,0,3806,3807,5,80,0,0,3807,3808,
        5,82,0,0,3808,3809,5,79,0,0,3809,3810,5,67,0,0,3810,3811,5,69,0,
        0,3811,3812,5,83,0,0,3812,3813,5,83,0,0,3813,694,1,0,0,0,3814,3815,
        5,80,0,0,3815,3816,5,76,0,0,3816,3817,5,85,0,0,3817,3818,5,71,0,
        0,3818,3819,5,73,0,0,3819,3820,5,78,0,0,3820,696,1,0,0,0,3821,3822,
        5,80,0,0,3822,3823,5,76,0,0,3823,3824,5,85,0,0,3824,3825,5,71,0,
        0,3825,3826,5,73,0,0,3826,3827,5,78,0,0,3827,3828,5,83,0,0,3828,
        698,1,0,0,0,3829,3830,5,80,0,0,3830,3831,5,79,0,0,3831,3832,5,76,
        0,0,3832,3833,5,73,0,0,3833,3834,5,67,0,0,3834,3835,5,89,0,0,3835,
        700,1,0,0,0,3836,3837,5,80,0,0,3837,3838,5,82,0,0,3838,3839,5,69,
        0,0,3839,3840,5,67,0,0,3840,3841,5,69,0,0,3841,3842,5,68,0,0,3842,
        3843,5,73,0,0,3843,3844,5,78,0,0,3844,3845,5,71,0,0,3845,702,1,0,
        0,0,3846,3847,5,80,0,0,3847,3848,5,82,0,0,3848,3849,5,69,0,0,3849,
        3850,5,80,0,0,3850,3851,5,65,0,0,3851,3852,5,82,0,0,3852,3853,5,
        69,0,0,3853,704,1,0,0,0,3854,3855,5,80,0,0,3855,3856,5,82,0,0,3856,
        3857,5,73,0,0,3857,3858,5,77,0,0,3858,3859,5,65,0,0,3859,3860,5,
        82,0,0,3860,3861,5,89,0,0,3861,706,1,0,0,0,3862,3863,5,80,0,0,3863,
        3864,5,82,0,0,3864,3865,5,79,0,0,3865,3866,5,67,0,0,3866,708,1,0,
        0,0,3867,3868,5,80,0,0,3868,3869,5,82,0,0,3869,3870,5,79,0,0,3870,
        3871,5,67,0,0,3871,3872,5,69,0,0,3872,3873,5,68,0,0,3873,3874,5,
        85,0,0,3874,3875,5,82,0,0,3875,3876,5,69,0,0,3876,710,1,0,0,0,3877,
        3878,5,80,0,0,3878,3879,5,82,0,0,3879,3880,5,79,0,0,3880,3881,5,
        67,0,0,3881,3882,5,69,0,0,3882,3883,5,83,0,0,3883,3884,5,83,0,0,
        3884,3885,5,76,0,0,3885,3886,5,73,0,0,3886,3887,5,83,0,0,3887,3888,
        5,84,0,0,3888,712,1,0,0,0,3889,3890,5,80,0,0,3890,3891,5,82,0,0,
        3891,3892,5,79,0,0,3892,3893,5,70,0,0,3893,3894,5,73,0,0,3894,3895,
        5,76,0,0,3895,3896,5,69,0,0,3896,714,1,0,0,0,3897,3898,5,80,0,0,
        3898,3899,5,82,0,0,3899,3900,5,79,0,0,3900,3901,5,80,0,0,3901,3902,
        5,69,0,0,3902,3903,5,82,0,0,3903,3904,5,84,0,0,3904,3905,5,73,0,
        0,3905,3906,5,69,0,0,3906,3907,5,83,0,0,3907,716,1,0,0,0,3908,3909,
        5,80,0,0,3909,3910,5,82,0,0,3910,3911,5,79,0,0,3911,3912,5,80,0,
        0,3912,3913,5,69,0,0,3913,3914,5,82,0,0,3914,3915,5,84,0,0,3915,
        3916,5,89,0,0,3916,718,1,0,0,0,3917,3918,5,81,0,0,3918,3919,5,85,
        0,0,3919,3920,5,65,0,0,3920,3921,5,78,0,0,3921,3922,5,84,0,0,3922,
        3923,5,73,0,0,3923,3924,5,76,0,0,3924,3925,5,69,0,0,3925,3926,5,
        95,0,0,3926,3927,5,83,0,0,3927,3928,5,84,0,0,3928,3929,5,65,0,0,
        3929,3930,5,84,0,0,3930,3931,5,69,0,0,3931,720,1,0,0,0,3932,3933,
        5,81,0,0,3933,3934,5,85,0,0,3934,3935,5,65,0,0,3935,3936,5,78,0,
        0,3936,3937,5,84,0,0,3937,3938,5,73,0,0,3938,3939,5,76,0,0,3939,
        3940,5,69,0,0,3940,3941,5,95,0,0,3941,3942,5,85,0,0,3942,3943,5,
        78,0,0,3943,3944,5,73,0,0,3944,3945,5,79,0,0,3945,3946,5,78,0,0,
        3946,722,1,0,0,0,3947,3948,5,81,0,0,3948,3949,5,85,0,0,3949,3950,
        5,69,0,0,3950,3951,5,82,0,0,3951,3952,5,89,0,0,3952,724,1,0,0,0,
        3953,3954,5,81,0,0,3954,3955,5,85,0,0,3955,3956,5,79,0,0,3956,3957,
        5,84,0,0,3957,3958,5,65,0,0,3958,726,1,0,0,0,3959,3960,5,81,0,0,
        3960,3961,5,85,0,0,3961,3962,5,65,0,0,3962,3963,5,76,0,0,3963,3964,
        5,73,0,0,3964,3965,5,70,0,0,3965,3966,5,89,0,0,3966,728,1,0,0,0,
        3967,3968,5,82,0,0,3968,3969,5,65,0,0,3969,3970,5,78,0,0,3970,3971,
        5,68,0,0,3971,3972,5,79,0,0,3972,3973,5,77,0,0,3973,730,1,0,0,0,
        3974,3975,5,82,0,0,3975,3976,5,65,0,0,3976,3977,5,78,0,0,3977,3978,
        5,71,0,0,3978,3979,5,69,0,0,3979,732,1,0,0,0,3980,3981,5,82,0,0,
        3981,3982,5,69,0,0,3982,3983,5,65,0,0,3983,3984,5,68,0,0,3984,734,
        1,0,0,0,3985,3986,5,82,0,0,3986,3987,5,69,0,0,3987,3988,5,65,0,0,
        3988,3989,5,76,0,0,3989,736,1,0,0,0,3990,3991,5,82,0,0,3991,3992,
        5,69,0,0,3992,3993,5,66,0,0,3993,3994,5,65,0,0,3994,3995,5,76,0,
        0,3995,3996,5,65,0,0,3996,3997,5,78,0,0,3997,3998,5,67,0,0,3998,
        3999,5,69,0,0,3999,738,1,0,0,0,4000,4001,5,82,0,0,4001,4002,5,69,
        0,0,4002,4003,5,67,0,0,4003,4004,5,69,0,0,4004,4005,5,78,0,0,4005,
        4006,5,84,0,0,4006,740,1,0,0,0,4007,4008,5,82,0,0,4008,4009,5,69,
        0,0,4009,4010,5,67,0,0,4010,4011,5,79,0,0,4011,4012,5,86,0,0,4012,
        4013,5,69,0,0,4013,4014,5,82,0,0,4014,742,1,0,0,0,4015,4016,5,82,
        0,0,4016,4017,5,69,0,0,4017,4018,5,67,0,0,4018,4019,5,89,0,0,4019,
        4020,5,67,0,0,4020,4021,5,76,0,0,4021,4022,5,69,0,0,4022,744,1,0,
        0,0,4023,4024,5,82,0,0,4024,4025,5,69,0,0,4025,4026,5,70,0,0,4026,
        4027,5,82,0,0,4027,4028,5,69,0,0,4028,4029,5,83,0,0,4029,4030,5,
        72,0,0,4030,746,1,0,0,0,4031,4032,5,82,0,0,4032,4033,5,69,0,0,4033,
        4034,5,70,0,0,4034,4035,5,69,0,0,4035,4036,5,82,0,0,4036,4037,5,
        69,0,0,4037,4038,5,78,0,0,4038,4039,5,67,0,0,4039,4040,5,69,0,0,
        4040,4041,5,83,0,0,4041,748,1,0,0,0,4042,4043,5,82,0,0,4043,4044,
        5,69,0,0,4044,4045,5,71,0,0,4045,4046,5,69,0,0,4046,4047,5,88,0,
        0,4047,4048,5,80,0,0,4048,750,1,0,0,0,4049,4050,5,82,0,0,4050,4051,
        5,69,0,0,4051,4052,5,76,0,0,4052,4053,5,69,0,0,4053,4054,5,65,0,
        0,4054,4055,5,83,0,0,4055,4056,5,69,0,0,4056,752,1,0,0,0,4057,4058,
        5,82,0,0,4058,4059,5,69,0,0,4059,4060,5,78,0,0,4060,4061,5,65,0,
        0,4061,4062,5,77,0,0,4062,4063,5,69,0,0,4063,754,1,0,0,0,4064,4065,
        5,82,0,0,4065,4066,5,69,0,0,4066,4067,5,80,0,0,4067,4068,5,65,0,
        0,4068,4069,5,73,0,0,4069,4070,5,82,0,0,4070,756,1,0,0,0,4071,4072,
        5,82,0,0,4072,4073,5,69,0,0,4073,4074,5,80,0,0,4074,4075,5,69,0,
        0,4075,4076,5,65,0,0,4076,4077,5,84,0,0,4077,4078,5,65,0,0,4078,
        4079,5,66,0,0,4079,4080,5,76,0,0,4080,4081,5,69,0,0,4081,758,1,0,
        0,0,4082,4083,5,82,0,0,4083,4084,5,69,0,0,4084,4085,5,80,0,0,4085,
        4086,5,76,0,0,4086,4087,5,65,0,0,4087,4088,5,67,0,0,4088,4089,5,
        69,0,0,4089,760,1,0,0,0,4090,4091,5,82,0,0,4091,4092,5,69,0,0,4092,
        4093,5,80,0,0,4093,4094,5,76,0,0,4094,4095,5,65,0,0,4095,4096,5,
        67,0,0,4096,4097,5,69,0,0,4097,4098,5,95,0,0,4098,4099,5,73,0,0,
        4099,4100,5,70,0,0,4100,4101,5,95,0,0,4101,4102,5,78,0,0,4102,4103,
        5,79,0,0,4103,4104,5,84,0,0,4104,4105,5,95,0,0,4105,4106,5,78,0,
        0,4106,4107,5,85,0,0,4107,4108,5,76,0,0,4108,4109,5,76,0,0,4109,
        762,1,0,0,0,4110,4111,5,82,0,0,4111,4112,5,69,0,0,4112,4113,5,80,
        0,0,4113,4114,5,76,0,0,4114,4115,5,65,0,0,4115,4116,5,89,0,0,4116,
        4117,5,69,0,0,4117,4118,5,82,0,0,4118,764,1,0,0,0,4119,4120,5,82,
        0,0,4120,4121,5,69,0,0,4121,4122,5,80,0,0,4122,4123,5,76,0,0,4123,
        4124,5,73,0,0,4124,4125,5,67,0,0,4125,4126,5,65,0,0,4126,766,1,0,
        0,0,4127,4128,5,82,0,0,4128,4129,5,69,0,0,4129,4130,5,80,0,0,4130,
        4131,5,79,0,0,4131,4132,5,83,0,0,4132,4133,5,73,0,0,4133,4134,5,
        84,0,0,4134,4135,5,79,0,0,4135,4136,5,82,0,0,4136,4137,5,73,0,0,
        4137,4138,5,69,0,0,4138,4139,5,83,0,0,4139,768,1,0,0,0,4140,4141,
        5,82,0,0,4141,4142,5,69,0,0,4142,4143,5,80,0,0,4143,4144,5,79,0,
        0,4144,4145,5,83,0,0,4145,4146,5,73,0,0,4146,4147,5,84,0,0,4147,
        4148,5,79,0,0,4148,4149,5,82,0,0,4149,4150,5,89,0,0,4150,770,1,0,
        0,0,4151,4152,5,82,0,0,4152,4153,5,69,0,0,4153,4154,5,83,0,0,4154,
        4155,5,79,0,0,4155,4156,5,85,0,0,4156,4157,5,82,0,0,4157,4158,5,
        67,0,0,4158,4159,5,69,0,0,4159,772,1,0,0,0,4160,4161,5,82,0,0,4161,
        4162,5,69,0,0,4162,4163,5,83,0,0,4163,4164,5,79,0,0,4164,4165,5,
        85,0,0,4165,4166,5,82,0,0,4166,4167,5,67,0,0,4167,4168,5,69,0,0,
        4168,4169,5,83,0,0,4169,774,1,0,0,0,4170,4171,5,82,0,0,4171,4172,
        5,69,0,0,4172,4173,5,83,0,0,4173,4174,5,84,0,0,4174,4175,5,79,0,
        0,4175,4176,5,82,0,0,4176,4177,5,69,0,0,4177,776,1,0,0,0,4178,4179,
        5,82,0,0,4179,4180,5,69,0,0,4180,4181,5,83,0,0,4181,4182,5,84,0,
        0,4182,4183,5,82,0,0,4183,4184,5,73,0,0,4184,4185,5,67,0,0,4185,
        4186,5,84,0,0,4186,4187,5,73,0,0,4187,4188,5,86,0,0,4188,4189,5,
        69,0,0,4189,778,1,0,0,0,4190,4191,5,82,0,0,4191,4192,5,69,0,0,4192,
        4193,5,83,0,0,4193,4194,5,85,0,0,4194,4195,5,77,0,0,4195,4196,5,
        69,0,0,4196,780,1,0,0,0,4197,4198,5,82,0,0,4198,4199,5,69,0,0,4199,
        4200,5,84,0,0,4200,4201,5,85,0,0,4201,4202,5,82,0,0,4202,4203,5,
        78,0,0,4203,4204,5,83,0,0,4204,782,1,0,0,0,4205,4206,5,82,0,0,4206,
        4207,5,69,0,0,4207,4208,5,86,0,0,4208,4209,5,79,0,0,4209,4210,5,
        75,0,0,4210,4211,5,69,0,0,4211,784,1,0,0,0,4212,4213,5,82,0,0,4213,
        4214,5,69,0,0,4214,4215,5,87,0,0,4215,4216,5,82,0,0,4216,4217,5,
        73,0,0,4217,4218,5,84,0,0,4218,4219,5,84,0,0,4219,4220,5,69,0,0,
        4220,4221,5,78,0,0,4221,786,1,0,0,0,4222,4223,5,82,0,0,4223,4224,
        5,73,0,0,4224,4225,5,71,0,0,4225,4226,5,72,0,0,4226,4227,5,84,0,
        0,4227,788,1,0,0,0,4228,4229,5,82,0,0,4229,4230,5,76,0,0,4230,4231,
        5,73,0,0,4231,4232,5,75,0,0,4232,4233,5,69,0,0,4233,790,1,0,0,0,
        4234,4235,5,82,0,0,4235,4236,5,79,0,0,4236,4237,5,76,0,0,4237,4238,
        5,69,0,0,4238,792,1,0,0,0,4239,4240,5,82,0,0,4240,4241,5,79,0,0,
        4241,4242,5,76,0,0,4242,4243,5,69,0,0,4243,4244,5,83,0,0,4244,794,
        1,0,0,0,4245,4246,5,82,0,0,4246,4247,5,79,0,0,4247,4248,5,76,0,0,
        4248,4249,5,76,0,0,4249,4250,5,66,0,0,4250,4251,5,65,0,0,4251,4252,
        5,67,0,0,4252,4253,5,75,0,0,4253,796,1,0,0,0,4254,4255,5,82,0,0,
        4255,4256,5,79,0,0,4256,4257,5,76,0,0,4257,4258,5,76,0,0,4258,4259,
        5,85,0,0,4259,4260,5,80,0,0,4260,798,1,0,0,0,4261,4262,5,82,0,0,
        4262,4263,5,79,0,0,4263,4264,5,85,0,0,4264,4265,5,84,0,0,4265,4266,
        5,73,0,0,4266,4267,5,78,0,0,4267,4268,5,69,0,0,4268,800,1,0,0,0,
        4269,4270,5,82,0,0,4270,4271,5,79,0,0,4271,4272,5,87,0,0,4272,802,
        1,0,0,0,4273,4274,5,82,0,0,4274,4275,5,79,0,0,4275,4276,5,87,0,0,
        4276,4277,5,83,0,0,4277,804,1,0,0,0,4278,4279,5,83,0,0,4279,4280,
        5,51,0,0,4280,806,1,0,0,0,4281,4282,5,83,0,0,4282,4283,5,65,0,0,
        4283,4284,5,77,0,0,4284,4285,5,80,0,0,4285,4286,5,76,0,0,4286,4287,
        5,69,0,0,4287,808,1,0,0,0,4288,4289,5,83,0,0,4289,4290,5,67,0,0,
        4290,4291,5,72,0,0,4291,4292,5,69,0,0,4292,4293,5,68,0,0,4293,4294,
        5,85,0,0,4294,4295,5,76,0,0,4295,4296,5,69,0,0,4296,810,1,0,0,0,
        4297,4298,5,83,0,0,4298,4299,5,67,0,0,4299,4300,5,72,0,0,4300,4301,
        5,69,0,0,4301,4302,5,68,0,0,4302,4303,5,85,0,0,4303,4304,5,76,0,
        0,4304,4305,5,69,0,0,4305,4306,5,82,0,0,4306,812,1,0,0,0,4307,4308,
        5,83,0,0,4308,4309,5,67,0,0,4309,4310,5,72,0,0,4310,4311,5,69,0,
        0,4311,4312,5,77,0,0,4312,4313,5,65,0,0,4313,814,1,0,0,0,4314,4315,
        5,83,0,0,4315,4316,5,67,0,0,4316,4317,5,72,0,0,4317,4318,5,69,0,
        0,4318,4319,5,77,0,0,4319,4320,5,65,0,0,4320,4321,5,83,0,0,4321,
        816,1,0,0,0,4322,4323,5,83,0,0,4323,4324,5,69,0,0,4324,4325,5,67,
        0,0,4325,4326,5,79,0,0,4326,4327,5,78,0,0,4327,4328,5,68,0,0,4328,
        818,1,0,0,0,4329,4330,5,83,0,0,4330,4331,5,69,0,0,4331,4332,5,76,
        0,0,4332,4333,5,69,0,0,4333,4334,5,67,0,0,4334,4335,5,84,0,0,4335,
        820,1,0,0,0,4336,4337,5,83,0,0,4337,4338,5,69,0,0,4338,4339,5,77,
        0,0,4339,4340,5,73,0,0,4340,822,1,0,0,0,4341,4342,5,83,0,0,4342,
        4343,5,69,0,0,4343,4344,5,81,0,0,4344,4345,5,85,0,0,4345,4346,5,
        69,0,0,4346,4347,5,78,0,0,4347,4348,5,67,0,0,4348,4349,5,69,0,0,
        4349,824,1,0,0,0,4350,4351,5,83,0,0,4351,4352,5,69,0,0,4352,4353,
        5,82,0,0,4353,4354,5,73,0,0,4354,4355,5,65,0,0,4355,4356,5,76,0,
        0,4356,4357,5,73,0,0,4357,4358,5,90,0,0,4358,4359,5,65,0,0,4359,
        4360,5,66,0,0,4360,4361,5,76,0,0,4361,4362,5,69,0,0,4362,826,1,0,
        0,0,4363,4364,5,83,0,0,4364,4365,5,69,0,0,4365,4366,5,83,0,0,4366,
        4367,5,83,0,0,4367,4368,5,73,0,0,4368,4369,5,79,0,0,4369,4370,5,
        78,0,0,4370,828,1,0,0,0,4371,4372,5,83,0,0,4372,4373,5,69,0,0,4373,
        4374,5,83,0,0,4374,4375,5,83,0,0,4375,4376,5,73,0,0,4376,4377,5,
        79,0,0,4377,4378,5,78,0,0,4378,4379,5,95,0,0,4379,4380,5,85,0,0,
        4380,4381,5,83,0,0,4381,4382,5,69,0,0,4382,4383,5,82,0,0,4383,830,
        1,0,0,0,4384,4385,5,83,0,0,4385,4386,5,69,0,0,4386,4387,5,84,0,0,
        4387,832,1,0,0,0,4388,4389,5,83,0,0,4389,4390,5,69,0,0,4390,4391,
        5,84,0,0,4391,4392,5,83,0,0,4392,834,1,0,0,0,4393,4394,5,83,0,0,
        4394,4395,5,69,0,0,4395,4396,5,84,0,0,4396,4397,5,95,0,0,4397,4398,
        5,83,0,0,4398,4399,5,69,0,0,4399,4400,5,83,0,0,4400,4401,5,83,0,
        0,4401,4402,5,73,0,0,4402,4403,5,79,0,0,4403,4404,5,78,0,0,4404,
        4405,5,95,0,0,4405,4406,5,86,0,0,4406,4407,5,65,0,0,4407,4408,5,
        82,0,0,4408,4409,5,73,0,0,4409,4410,5,65,0,0,4410,4411,5,66,0,0,
        4411,4412,5,76,0,0,4412,4413,5,69,0,0,4413,836,1,0,0,0,4414,4415,
        5,83,0,0,4415,4416,5,72,0,0,4416,4417,5,65,0,0,4417,4418,5,80,0,
        0,4418,4419,5,69,0,0,4419,838,1,0,0,0,4420,4421,5,83,0,0,4421,4422,
        5,72,0,0,4422,4423,5,79,0,0,4423,4424,5,87,0,0,4424,840,1,0,0,0,
        4425,4426,5,83,0,0,4426,4427,5,73,0,0,4427,4428,5,71,0,0,4428,4429,
        5,78,0,0,4429,4430,5,69,0,0,4430,4431,5,68,0,0,4431,842,1,0,0,0,
        4432,4433,5,83,0,0,4433,4434,5,75,0,0,4434,4435,5,69,0,0,4435,4436,
        5,87,0,0,4436,844,1,0,0,0,4437,4438,5,83,0,0,4438,4439,5,77,0,0,
        4439,4440,5,65,0,0,4440,4441,5,76,0,0,4441,4442,5,76,0,0,4442,4443,
        5,73,0,0,4443,4444,5,78,0,0,4444,4445,5,84,0,0,4445,846,1,0,0,0,
        4446,4447,5,83,0,0,4447,4448,5,78,0,0,4448,4449,5,65,0,0,4449,4450,
        5,80,0,0,4450,4451,5,83,0,0,4451,4452,5,72,0,0,4452,4453,5,79,0,
        0,4453,4454,5,84,0,0,4454,848,1,0,0,0,4455,4456,5,83,0,0,4456,4457,
        5,79,0,0,4457,4458,5,78,0,0,4458,4459,5,65,0,0,4459,4460,5,77,0,
        0,4460,4461,5,69,0,0,4461,850,1,0,0,0,4462,4463,5,83,0,0,4463,4464,
        5,80,0,0,4464,4465,5,76,0,0,4465,4466,5,73,0,0,4466,4467,5,84,0,
        0,4467,852,1,0,0,0,4468,4469,5,83,0,0,4469,4470,5,81,0,0,4470,4471,
        5,76,0,0,4471,854,1,0,0,0,4472,4473,5,83,0,0,4473,4474,5,81,0,0,
        4474,4475,5,76,0,0,4475,4476,5,95,0,0,4476,4477,5,66,0,0,4477,4478,
        5,76,0,0,4478,4479,5,79,0,0,4479,4480,5,67,0,0,4480,4481,5,75,0,
        0,4481,4482,5,95,0,0,4482,4483,5,82,0,0,4483,4484,5,85,0,0,4484,
        4485,5,76,0,0,4485,4486,5,69,0,0,4486,856,1,0,0,0,4487,4488,5,83,
        0,0,4488,4489,5,84,0,0,4489,4490,5,65,0,0,4490,4491,5,71,0,0,4491,
        4492,5,69,0,0,4492,858,1,0,0,0,4493,4494,5,83,0,0,4494,4495,5,84,
        0,0,4495,4496,5,65,0,0,4496,4497,5,71,0,0,4497,4498,5,69,0,0,4498,
        4499,5,83,0,0,4499,860,1,0,0,0,4500,4501,5,83,0,0,4501,4502,5,84,
        0,0,4502,4503,5,65,0,0,4503,4504,5,82,0,0,4504,4505,5,84,0,0,4505,
        862,1,0,0,0,4506,4507,5,83,0,0,4507,4508,5,84,0,0,4508,4509,5,65,
        0,0,4509,4510,5,82,0,0,4510,4511,5,84,0,0,4511,4512,5,83,0,0,4512,
        864,1,0,0,0,4513,4514,5,83,0,0,4514,4515,5,84,0,0,4515,4516,5,65,
        0,0,4516,4517,5,84,0,0,4517,4518,5,83,0,0,4518,866,1,0,0,0,4519,
        4520,5,83,0,0,4520,4521,5,84,0,0,4521,4522,5,65,0,0,4522,4523,5,
        84,0,0,4523,4524,5,85,0,0,4524,4525,5,83,0,0,4525,868,1,0,0,0,4526,
        4527,5,83,0,0,4527,4528,5,84,0,0,4528,4529,5,79,0,0,4529,4530,5,
        80,0,0,4530,870,1,0,0,0,4531,4532,5,83,0,0,4532,4533,5,84,0,0,4533,
        4534,5,79,0,0,4534,4535,5,82,0,0,4535,4536,5,65,0,0,4536,4537,5,
        71,0,0,4537,4538,5,69,0,0,4538,872,1,0,0,0,4539,4540,5,83,0,0,4540,
        4541,5,84,0,0,4541,4542,5,82,0,0,4542,4543,5,69,0,0,4543,4544,5,
        65,0,0,4544,4545,5,77,0,0,4545,874,1,0,0,0,4546,4547,5,83,0,0,4547,
        4548,5,84,0,0,4548,4549,5,82,0,0,4549,4550,5,69,0,0,4550,4551,5,
        65,0,0,4551,4552,5,77,0,0,4552,4553,5,73,0,0,4553,4554,5,78,0,0,
        4554,4555,5,71,0,0,4555,876,1,0,0,0,4556,4557,5,83,0,0,4557,4558,
        5,84,0,0,4558,4559,5,82,0,0,4559,4560,5,73,0,0,4560,4561,5,78,0,
        0,4561,4562,5,71,0,0,4562,878,1,0,0,0,4563,4564,5,83,0,0,4564,4565,
        5,84,0,0,4565,4566,5,82,0,0,4566,4567,5,85,0,0,4567,4568,5,67,0,
        0,4568,4569,5,84,0,0,4569,880,1,0,0,0,4570,4571,5,83,0,0,4571,4572,
        5,85,0,0,4572,4573,5,66,0,0,4573,4574,5,68,0,0,4574,4575,5,65,0,
        0,4575,4576,5,84,0,0,4576,4577,5,69,0,0,4577,882,1,0,0,0,4578,4579,
        5,83,0,0,4579,4580,5,85,0,0,4580,4581,5,77,0,0,4581,884,1,0,0,0,
        4582,4583,5,83,0,0,4583,4584,5,85,0,0,4584,4585,5,80,0,0,4585,4586,
        5,69,0,0,4586,4587,5,82,0,0,4587,4588,5,85,0,0,4588,4589,5,83,0,
        0,4589,4590,5,69,0,0,4590,4591,5,82,0,0,4591,886,1,0,0,0,4592,4593,
        5,83,0,0,4593,4594,5,87,0,0,4594,4595,5,73,0,0,4595,4596,5,84,0,
        0,4596,4597,5,67,0,0,4597,4598,5,72,0,0,4598,888,1,0,0,0,4599,4600,
        5,83,0,0,4600,4601,5,89,0,0,4601,4602,5,78,0,0,4602,4603,5,67,0,
        0,4603,890,1,0,0,0,4604,4605,5,83,0,0,4605,4606,5,89,0,0,4606,4607,
        5,83,0,0,4607,4608,5,84,0,0,4608,4609,5,69,0,0,4609,4610,5,77,0,
        0,4610,892,1,0,0,0,4611,4612,5,84,0,0,4612,4613,5,65,0,0,4613,4614,
        5,66,0,0,4614,4615,5,76,0,0,4615,4616,5,69,0,0,4616,894,1,0,0,0,
        4617,4618,5,84,0,0,4618,4619,5,65,0,0,4619,4620,5,66,0,0,4620,4621,
        5,76,0,0,4621,4622,5,69,0,0,4622,4623,5,83,0,0,4623,896,1,0,0,0,
        4624,4625,5,84,0,0,4625,4626,5,65,0,0,4626,4627,5,66,0,0,4627,4628,
        5,76,0,0,4628,4629,5,69,0,0,4629,4630,5,83,0,0,4630,4631,5,65,0,
        0,4631,4632,5,77,0,0,4632,4633,5,80,0,0,4633,4634,5,76,0,0,4634,
        4635,5,69,0,0,4635,898,1,0,0,0,4636,4637,5,84,0,0,4637,4638,5,65,
        0,0,4638,4639,5,66,0,0,4639,4640,5,76,0,0,4640,4641,5,69,0,0,4641,
        4642,5,84,0,0,4642,900,1,0,0,0,4643,4644,5,84,0,0,4644,4645,5,65,
        0,0,4645,4646,5,66,0,0,4646,4647,5,76,0,0,4647,4648,5,69,0,0,4648,
        4649,5,84,0,0,4649,4650,5,83,0,0,4650,902,1,0,0,0,4651,4652,5,84,
        0,0,4652,4653,5,65,0,0,4653,4654,5,83,0,0,4654,4655,5,75,0,0,4655,
        904,1,0,0,0,4656,4657,5,84,0,0,4657,4658,5,65,0,0,4658,4659,5,83,
        0,0,4659,4660,5,75,0,0,4660,4661,5,83,0,0,4661,906,1,0,0,0,4662,
        4663,5,84,0,0,4663,4664,5,69,0,0,4664,4665,5,77,0,0,4665,4666,5,
        80,0,0,4666,4667,5,79,0,0,4667,4668,5,82,0,0,4668,4669,5,65,0,0,
        4669,4670,5,82,0,0,4670,4671,5,89,0,0,4671,908,1,0,0,0,4672,4673,
        5,84,0,0,4673,4674,5,69,0,0,4674,4675,5,82,0,0,4675,4676,5,77,0,
        0,4676,4677,5,73,0,0,4677,4678,5,78,0,0,4678,4679,5,65,0,0,4679,
        4680,5,84,0,0,4680,4681,5,69,0,0,4681,4682,5,68,0,0,4682,910,1,0,
        0,0,4683,4684,5,84,0,0,4684,4685,5,69,0,0,4685,4686,5,88,0,0,4686,
        4687,5,84,0,0,4687,912,1,0,0,0,4688,4689,5,84,0,0,4689,4690,5,72,
        0,0,4690,4691,5,65,0,0,4691,4692,5,78,0,0,4692,914,1,0,0,0,4693,
        4694,5,84,0,0,4694,4695,5,72,0,0,4695,4696,5,69,0,0,4696,4697,5,
        78,0,0,4697,916,1,0,0,0,4698,4699,5,84,0,0,4699,4700,5,73,0,0,4700,
        4701,5,77,0,0,4701,4702,5,69,0,0,4702,918,1,0,0,0,4703,4704,5,84,
        0,0,4704,4705,5,73,0,0,4705,4706,5,77,0,0,4706,4707,5,69,0,0,4707,
        4708,5,83,0,0,4708,4709,5,84,0,0,4709,4710,5,65,0,0,4710,4711,5,
        77,0,0,4711,4712,5,80,0,0,4712,920,1,0,0,0,4713,4714,5,84,0,0,4714,
        4715,5,73,0,0,4715,4716,5,77,0,0,4716,4717,5,69,0,0,4717,4718,5,
        83,0,0,4718,4719,5,84,0,0,4719,4720,5,65,0,0,4720,4721,5,77,0,0,
        4721,4722,5,80,0,0,4722,4723,5,65,0,0,4723,4724,5,68,0,0,4724,4725,
        5,68,0,0,4725,922,1,0,0,0,4726,4727,5,84,0,0,4727,4728,5,73,0,0,
        4728,4729,5,77,0,0,4729,4730,5,69,0,0,4730,4731,5,83,0,0,4731,4732,
        5,84,0,0,4732,4733,5,65,0,0,4733,4734,5,77,0,0,4734,4735,5,80,0,
        0,4735,4736,5,68,0,0,4736,4737,5,73,0,0,4737,4738,5,70,0,0,4738,
        4739,5,70,0,0,4739,924,1,0,0,0,4740,4741,5,84,0,0,4741,4742,5,73,
        0,0,4742,4743,5,78,0,0,4743,4744,5,89,0,0,4744,4745,5,73,0,0,4745,
        4746,5,78,0,0,4746,4747,5,84,0,0,4747,926,1,0,0,0,4748,4749,5,84,
        0,0,4749,4750,5,79,0,0,4750,928,1,0,0,0,4751,4752,5,84,0,0,4752,
        4753,5,82,0,0,4753,4754,5,65,0,0,4754,4755,5,78,0,0,4755,4756,5,
        83,0,0,4756,4757,5,65,0,0,4757,4758,5,67,0,0,4758,4759,5,84,0,0,
        4759,4760,5,73,0,0,4760,4761,5,79,0,0,4761,4762,5,78,0,0,4762,930,
        1,0,0,0,4763,4764,5,84,0,0,4764,4765,5,82,0,0,4765,4766,5,65,0,0,
        4766,4767,5,83,0,0,4767,4768,5,72,0,0,4768,932,1,0,0,0,4769,4770,
        5,84,0,0,4770,4771,5,82,0,0,4771,4772,5,69,0,0,4772,4773,5,69,0,
        0,4773,934,1,0,0,0,4774,4775,5,84,0,0,4775,4776,5,82,0,0,4776,4777,
        5,73,0,0,4777,4778,5,71,0,0,4778,4779,5,71,0,0,4779,4780,5,69,0,
        0,4780,4781,5,82,0,0,4781,4782,5,83,0,0,4782,936,1,0,0,0,4783,4784,
        5,84,0,0,4784,4785,5,82,0,0,4785,4786,5,73,0,0,4786,4787,5,77,0,
        0,4787,938,1,0,0,0,4788,4789,5,84,0,0,4789,4790,5,82,0,0,4790,4791,
        5,85,0,0,4791,4792,5,69,0,0,4792,940,1,0,0,0,4793,4794,5,84,0,0,
        4794,4795,5,82,0,0,4795,4796,5,85,0,0,4796,4797,5,78,0,0,4797,4798,
        5,67,0,0,4798,4799,5,65,0,0,4799,4800,5,84,0,0,4800,4801,5,69,0,
        0,4801,942,1,0,0,0,4802,4803,5,84,0,0,4803,4804,5,89,0,0,4804,4805,
        5,80,0,0,4805,4806,5,69,0,0,4806,944,1,0,0,0,4807,4808,5,84,0,0,
        4808,4809,5,89,0,0,4809,4810,5,80,0,0,4810,4811,5,69,0,0,4811,4812,
        5,95,0,0,4812,4813,5,67,0,0,4813,4814,5,65,0,0,4814,4815,5,83,0,
        0,4815,4816,5,84,0,0,4816,946,1,0,0,0,4817,4818,5,84,0,0,4818,4819,
        5,89,0,0,4819,4820,5,80,0,0,4820,4821,5,69,0,0,4821,4822,5,83,0,
        0,4822,948,1,0,0,0,4823,4824,5,85,0,0,4824,4825,5,78,0,0,4825,4826,
        5,66,0,0,4826,4827,5,79,0,0,4827,4828,5,85,0,0,4828,4829,5,78,0,
        0,4829,4830,5,68,0,0,4830,4831,5,69,0,0,4831,4832,5,68,0,0,4832,
        950,1,0,0,0,4833,4834,5,85,0,0,4834,4835,5,78,0,0,4835,4836,5,67,
        0,0,4836,4837,5,79,0,0,4837,4838,5,77,0,0,4838,4839,5,77,0,0,4839,
        4840,5,73,0,0,4840,4841,5,84,0,0,4841,4842,5,84,0,0,4842,4843,5,
        69,0,0,4843,4844,5,68,0,0,4844,952,1,0,0,0,4845,4846,5,85,0,0,4846,
        4847,5,78,0,0,4847,4848,5,73,0,0,4848,4849,5,78,0,0,4849,4850,5,
        83,0,0,4850,4851,5,84,0,0,4851,4852,5,65,0,0,4852,4853,5,76,0,0,
        4853,4854,5,76,0,0,4854,954,1,0,0,0,4855,4856,5,85,0,0,4856,4857,
        5,78,0,0,4857,4858,5,73,0,0,4858,4859,5,79,0,0,4859,4860,5,78,0,
        0,4860,956,1,0,0,0,4861,4862,5,85,0,0,4862,4863,5,78,0,0,4863,4864,
        5,73,0,0,4864,4865,5,81,0,0,4865,4866,5,85,0,0,4866,4867,5,69,0,
        0,4867,958,1,0,0,0,4868,4869,5,85,0,0,4869,4870,5,78,0,0,4870,4871,
        5,76,0,0,4871,4872,5,79,0,0,4872,4873,5,67,0,0,4873,4874,5,75,0,
        0,4874,960,1,0,0,0,4875,4876,5,85,0,0,4876,4877,5,78,0,0,4877,4878,
        5,83,0,0,4878,4879,5,69,0,0,4879,4880,5,84,0,0,4880,962,1,0,0,0,
        4881,4882,5,85,0,0,4882,4883,5,78,0,0,4883,4884,5,83,0,0,4884,4885,
        5,73,0,0,4885,4886,5,71,0,0,4886,4887,5,78,0,0,4887,4888,5,69,0,
        0,4888,4889,5,68,0,0,4889,964,1,0,0,0,4890,4891,5,85,0,0,4891,4892,
        5,80,0,0,4892,966,1,0,0,0,4893,4894,5,85,0,0,4894,4895,5,80,0,0,
        4895,4896,5,68,0,0,4896,4897,5,65,0,0,4897,4898,5,84,0,0,4898,4899,
        5,69,0,0,4899,968,1,0,0,0,4900,4901,5,85,0,0,4901,4902,5,83,0,0,
        4902,4903,5,69,0,0,4903,970,1,0,0,0,4904,4905,5,85,0,0,4905,4906,
        5,83,0,0,4906,4907,5,69,0,0,4907,4908,5,82,0,0,4908,972,1,0,0,0,
        4909,4910,5,85,0,0,4910,4911,5,83,0,0,4911,4912,5,73,0,0,4912,4913,
        5,78,0,0,4913,4914,5,71,0,0,4914,974,1,0,0,0,4915,4916,5,86,0,0,
        4916,4917,5,65,0,0,4917,4918,5,76,0,0,4918,4919,5,85,0,0,4919,4920,
        5,69,0,0,4920,976,1,0,0,0,4921,4922,5,86,0,0,4922,4923,5,65,0,0,
        4923,4924,5,76,0,0,4924,4925,5,85,0,0,4925,4926,5,69,0,0,4926,4927,
        5,83,0,0,4927,978,1,0,0,0,4928,4929,5,86,0,0,4929,4930,5,65,0,0,
        4930,4931,5,82,0,0,4931,4932,5,67,0,0,4932,4933,5,72,0,0,4933,4934,
        5,65,0,0,4934,4935,5,82,0,0,4935,980,1,0,0,0,4936,4937,5,86,0,0,
        4937,4938,5,65,0,0,4938,4939,5,82,0,0,4939,4940,5,73,0,0,4940,4941,
        5,65,0,0,4941,4942,5,66,0,0,4942,4943,5,76,0,0,4943,4944,5,69,0,
        0,4944,982,1,0,0,0,4945,4946,5,86,0,0,4946,4947,5,65,0,0,4947,4948,
        5,82,0,0,4948,4949,5,73,0,0,4949,4950,5,65,0,0,4950,4951,5,66,0,
        0,4951,4952,5,76,0,0,4952,4953,5,69,0,0,4953,4954,5,83,0,0,4954,
        984,1,0,0,0,4955,4956,5,86,0,0,4956,4957,5,65,0,0,4957,4958,5,82,
        0,0,4958,4959,5,73,0,0,4959,4960,5,65,0,0,4960,4961,5,78,0,0,4961,
        4962,5,84,0,0,4962,986,1,0,0,0,4963,4964,5,86,0,0,4964,4965,5,65,
        0,0,4965,4966,5,85,0,0,4966,4967,5,76,0,0,4967,4968,5,84,0,0,4968,
        988,1,0,0,0,4969,4970,5,86,0,0,4970,4971,5,65,0,0,4971,4972,5,85,
        0,0,4972,4973,5,76,0,0,4973,4974,5,84,0,0,4974,4975,5,83,0,0,4975,
        990,1,0,0,0,4976,4977,5,86,0,0,4977,4978,5,69,0,0,4978,4979,5,82,
        0,0,4979,4980,5,66,0,0,4980,4981,5,79,0,0,4981,4982,5,83,0,0,4982,
        4983,5,69,0,0,4983,992,1,0,0,0,4984,4985,5,86,0,0,4985,4986,5,69,
        0,0,4986,4987,5,82,0,0,4987,4988,5,83,0,0,4988,4989,5,73,0,0,4989,
        4990,5,79,0,0,4990,4991,5,78,0,0,4991,994,1,0,0,0,4992,4993,5,86,
        0,0,4993,4994,5,73,0,0,4994,4995,5,69,0,0,4995,4996,5,87,0,0,4996,
        996,1,0,0,0,4997,4998,5,86,0,0,4998,4999,5,73,0,0,4999,5000,5,69,
        0,0,5000,5001,5,87,0,0,5001,5002,5,83,0,0,5002,998,1,0,0,0,5003,
        5004,5,87,0,0,5004,5005,5,65,0,0,5005,5006,5,82,0,0,5006,5007,5,
        77,0,0,5007,1000,1,0,0,0,5008,5009,5,87,0,0,5009,5010,5,65,0,0,5010,
        5011,5,82,0,0,5011,5012,5,78,0,0,5012,5013,5,73,0,0,5013,5014,5,
        78,0,0,5014,5015,5,71,0,0,5015,5016,5,83,0,0,5016,1002,1,0,0,0,5017,
        5018,5,87,0,0,5018,5019,5,69,0,0,5019,5020,5,69,0,0,5020,5021,5,
        75,0,0,5021,1004,1,0,0,0,5022,5023,5,87,0,0,5023,5024,5,72,0,0,5024,
        5025,5,69,0,0,5025,5026,5,78,0,0,5026,1006,1,0,0,0,5027,5028,5,87,
        0,0,5028,5029,5,72,0,0,5029,5030,5,69,0,0,5030,5031,5,82,0,0,5031,
        5032,5,69,0,0,5032,1008,1,0,0,0,5033,5034,5,87,0,0,5034,5035,5,72,
        0,0,5035,5036,5,73,0,0,5036,5037,5,84,0,0,5037,5038,5,69,0,0,5038,
        5039,5,76,0,0,5039,5040,5,73,0,0,5040,5041,5,83,0,0,5041,5042,5,
        84,0,0,5042,1010,1,0,0,0,5043,5044,5,87,0,0,5044,5045,5,73,0,0,5045,
        5046,5,84,0,0,5046,5047,5,72,0,0,5047,1012,1,0,0,0,5048,5049,5,87,
        0,0,5049,5050,5,79,0,0,5050,5051,5,82,0,0,5051,5052,5,75,0,0,5052,
        1014,1,0,0,0,5053,5054,5,87,0,0,5054,5055,5,79,0,0,5055,5056,5,82,
        0,0,5056,5057,5,75,0,0,5057,5058,5,76,0,0,5058,5059,5,79,0,0,5059,
        5060,5,65,0,0,5060,5061,5,68,0,0,5061,1016,1,0,0,0,5062,5063,5,87,
        0,0,5063,5064,5,82,0,0,5064,5065,5,73,0,0,5065,5066,5,84,0,0,5066,
        5067,5,69,0,0,5067,1018,1,0,0,0,5068,5069,5,88,0,0,5069,5070,5,79,
        0,0,5070,5071,5,82,0,0,5071,1020,1,0,0,0,5072,5073,5,89,0,0,5073,
        5074,5,69,0,0,5074,5075,5,65,0,0,5075,5076,5,82,0,0,5076,1022,1,
        0,0,0,5077,5081,5,61,0,0,5078,5079,5,61,0,0,5079,5081,5,61,0,0,5080,
        5077,1,0,0,0,5080,5078,1,0,0,0,5081,1024,1,0,0,0,5082,5083,5,60,
        0,0,5083,5084,5,61,0,0,5084,5085,5,62,0,0,5085,1026,1,0,0,0,5086,
        5087,5,60,0,0,5087,5091,5,62,0,0,5088,5089,5,33,0,0,5089,5091,5,
        61,0,0,5090,5086,1,0,0,0,5090,5088,1,0,0,0,5091,1028,1,0,0,0,5092,
        5093,5,60,0,0,5093,1030,1,0,0,0,5094,5095,5,60,0,0,5095,5099,5,61,
        0,0,5096,5097,5,33,0,0,5097,5099,5,62,0,0,5098,5094,1,0,0,0,5098,
        5096,1,0,0,0,5099,1032,1,0,0,0,5100,5101,5,62,0,0,5101,1034,1,0,
        0,0,5102,5103,5,62,0,0,5103,5107,5,61,0,0,5104,5105,5,33,0,0,5105,
        5107,5,60,0,0,5106,5102,1,0,0,0,5106,5104,1,0,0,0,5107,1036,1,0,
        0,0,5108,5109,5,43,0,0,5109,1038,1,0,0,0,5110,5111,5,45,0,0,5111,
        1040,1,0,0,0,5112,5113,5,42,0,0,5113,1042,1,0,0,0,5114,5115,5,47,
        0,0,5115,1044,1,0,0,0,5116,5117,5,37,0,0,5117,1046,1,0,0,0,5118,
        5119,5,126,0,0,5119,1048,1,0,0,0,5120,5121,5,38,0,0,5121,1050,1,
        0,0,0,5122,5123,5,38,0,0,5123,5124,5,38,0,0,5124,1052,1,0,0,0,5125,
        5126,5,33,0,0,5126,1054,1,0,0,0,5127,5128,5,124,0,0,5128,1056,1,
        0,0,0,5129,5130,5,124,0,0,5130,5131,5,124,0,0,5131,1058,1,0,0,0,
        5132,5133,5,94,0,0,5133,1060,1,0,0,0,5134,5135,5,58,0,0,5135,1062,
        1,0,0,0,5136,5137,5,45,0,0,5137,5138,5,62,0,0,5138,1064,1,0,0,0,
        5139,5140,5,47,0,0,5140,5141,5,42,0,0,5141,5142,5,43,0,0,5142,1066,
        1,0,0,0,5143,5144,5,42,0,0,5144,5145,5,47,0,0,5145,1068,1,0,0,0,
        5146,5147,5,47,0,0,5147,5148,5,42,0,0,5148,1070,1,0,0,0,5149,5150,
        5,64,0,0,5150,1072,1,0,0,0,5151,5152,5,64,0,0,5152,5153,5,64,0,0,
        5153,1074,1,0,0,0,5154,5162,5,39,0,0,5155,5156,5,92,0,0,5156,5161,
        9,0,0,0,5157,5158,5,39,0,0,5158,5161,5,39,0,0,5159,5161,8,0,0,0,
        5160,5155,1,0,0,0,5160,5157,1,0,0,0,5160,5159,1,0,0,0,5161,5164,
        1,0,0,0,5162,5160,1,0,0,0,5162,5163,1,0,0,0,5163,5165,1,0,0,0,5164,
        5162,1,0,0,0,5165,5199,5,39,0,0,5166,5174,5,34,0,0,5167,5168,5,92,
        0,0,5168,5173,9,0,0,0,5169,5170,5,34,0,0,5170,5173,5,34,0,0,5171,
        5173,8,1,0,0,5172,5167,1,0,0,0,5172,5169,1,0,0,0,5172,5171,1,0,0,
        0,5173,5176,1,0,0,0,5174,5172,1,0,0,0,5174,5175,1,0,0,0,5175,5177,
        1,0,0,0,5176,5174,1,0,0,0,5177,5199,5,34,0,0,5178,5179,5,82,0,0,
        5179,5180,5,39,0,0,5180,5184,1,0,0,0,5181,5183,8,2,0,0,5182,5181,
        1,0,0,0,5183,5186,1,0,0,0,5184,5182,1,0,0,0,5184,5185,1,0,0,0,5185,
        5187,1,0,0,0,5186,5184,1,0,0,0,5187,5199,5,39,0,0,5188,5189,5,82,
        0,0,5189,5190,5,34,0,0,5190,5194,1,0,0,0,5191,5193,8,3,0,0,5192,
        5191,1,0,0,0,5193,5196,1,0,0,0,5194,5192,1,0,0,0,5194,5195,1,0,0,
        0,5195,5197,1,0,0,0,5196,5194,1,0,0,0,5197,5199,5,34,0,0,5198,5154,
        1,0,0,0,5198,5166,1,0,0,0,5198,5178,1,0,0,0,5198,5188,1,0,0,0,5199,
        1076,1,0,0,0,5200,5205,3,17,8,0,5201,5205,3,19,9,0,5202,5205,3,13,
        6,0,5203,5205,3,15,7,0,5204,5200,1,0,0,0,5204,5201,1,0,0,0,5204,
        5202,1,0,0,0,5204,5203,1,0,0,0,5205,1078,1,0,0,0,5206,5208,3,1101,
        550,0,5207,5206,1,0,0,0,5208,5209,1,0,0,0,5209,5207,1,0,0,0,5209,
        5210,1,0,0,0,5210,5211,1,0,0,0,5211,5212,5,76,0,0,5212,1080,1,0,
        0,0,5213,5215,3,1101,550,0,5214,5213,1,0,0,0,5215,5216,1,0,0,0,5216,
        5214,1,0,0,0,5216,5217,1,0,0,0,5217,5218,1,0,0,0,5218,5219,5,83,
        0,0,5219,1082,1,0,0,0,5220,5222,3,1101,550,0,5221,5220,1,0,0,0,5222,
        5223,1,0,0,0,5223,5221,1,0,0,0,5223,5224,1,0,0,0,5224,5225,1,0,0,
        0,5225,5226,5,89,0,0,5226,1084,1,0,0,0,5227,5229,3,1101,550,0,5228,
        5227,1,0,0,0,5229,5230,1,0,0,0,5230,5228,1,0,0,0,5230,5231,1,0,0,
        0,5231,1086,1,0,0,0,5232,5234,3,1101,550,0,5233,5232,1,0,0,0,5234,
        5235,1,0,0,0,5235,5233,1,0,0,0,5235,5236,1,0,0,0,5236,5237,1,0,0,
        0,5237,5238,3,1099,549,0,5238,5244,1,0,0,0,5239,5240,3,1097,548,
        0,5240,5241,3,1099,549,0,5241,5242,4,543,0,0,5242,5244,1,0,0,0,5243,
        5233,1,0,0,0,5243,5239,1,0,0,0,5244,1088,1,0,0,0,5245,5246,3,1097,
        548,0,5246,5247,4,544,1,0,5247,1090,1,0,0,0,5248,5250,3,1101,550,
        0,5249,5248,1,0,0,0,5250,5251,1,0,0,0,5251,5249,1,0,0,0,5251,5252,
        1,0,0,0,5252,5254,1,0,0,0,5253,5255,3,1099,549,0,5254,5253,1,0,0,
        0,5254,5255,1,0,0,0,5255,5256,1,0,0,0,5256,5257,5,66,0,0,5257,5258,
        5,68,0,0,5258,5269,1,0,0,0,5259,5261,3,1097,548,0,5260,5262,3,1099,
        549,0,5261,5260,1,0,0,0,5261,5262,1,0,0,0,5262,5263,1,0,0,0,5263,
        5264,5,66,0,0,5264,5265,5,68,0,0,5265,5266,1,0,0,0,5266,5267,4,545,
        2,0,5267,5269,1,0,0,0,5268,5249,1,0,0,0,5268,5259,1,0,0,0,5269,1092,
        1,0,0,0,5270,5274,3,1103,551,0,5271,5274,3,1101,550,0,5272,5274,
        5,95,0,0,5273,5270,1,0,0,0,5273,5271,1,0,0,0,5273,5272,1,0,0,0,5274,
        5275,1,0,0,0,5275,5273,1,0,0,0,5275,5276,1,0,0,0,5276,1094,1,0,0,
        0,5277,5283,5,96,0,0,5278,5282,8,4,0,0,5279,5280,5,96,0,0,5280,5282,
        5,96,0,0,5281,5278,1,0,0,0,5281,5279,1,0,0,0,5282,5285,1,0,0,0,5283,
        5281,1,0,0,0,5283,5284,1,0,0,0,5284,5286,1,0,0,0,5285,5283,1,0,0,
        0,5286,5287,5,96,0,0,5287,1096,1,0,0,0,5288,5290,3,1101,550,0,5289,
        5288,1,0,0,0,5290,5291,1,0,0,0,5291,5289,1,0,0,0,5291,5292,1,0,0,
        0,5292,5293,1,0,0,0,5293,5297,5,46,0,0,5294,5296,3,1101,550,0,5295,
        5294,1,0,0,0,5296,5299,1,0,0,0,5297,5295,1,0,0,0,5297,5298,1,0,0,
        0,5298,5307,1,0,0,0,5299,5297,1,0,0,0,5300,5302,5,46,0,0,5301,5303,
        3,1101,550,0,5302,5301,1,0,0,0,5303,5304,1,0,0,0,5304,5302,1,0,0,
        0,5304,5305,1,0,0,0,5305,5307,1,0,0,0,5306,5289,1,0,0,0,5306,5300,
        1,0,0,0,5307,1098,1,0,0,0,5308,5310,5,69,0,0,5309,5311,7,5,0,0,5310,
        5309,1,0,0,0,5310,5311,1,0,0,0,5311,5313,1,0,0,0,5312,5314,3,1101,
        550,0,5313,5312,1,0,0,0,5314,5315,1,0,0,0,5315,5313,1,0,0,0,5315,
        5316,1,0,0,0,5316,1100,1,0,0,0,5317,5318,7,6,0,0,5318,1102,1,0,0,
        0,5319,5324,7,7,0,0,5320,5324,8,8,0,0,5321,5322,7,9,0,0,5322,5324,
        7,10,0,0,5323,5319,1,0,0,0,5323,5320,1,0,0,0,5323,5321,1,0,0,0,5324,
        1104,1,0,0,0,5325,5326,5,45,0,0,5326,5327,5,45,0,0,5327,5333,1,0,
        0,0,5328,5329,5,92,0,0,5329,5332,5,10,0,0,5330,5332,8,11,0,0,5331,
        5328,1,0,0,0,5331,5330,1,0,0,0,5332,5335,1,0,0,0,5333,5331,1,0,0,
        0,5333,5334,1,0,0,0,5334,5337,1,0,0,0,5335,5333,1,0,0,0,5336,5338,
        5,13,0,0,5337,5336,1,0,0,0,5337,5338,1,0,0,0,5338,5340,1,0,0,0,5339,
        5341,5,10,0,0,5340,5339,1,0,0,0,5340,5341,1,0,0,0,5341,5342,1,0,
        0,0,5342,5343,6,552,0,0,5343,1106,1,0,0,0,5344,5349,3,1069,534,0,
        5345,5348,3,1107,553,0,5346,5348,9,0,0,0,5347,5345,1,0,0,0,5347,
        5346,1,0,0,0,5348,5351,1,0,0,0,5349,5350,1,0,0,0,5349,5347,1,0,0,
        0,5350,5356,1,0,0,0,5351,5349,1,0,0,0,5352,5353,5,42,0,0,5353,5357,
        5,47,0,0,5354,5355,6,553,1,0,5355,5357,5,0,0,1,5356,5352,1,0,0,0,
        5356,5354,1,0,0,0,5357,5358,1,0,0,0,5358,5359,6,553,2,0,5359,1108,
        1,0,0,0,5360,5361,5,70,0,0,5361,5362,5,82,0,0,5362,5363,5,79,0,0,
        5363,5364,5,77,0,0,5364,5366,1,0,0,0,5365,5367,3,1111,555,0,5366,
        5365,1,0,0,0,5367,5368,1,0,0,0,5368,5366,1,0,0,0,5368,5369,1,0,0,
        0,5369,5370,1,0,0,0,5370,5371,5,68,0,0,5371,5372,5,85,0,0,5372,5373,
        5,65,0,0,5373,5374,5,76,0,0,5374,5375,1,0,0,0,5375,5376,6,554,0,
        0,5376,1110,1,0,0,0,5377,5379,7,12,0,0,5378,5377,1,0,0,0,5379,5380,
        1,0,0,0,5380,5378,1,0,0,0,5380,5381,1,0,0,0,5381,5382,1,0,0,0,5382,
        5383,6,555,0,0,5383,1112,1,0,0,0,5384,5385,9,0,0,0,5385,1114,1,0,
        0,0,44,0,1579,5080,5090,5098,5106,5160,5162,5172,5174,5184,5194,
        5198,5204,5209,5216,5223,5230,5235,5243,5251,5254,5261,5268,5273,
        5275,5281,5283,5291,5297,5304,5306,5310,5315,5323,5331,5333,5337,
        5340,5347,5349,5356,5368,5380,3,0,1,0,1,553,0,0,2,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!DorisLexer.__ATN) {
            DorisLexer.__ATN = new antlr.ATNDeserializer().deserialize(DorisLexer._serializedATN);
        }

        return DorisLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(DorisLexer.literalNames, DorisLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return DorisLexer.vocabulary;
    }

    private static readonly decisionsToDFA = DorisLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}