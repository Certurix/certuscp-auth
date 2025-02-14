interface BotStrings {
  info: {
    VERIFICATION_STARTING: string;
    VERIFICATION_SUCCESS: string;
    VERIFICATION_FAILED: string;
    USER_DMS_DISABLED: string;
    VERIFICATION_BYPASSED: string;
    VERIFICATION_BYPASSED_PM: {
      FIRST: string;
      SECOND: string;
    };
    USER_LEFT_SERVER: string;
    VERIFICATION_PRIVATE_MESSAGE: string;
  };
  errors: {
    commands: {
      common: {
        WRONG_USAGE: string;
        MEMBER_NOT_FOUND: string;
        NOT_IN_QUEUE: string;
      };
      bypass: {
        NO_ROLES_ADDED: string;
        PARTIALLY_ADDED: string;
        COULDNT_REMOVE_QUEUE: string;
      };
      disable: {
        ALREADY_DISABLED: string;
      };
      enable: {
        ALREADY_ENABLED: string;
      };
      export: {
        NOTHING_TO_EXPORT: string;
        PERMISSION_ERROR: string;
      };
      eval: {
        ERROR: string;
      };
      help: {
        COMMAND_NOT_FOUND: string;
      };
      import: {
        NO_BACKUP_FILE: string;
        NOTHING_TO_IMPORT: string;
        PERMISSION_ERROR: string;
      };
      list: {
        NO_USERS_IN_VERIFICATION: string;
      };
      verify: {
        COULDNT_REMOVE_ROLES: string;
        PARTIALLY_REMOVED: string;
      };
      unverify: {
        NO_VERIFIED_ROLES: string;
      };
    };
  };
  commands: {
    common: {
      embed: {
        NOT_AFILLIATED: string;
      };
    };
    bypass: {
      SUCCESS: string;
    };
    disable: {
      SUCCESS: string;
    };
    enable: {
      SUCCESS: string;
    };
    export: {
      SUCCESS: string;
    };
    eval: {
      OUTPUT: string;
    };
    help: {
      embed: {
        fields: {
          MORE_INFORMATION: {
            title: string;
            value: string;
          };
          USAGE: {
            title: string;
          };
          ALTERNATIVES: {
            title: string;
            value_no_aliases: string;
          };
        };
      };
    };
    import: {
      SUCCESS: string;
    };
    info: {
      embed: {
        MESSAGE: string;
        fields: {
          QUEUE: string;
          VERIFIED: string;
        };
      };
    };
    isverified: {
      USER_IS_VERIFIED: string;
      USER_NOT_VERIFIED: string;
      MISSING_ROLES: string;
    };
    list: {
      embed: {
        title: string;
        fields: {
          TOTAL: {
            title: string;
          };
        };
      };
    };
    verify: {
      SUCCESS: string;
    };
    unverify: {
      SUCCESS: string;
      SUCCESS_QUEUE: string;
    };
  };
  events: {
    verificationFailed: {
      FAILED_PRIVATE_MESSAGE: string;
      FAILED_PM_SAME_ACCOUNT: string;
      FAILED_LOG_MESSAGE: string;
      FAILED_SAME_ACCOUNT_LOG: string;
      AUDIT_LOG_REASON_KICK: string;
      AUDIT_LOG_REASON_BAN: string;
    };
    verificationPassed: {
      SUCCESS_PRIVATE_MESSAGE: string;
      SUCCESS_LOG_MESSAGE: string;
    };
  };
}

interface ApiStrings {
  info: {
    BOT_STARTING: string;
    BOT_NOT_IN_GUILD: string;
    USER_NOT_IN_VERIFICATION: string;
    ACCOUNT_ALREADY_USED: string;
  };
  endpoints: {
    verifyPost: {
      MISSING_FIELDS: string;
      NO_GAMES_OR_PRIVATE_PROFILE: string;
      APP_NOT_FOUND: string;
      STEAM_API_ERROR: string;
    };
  };
}

interface WebsiteStrings {
  HI_THERE: string;
  sections: {
    verification: {
      VERIFYING_USER_TITLE: string;
      VERIFICATION_SERVER: string;
      VERIFICATION_USER: string;
      VERIFICATION_STARTED_AT: string;
    };
    steam: {
      STEAM_DETAILS_TITLE: string;
      USERNAME: string;
      PROFILE_URL: string;
      CLICK_HERE_BTN: string;
    };
    buttons: {
      YES: string;
      NO: string;
    };
  };
  SUCCESS_MESSAGE: string;
  CLOSE_PAGE_MESSAGE: string;
}
