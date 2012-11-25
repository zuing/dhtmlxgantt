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
    this._errors[6] = "完成比例 必须是 数字";
    this._errors[7] = "完成比例 必须 <= 100";
    this._errors[8] = "完成比例 必须 >= 0";
    this._errors[9] = "请 增加 任务(%0)的 工时";
    this._errors[10] = "请 减少 任务(%0)的 工时";
    this._errors[11] = "请 延迟 任务(%0)的 开始时间";
    this._errors[12] = "请 提前 任务(%0)的 开始时间";
    this._errors[13] = "项目 (%0) 已经添加";
    this._errors[14] = "项目 (%0) 开始时间 < 整个开始时间";
    this._errors[15] = "任务 (%0) 不能成为 前置任务(%1) 的子任务";
    this._errors[16] = "前置任务的结束时间(%0) > 子任务(%1)的开始时间";
    this._errors[17] = "该前置任务(%0)不存在";
    this._errors[18] = "任务 (%0) 开始时间 < 整个开始时间";
    this._errors[19] = "父任务 (%0) 结束时间 < 子任务(%1) 结束时间";
    this._errors[20] = "子任务 (%0) 开始时间 < 父任务(%1) 开始时间";
    this._errors[21] = "父任务 (%0) 不存在";
    this._errors[22] = "任务 (%0) 已经添加";
    this._errors[23] = "项目 (%0) 已经添加";
    this._errors[24] = "任务 (%0) 开始时间 < 项目 (%1) 开始时间";
    this._errors[25] = "父任务 (%0) 开始时间不能为空";
    this._errors[26] = "前置任务 (%0) 位置错误. 减少该任务工时 或者 延迟任务(%1)的开始时间 ";
    this._errors[27] = "前置任务(%0) 不存在";
    this._errors[28] = "增加父任务 (%0) 工时 或者 提前 子任务 (%1)开始时间 或者 减少子任务(%1)工时";
    this._errors[29] = "提前父任务(%0)的开始时间 或者 延迟子任务 (%1)的开始时间";
    this._errors[30] = "任务(%0) 不存在";
    this._errors[31] = "项目(%0) 不存在";
    this._errors[32] = "前置任务(%0) 和 子任务(%1) 必须属于同一个父任务";
    this._errors[33] = "提前父任务(%0)的开始时间 或者 延迟子任务(%1)的开始时间";
    this._errors[34] = "任务(%0)的开始时间 < 项目(%1)的开始时间";
    this._errors[35] = "完成比例 必须 <= 100 and >= 0";
    this._errors[36] = "You may not connect a task to itself.";
    this._errors[37] = "Cannot parse this XML string.";
};


function LangName()
{
	//Task Lang Name
	this.tRename			= "重命名";
	this.tDelete			= "删除";
	this.tStartDate			= "开始时间";
	this.tEndDate			= "结束时间"
	this.tDuration			= "工时(小时)";
	this.tPercent			= "完成比例%";
	this.tPredecessorTask	= "前置任务";
	this.tSuccessorTask		= "后置任务";
	this.tChildTask			= "子任务";
	this.tPlanH				= "计划工时(小时)";
	this.tAlarm				= "报警(天)";
	this.tParentTask		= "父任务";
	this.tMoveChildTask		= "移动子任务";
	this.tManager			= "任务管理";
	
	//Project Lang Name
	this.pStartDate	= "开始时间";
	this.pEndDate	= "结束时间"
	this.pDuration	= "工时(小时)";
	this.pRename	= "重命名项目";
	this.pNewPro	= "新增项目";
	this.pDelete	= "删除项目";
	this.pPercent	= "完成比例%";
	this.pTask		= "添加新任务";
	this.pPlanH		= "计划工时(小时)";
	this.pManager	= "项目管理";
	//public
	this.name			= "名称";
	this.newName		= "新名称";
	this.buttonOk		= "确认";
	this.buttonCancel	= "取消";
	this.labSet			= "设置";
	this.labAdd			= "新增";
	this.buttonSave		= "保存";
	this.buttonSync		= "同步计划时间";
	
}