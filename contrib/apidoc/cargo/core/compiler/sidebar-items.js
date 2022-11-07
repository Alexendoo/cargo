window.SIDEBAR_ITEMS = {"constant":[["RUSTDOC_CRATE_VERSION_FLAG",""]],"enum":[["CompileKind","Indicator for how a unit is being compiled."],["CompileMode","The general “mode” for what to do. This is used for two purposes. The commands themselves pass this in to `compile_ws` to tell it the general execution strategy. This influences the default targets selected. The other use is in the `Unit` struct to indicate what is being done with a specific target."],["CrateType",""],["FileFlavor","Kind of each file generated by a Unit, part of `FileType`."],["Freshness","Indication of the freshness of a package."],["LinkType",""],["Lto","Possible ways to run rustc and request various parts of LTO."],["MessageFormat",""],["TimingOutput","Kinds of build timings we can output."]],"fn":[["add_allow_features","Forward -Zallow-features if it is set for cargo."],["add_cap_lints",""],["add_custom_flags","Add custom flags from the output a of build-script to a `ProcessBuilder`"],["add_error_format_and_color","Add error-format flags to the command."],["add_plugin_deps",""],["append_crate_version_flag",""],["build_base_args",""],["build_deps_args",""],["check_cfg_args","Generate the –check-cfg arguments for the unit"],["compile",""],["crate_version_flag_already_present",""],["envify",""],["extern_args","Generates a list of `--extern` arguments."],["features_args","All active features for the unit passed as –cfg"],["filter_dynamic_search_path",""],["link_targets","Link the compiled target (often of form `foo-{metadata_hash}`) to the final target. This must happen during both “Fresh” and “Compile”."],["lto_args",""],["on_stderr_line",""],["on_stderr_line_inner","Returns true if the line should be cached."],["on_stdout_line",""],["prepare_rustc",""],["replay_output_cache",""],["rustc",""],["rustdoc",""]],"mod":[["artifact",""],["build_config",""],["build_context","[`BuildContext`] is a (mostly) static information about a build task."],["build_plan","A graph-like structure used to represent the rustc commands to build the package and the interdependencies between them."],["compilation",""],["compile_kind",""],["context",""],["crate_type",""],["custom_build",""],["fingerprint","Fingerprints"],["future_incompat","Support for future-incompatible warning reporting."],["job",""],["job_queue","This module implements the job queue which determines the ordering in which rustc is spawned off. It also manages the allocation of jobserver tokens to rustc beyond the implicit token each rustc owns (i.e., the ones used for parallel LLVM work and parallel rustc threads)."],["layout","Management of the directory layout of a build"],["links",""],["lto",""],["output_depinfo","Module for generating dep-info files."],["rustdoc","Utilities for building with rustdoc."],["standard_lib","Code for building the standard library."],["timings","Timing tracking."],["unit",""],["unit_dependencies","Constructs the dependency graph for compilation"],["unit_graph",""]],"struct":[["BuildConfig","Configuration information for a rustc build."],["BuildContext","The build context, containing complete infomration needed for a build task before it gets started."],["BuildOutput","Contains the parsed output of a custom build script."],["BuildScriptOutputs","Map of packages to build script output."],["BuildScripts","Linking information for a `Unit`."],["Compilation","A structure returning the result of a compilation."],["CompileTarget","Abstraction for the representation of a compilation target that Cargo has."],["Context","Collection of all the stuff that is needed to perform a build."],["DefaultExecutor","A `DefaultExecutor` calls rustc without doing anything else. It is Cargo’s default behaviour."],["Doctest","Structure with enough information to run `rustdoc --test`."],["FileType","Type of each file generated by a Unit."],["Metadata","The `Metadata` is a hash used to make unique file names for each unit in a build. It is also use for symbol mangling."],["OutputOptions",""],["RustDocFingerprint","Structure used to deal with Rustdoc fingerprinting"],["RustcTargetData","Collection of information about `rustc` and the host and target."],["TargetInfo","Information about the platform target gleaned from querying rustc."],["Unit","All information needed to define a unit."],["UnitInterner","A small structure used to “intern” `Unit` values."],["UnitOutput","Information about the output of a unit."]],"trait":[["Executor","A glorified callback for executing calls to rustc. Rather than calling rustc directly, we’ll use an `Executor`, giving clients an opportunity to intercept the build calls."]]};