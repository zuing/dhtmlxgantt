/**
 *  @desc: initialization of control errors
 *  @type: private
 *  @topic: 4
 */
GanttError.prototype._init = function()
{

    //connection errors
    this._errors[0] = "Connection error";
    this._errors[1] = "Cannot connect";
    this._errors[2] = "Server error";
    this._errors[3] = "Path is null or empty";
    this._errors[4] = "Filename is null or empty";
    this._errors[5] = "File (%0) is not found";

    //API errors
    this._errors[6] = "Percent Complete  should be a number";
    this._errors[7] = "Percent Complete should be <= 100";
    this._errors[8] = "Percent Complete should be >= 0";
    this._errors[9] = "Increase duration of task(%0)";
    this._errors[10] = "Reduce duration of task(%0)";
    this._errors[11] = "Increase  <StartDate> of child task (%0)";
    this._errors[12] = "Reduce <StartDate> of task (%0)";
    this._errors[13] = "The project (%0) is added";
    this._errors[14] = "Start date of the project < start date of the control";
    this._errors[15] = "Task (%0) cannot be the child of predecessor task(%1)";
    this._errors[16] = "Time of the termination of predecessor task(%0) > <StartDate> of child task(%1)";
    this._errors[17] = "The Predecessor (%0) task  does not exist";
    this._errors[18] = "The <StartDate> of task (%0) < start date of the control";
    this._errors[19] = "Time of the termination of parent task (%0) < time of the termination of child task(%1)";
    this._errors[20] = "The <StartDate> of task (%0) < <StartDate> of parent task(%1)";
    this._errors[21] = "The parent task (%0) does not exist";
    this._errors[22] = "The task (%0) is added";
    this._errors[23] = "The project (%0) is added";
    this._errors[24] = "Task (%0) <StartDate> < project (%1) startDate";
    this._errors[25] = "Parent task (%0) <StartDate> cannot be null";
    this._errors[26] = "Predecessor task (%0) position error. Reduce duration of predecessor task (%0) or increase <StartDate> of child task (%1)";
    this._errors[27] = "Predecessor task (%0) does not exist";
    this._errors[28] = "Increase duration of parent task (%0) or reduce <StartDate> of child task (%1) or reduce duration of child task(%1)";
    this._errors[29] = "Reduce <StartDate> of parent task (%0) or increase <StartDate> of child task (%1)";
    this._errors[30] = "The  task(%0) does not exist";
    this._errors[31] = "The project(%0) does not exist";
    this._errors[32] = "Predecessor task(%0) and child task(%1) should have the same parent";
    this._errors[33] = "Reduce <StartDate> of parent task (%0) or increase <StartDate> of child task (%1)";
    this._errors[34] = "<StartDate> of task(%0) < start date of the project(%1)";
    this._errors[35] = "Percent Complete should be <= 100 and >= 0";
    this._errors[36] = "You may not connect a task to itself.";
    this._errors[37] = "Cannot parse this XML string.";
};

function LangName()
{
	//Task Lang Name
	this.tRename			= "Rename";
	this.tDelete			= "Delete";
	this.tStartDate			= "StartDate";
	this.tEndDate			= "EndDate"
	this.tDuration			= "Duration(H)";
	this.tPercent			= "Percent%";
	this.tPredecessorTask	= "PredecessorTask";
	this.tSuccessorTask		= "SuccessorTask";
	this.tChildTask			= "ChildTask";
	this.tPlanH				= "PlanDuration(H)";
	this.tAlarm				= "AlarmDays(Day)";
	this.tParentTask		= "ParentTask";
	this.tMoveChildTask		= "MoveChildTask";
	this.tManager			= "Task Manager";
	
	//Project Lang Name
	this.pStartDate	= "StartDate";
	this.pEndDate	= "EndDate";
	this.pDuration	= "Duration(H)";
	this.pRename	= "Rename Project";
	this.pNewPro	= "Add Project";
	this.pDelete	= "Delete Project";
	this.pPercent	= "Percent%";
	this.pTask		= "Add New Task";
	this.pPlanH		= "PlanDuration(H)";
	this.pManager	= "Project Manager";

	//public
	this.name			= "Name";
	this.newName		= "New Name";
	this.buttonOk		= "OK";
	this.buttonCancel	= "Cancel";
	this.labSet			= "Set ";
	this.labAdd			= "Add ";
	this.buttonSave		= "Save";
	this.buttonSync		= "Sync PlanDur";
}