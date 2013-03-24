DhtmlxGantt
======
Base on dhtmlxgantt.(The basic APi see [DhtmlxGantt](http://dhtmlx.com/docs/products/dhtmlxGantt/index.shtml))  
Add some Feature like "Alarm day","plan duration","set the endday"...  
### The basic dhtmlxgantt
![Screenshot](https://raw.github.com/zuing/dhtmlxgantt/master/dhtmlx3/dhtmlxGantt/codebase/imgs/basic_gantt.jpg)
### The update dhtmlxgantt
![Screenshot](https://raw.github.com/zuing/dhtmlxgantt/master/dhtmlx3/dhtmlxGantt/codebase/imgs/update_gantt.jpg)
##New Features
* Add Task Property "Plan Duration"
>if Duration > Plan Duration fill RED   bar.  
>if Duration < Plan Duration fill GREEN bar.

* Add Task Property "Alarm"
>if the Task  now() > (EndDate - Alarm) fill YELLOW bar

* Add Task Property "EndDate"

* Add Task Property "maxId"
>Add new Task the Id is autoincrease.

* Click Tree text can Collapse and Expand Task.

* The ContentMenu items can show or hidden.

* Support multi-Language (lang/zj.js;lang/en.js)

* User the two TOOLBAL to manager Task and Project.

* Add the "click" and "mousemove" event on each Task row.

* Add "TaskName" to the ERROR info.

* Set StartDate can auto adjust ChildTask and SuccessorTask.

* Use the DhtmlxCalendar to set the Date input text.
