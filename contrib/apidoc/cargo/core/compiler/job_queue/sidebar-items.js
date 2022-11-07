window.SIDEBAR_ITEMS = {"enum":[["Artifact","Possible artifacts that can be produced by compilations, used as edge values in the dependency graph."],["FixableWarnings","Used to keep track of how many fixable warnings there are and if fixable warnings are allowed"],["Message",""]],"struct":[["DiagDedupe","Handler for deduplicating diagnostics."],["DrainState","This structure is backed by the `DependencyQueue` type and manages the actual compilation step of each package. Packages enqueue units of work and then later on the entire graph is processed and compiled."],["ErrorToHandle",""],["ErrorsDuringDrain",""],["JobId",""],["JobQueue","This structure is backed by the `DependencyQueue` type and manages the queueing of compilation steps for each package. Packages enqueue units of work and then later on the entire graph is converted to DrainState and executed."],["JobState","A `JobState` is constructed by `JobQueue::run` and passed to `Job::run`. It includes everything necessary to communicate between the main thread and the execution of the job."],["WarningCount","Count of warnings, used to print a summary after the job succeeds"]]};