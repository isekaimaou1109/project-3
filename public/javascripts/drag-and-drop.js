const dropZone = document.querySelector('#dashboard_drag-zone__3fotn');
const filelist = document.querySelector('#dashboard_filelist__1a9Zu');

const traverseFileTree = function(item, path = "") {
  if (item.isFile) {
    // Get file
    item.file(function(file) {
      console.log(file)

      var li = document.createElement('li');
      li.innerText = path + file.name;
      filelist.appendChild(li);
    });
  } else if (item.isDirectory) {
    // Get folder contents
    var dirReader = item.createReader();
    dirReader.readEntries(function(entries) {
      for (var i = 0; i < entries.length; i++) {
        traverseFileTree(entries[i], path + item.name + "/");
      }
    });
  }
};


let dropEvent = function(e) {
  var length = e.dataTransfer.items.length;
  for (var i = 0; i < length; i++) {
    // recursive directory search
    traverseFileTree(e.dataTransfer.items[i].webkitGetAsEntry());
  }

  e.stopPropagation();
  e.preventDefault();
  return false;
};

let dragEnter = function(e) {
  e.stopPropagation();
  e.preventDefault();
};

let dragOver = function(e) {
  e.stopPropagation();
  e.preventDefault();
};

let dragLeave = function(e) {
  e.stopPropagation();
  e.preventDefault();
};

dropZone.addEventListener('dragenter', dragEnter, false);
dropZone.addEventListener('dragover', dragOver, false);
dropZone.addEventListener('dragleave', dragLeave, false);
dropZone.addEventListener('drop', dropEvent, false);