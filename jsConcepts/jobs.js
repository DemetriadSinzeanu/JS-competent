/** A job is a unit of work or unit of execution. A component of a job is called a task or a step. As a unit of execution,
 * a job may be concretely identified with a single process, which may in turn have subprocesses which perform the tasks or steps that comprise the work of the job.
 * Jobs can be started interactively, such as from a command line, or scheduled for non-interactive execution by a job scheduler,
 * and then controlled via automatic or manual job control. 
 * online processing such as by servers has open-ended input (they service requests as long as they run), and thus never complete,
 * only stopping when terminated (sometimes called "canceled"): a server's job is never done.
 * In this sense of "job", a programmable computer performs "jobs", as each one can be different from the last. The term "job"
 * is also common in operations research, predating its use in computing, in such uses as job shop scheduling
 *  
 * In JS because js si based on an event loop, a job is a function that stays at the end and needs to be executed. 
 * 
 * In system software, a job queue (sometimes batch queue), is a data structure maintained by job scheduler software containing jobs to run.
 * Users submit their programs that they want executed, "jobs", to the queue for batch processing. The scheduler software maintains the queue
 * as the pool of jobs available for it to run. Multiple batch queues might be used by the scheduler to differentiate types of jobs depending on parameters such as:
 * - job priority
 * - estimated execution time
 * - resource requirements
 * 
 * The use of a job queue gives these benefits:
 * - sharing of computer resources among many users
 * - time-shifts job processing to when the computer is less busy
 * - avoids idling the compute resources without minute-by-minute human supervision
 * - allows around-the-clock high utilization of expensive computing resources */