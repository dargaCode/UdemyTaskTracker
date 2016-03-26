var ENTER_KEY_ID = 13;

var itemInput = $("#text-input");
var list = $("#todo-items");

function addItemCreateEvent() {
  itemInput.on("keypress", function(keyEvent) {
    var itemText = $(this).val();
    if(keyEvent.which === ENTER_KEY_ID && itemText !== "") {
      var listItem = $("<li><span>X </span>" + itemText + "</li>");
      listItem.hide();
      list.append(listItem);
      listItem.fadeIn(500);
      $(this).val("");
    }
  });
}

function addItemToggleEvent() {
  list.on("click", "li", function() {
    $(this).toggleClass("completed");
  });
}

function addItemDestroyEvent() {
  list.on("click", "li span", function(event) {
    $(this).parent().fadeOut(500, function() {
      $(this).remove();
    });
    event.stopPropagation();
  });
}

addItemCreateEvent();
addItemToggleEvent();
addItemDestroyEvent();
