var tagSelectorFunction = function () {
    var selector = document.getElementById('tag-selector');
    var selectedText = selector.value;
    if (selectedText == "All") {
        displayTags('inline-block');
    }
    else {
        displayTags('none');
        showTag(selectedText);
    }

};

function displayTags(displayValue){
    var advanced = document.getElementsByClassName("advanced-tag");
    for (var a = 0; a < advanced.length; a++) {
        advanced[a].style.display = displayValue;
    }

    var augmented = document.getElementsByClassName("augmented-tag");
    for (var a = 0; a < augmented.length; a++) {
        augmented[a].style.display = displayValue;
    }

    var database = document.getElementsByClassName("database-tag");
    for (var a = 0; a < database.length; a++) {
        database[a].style.display = displayValue;
    }

    var hosted = document.getElementsByClassName("hosted-tag");
    for (var a = 0; a < hosted.length; a++) {
        hosted[a].style.display = displayValue;
    }

    var firebased = document.getElementsByClassName("firebase-tag");
    for (var a = 0; a < firebased.length; a++) {
        firebased[a].style.display = displayValue;
    }

    var functions = document.getElementsByClassName("functions-tag");
    for (var a = 0; a < functions.length; a++) {
        functions[a].style.display = displayValue;
    }

    var machine = document.getElementsByClassName("machine-tag");
    for (var a = 0; a < machine.length; a++) {
        machine[a].style.display = displayValue;
    }

    var ood = document.getElementsByClassName("ood-tag");
    for (var a = 0; a < ood.length; a++) {
        ood[a].style.display = displayValue;
    }

    var published = document.getElementsByClassName("published-tag");
    for (var a = 0; a < published.length; a++) {
        published[a].style.display = displayValue;
    }

    var stack = document.getElementsByClassName("stack-tag");
    for (var a = 0; a < stack.length; a++) {
        stack[a].style.display = displayValue;
    }

    var team = document.getElementsByClassName("team-tag");
    for (var a = 0; a < team.length; a++) {
        team[a].style.display = displayValue;
    }

    var thread = document.getElementsByClassName("thread-tag");
    for (var a = 0; a < thread.length; a++) {
        thread[a].style.display = displayValue;
    }
};
function showTag(tagName) {
    var tag = document.getElementsByClassName(tagName);
    for (var a = 0; a < tag.length; a++) {
        tag[a].style.display = "inline-block";
    }
}