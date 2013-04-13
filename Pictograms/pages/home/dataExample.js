(function () {
    "use strict";

    var dataArray = [
    { title: "Basic banana", text: "Low-fat frozen yogurt", picture: "images/exit.png" },
    { title: "Banana blast", text: "Ice cream", picture: "images/exit.png" }
    ];

    var dataList = new WinJS.Binding.List(dataArray);

    // Create a namespace to make the data publicly
    // accessible. 
    var publicMembers =
        {
            itemList: dataList
        };
    WinJS.Namespace.define("DataExample", publicMembers);

})();
