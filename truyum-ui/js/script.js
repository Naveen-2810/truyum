function validate() {
    var title = document.getElementById('title').value;
    var price = document.getElementById('price').value;
    var date = document.getElementById('dateOfLaunch').value;
    var category = document.getElementById('category');

    if (title == "") {
        alert("Title is Required");
        return false;
    }
    if (price == "") {
        alert("Price is Required");
        return false;
    }
    if (isNaN(price)) {
        alert("Price has to be Number");
        return false;
    }

    if (date == "") {
        alert("Date of Lanch is Required");
        return false;
    }

    if (category.value == "Select") {
        alert("Select one Category");
        return false;
    }

}