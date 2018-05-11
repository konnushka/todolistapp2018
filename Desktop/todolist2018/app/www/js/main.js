(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var Task = /** @class */ (function () {
    function Task(taskname) {
        this.id = new Date().getTime().toString();
        this.name = taskname;
        this.status = false;
    }
    return Task;
}());
var TaskManager = /** @class */ (function () {
    function TaskManager(array) {
        this.tasks = array;
    }
    TaskManager.prototype.add = function (task) {
        this.tasks.push(task);
        //console.log(this.tasks);
    };
    return TaskManager;
}());
var ListView = /** @class */ (function () {
    function ListView(listid) {
        this.list = document.getElementById(listid);
    }
    ListView.prototype.render = function (items) {
        var _this = this;
        items.forEach(function (task) {
            var id = task.id;
            var name = task.name;
            var status = task.status;
            var template = "<li id=\"" + id + "\" data-status=\"" + status + "\">\n                  <div class=\"task-container\">\n                    <div class=\"task-name\">" + name + "</div>\n                    <div class=\"task-buttons\">\n                      <button type=\"button\" data-function=\"status\">&#x2714;</button>\n                      <button type=\"button\" data-function=\"delete\">&times;</button>\n                    </div>\n                  </div>\n                  </li>";
            var fragment = document.createRange().createContextualFragment(template);
            _this.list.appendChild(fragment);
        });
    };
    ListView.prototype.clear = function () {
        this.list.innerHTML = '';
    };
    return ListView;
}());
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.storage = window.localStorage;
    }
    ///store create a json string from our Array
    DataStorage.prototype.store = function (array) {
        var data = JSON.stringify(array);
        this.storage.setItem('taskdata', data);
    };
    //get item from storage
    DataStorage.prototype.read = function () {
        var data = this.storage.getItem('taskdata');
        var array = JSON.parse(data);
        return array;
        // console.log(tarray);
    };
    return DataStorage;
}());
//initialize
var taskarray = [];
var taskstorage = new DataStorage();
var taskmanager = new TaskManager(taskarray);
var listview = new ListView('task-list');
window.addEventListener('load', function () {
    var taskdata = taskstorage.read();
    console.log(taskdata);
    taskdata.forEach(function (item) { taskarray.push(item); });
    console.log(taskarray);
    listview.render(taskarray);
});
//reference to form
var taskform = document.getElementById('task-form'); //cast it as an html form
taskform.addEventListener('submit', function (event) {
    event.preventDefault();
    var input = document.getElementById('task-input');
    var taskname = input.value;
    taskform.reset();
    //console.log(taskname);
    var task = new Task(taskname);
    //TaskManager.add(task);
    taskmanager.add(task);
    listview.clear();
    taskstorage.store(taskarray); //store the data
    listview.render(taskarray);
});
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0cy9tYWluLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0lBS0EsY0FBWSxRQUFlO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0wsV0FBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBQ0Q7SUFFRSxxQkFBWSxLQUFtQjtRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0QseUJBQUcsR0FBSCxVQUFJLElBQVM7UUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QiwwQkFBMEI7SUFDNUIsQ0FBQztJQUVILGtCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFDRDtJQUVBLGtCQUFZLE1BQWE7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQU8sS0FBaUI7UUFBeEIsaUJBa0JDO1FBakJELEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ2pCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDakIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNyQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3pCLElBQUksUUFBUSxHQUFHLGNBQVcsRUFBRSx5QkFBa0IsTUFBTSw0R0FFVCxJQUFJLCtUQU16QixDQUFDO1lBQ3ZCLElBQUksUUFB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IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNsYXNzIFRhc2t7XHJcblxyXG4gICAgaWQ6c3RyaW5nO1xyXG4gICAgbmFtZTpzdHJpbmc7XHJcbiAgICBzdGF0dXM6Ym9vbGVhbjtcclxuY29uc3RydWN0b3IodGFza25hbWU6c3RyaW5nKXtcclxuICAgIHRoaXMuaWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpO1xyXG4gICAgdGhpcy5uYW1lID0gdGFza25hbWU7XHJcbiAgICB0aGlzLnN0YXR1cyA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFRhc2tNYW5hZ2Vye1xyXG4gIHRhc2tzIDogQXJyYXk8VGFzaz5cclxuICBjb25zdHJ1Y3RvcihhcnJheSA6IEFycmF5PFRhc2s+KXtcclxuICAgIHRoaXMudGFza3MgPSBhcnJheTtcclxuICB9XHJcbiAgYWRkKHRhc2s6VGFzayl7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMudGFza3MpO1xyXG4gIH1cclxuXHJcbn1cclxuY2xhc3MgTGlzdFZpZXd7XHJcbmxpc3Q6SFRNTEVsZW1lbnQ7XHJcbmNvbnN0cnVjdG9yKGxpc3RpZDpzdHJpbmcpe1xyXG4gIHRoaXMubGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpc3RpZCk7XHJcbn1cclxucmVuZGVyKGl0ZW1zOkFycmF5PFRhc2s+KXtcclxuaXRlbXMuZm9yRWFjaCgodGFzayk9PiB7XHJcbiAgbGV0IGlkID0gdGFzay5pZDtcclxuICBsZXQgbmFtZSA9IHRhc2submFtZTtcclxuICBsZXQgc3RhdHVzID0gdGFzay5zdGF0dXM7XHJcbiAgbGV0IHRlbXBsYXRlID0gYDxsaSBpZD1cIiR7aWR9XCIgZGF0YS1zdGF0dXM9XCIke3N0YXR1c31cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stbmFtZVwiPiR7bmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLWZ1bmN0aW9uPVwic3RhdHVzXCI+JiN4MjcxNDs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtZnVuY3Rpb249XCJkZWxldGVcIj4mdGltZXM7PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPmA7XHJcbiAgbGV0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoIHRlbXBsYXRlICk7XHJcbiAgdGhpcy5saXN0LmFwcGVuZENoaWxkKCBmcmFnbWVudCApO1xyXG59KTtcclxuXHJcbn1cclxuY2xlYXIoKXtcclxuICB0aGlzLmxpc3QuaW5uZXJIVE1MID0nJztcclxufVxyXG59XHJcbmNsYXNzIERhdGFTdG9yYWdle1xyXG5zdG9yYWdlOmFueTtcclxuY29uc3RydWN0b3IoKXtcclxuICB0aGlzLnN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG59XHJcbi8vL3N0b3JlIGNyZWF0ZSBhIGpzb24gc3RyaW5nIGZyb20gb3VyIEFycmF5XHJcbnN0b3JlKGFycmF5OkFycmF5IDxUYXNrPil7XHJcbmxldCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoIGFycmF5ICk7XHJcbnRoaXMuc3RvcmFnZS5zZXRJdGVtKCd0YXNrZGF0YScsZGF0YSk7XHJcbn1cclxuLy9nZXQgaXRlbSBmcm9tIHN0b3JhZ2VcclxucmVhZCgpe1xyXG5sZXQgZGF0YSA9IHRoaXMuc3RvcmFnZS5nZXRJdGVtKCd0YXNrZGF0YScpO1xyXG5sZXQgYXJyYXkgPSBKU09OLnBhcnNlKCBkYXRhICk7XHJcbnJldHVybiBhcnJheTtcclxuLy8gY29uc29sZS5sb2codGFycmF5KTtcclxufVxyXG5cclxufVxyXG4vL2luaXRpYWxpemVcclxudmFyIHRhc2thcnJheSA9IFtdO1xyXG52YXIgdGFza3N0b3JhZ2UgPSBuZXcgRGF0YVN0b3JhZ2UoKTtcclxudmFyIHRhc2ttYW5hZ2VyID0gbmV3IFRhc2tNYW5hZ2VyKHRhc2thcnJheSk7XHJcbnZhciBsaXN0dmlldyA9IG5ldyBMaXN0VmlldygndGFzay1saXN0Jyk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsKCk9PntcclxuICBsZXQgdGFza2RhdGEgPSB0YXNrc3RvcmFnZS5yZWFkKCk7XHJcbiAgY29uc29sZS5sb2codGFza2RhdGEpO1xyXG4gIHRhc2tkYXRhLmZvckVhY2goKGl0ZW0pPT57dGFza2FycmF5LnB1c2goaXRlbSk7fSk7XHJcbiAgY29uc29sZS5sb2codGFza2FycmF5KTtcclxuICBsaXN0dmlldy5yZW5kZXIodGFza2FycmF5KTtcclxufSk7XHJcbi8vcmVmZXJlbmNlIHRvIGZvcm1cclxuY29uc3QgdGFza2Zvcm0gPSAoPEhUTUxGb3JtRWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZm9ybScpKTsvL2Nhc3QgaXQgYXMgYW4gaHRtbCBmb3JtXHJcbiAgICB0YXNrZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLChldmVudDogRXZlbnQpPT57XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1pbnB1dCcpO1xyXG4gICAgICAgIGxldCB0YXNrbmFtZT0oPEhUTUxJbnB1dEVsZW1lbnQ+aW5wdXQpLnZhbHVlO1xyXG4gICAgICAgIHRhc2tmb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0YXNrbmFtZSk7XHJcbiAgICAgICAgbGV0IHRhc2sgPSBuZXcgVGFzayAodGFza25hbWUpO1xyXG4gICAgICAgIC8vVGFza01hbmFnZXIuYWRkKHRhc2spO1xyXG4gICAgICAgIHRhc2ttYW5hZ2VyLmFkZCh0YXNrKTtcclxuICAgICAgICBsaXN0dmlldy5jbGVhcigpO1xyXG4gICAgICAgIHRhc2tzdG9yYWdlLnN0b3JlKCB0YXNrYXJyYXkgKTsvL3N0b3JlIHRoZSBkYXRhXHJcbiAgICAgICAgbGlzdHZpZXcucmVuZGVyKCB0YXNrYXJyYXkgKTtcclxuICAgIH0pO1xyXG4iXX0=
