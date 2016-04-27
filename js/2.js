function GetCurrentDateTime() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var date = d.getDate();
    var week = d.getDay();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var ms = d.getMilliseconds();
    var curDateTime = year;
    if (month > 9)
        curDateTime = curDateTime + "��" + month;
    else
        curDateTime = curDateTime + "��0" + month;
    if (date > 9)
        curDateTime = curDateTime + "��" + date + "��";
    else
        curDateTime = curDateTime + "��0" + date + "��";
    if (hours > 9)
        curDateTime = curDateTime + " " + hours;
    else
        curDateTime = curDateTime + " 0" + hours;
    if (minutes > 9)
        curDateTime = curDateTime + ":" + minutes;
    else
        curDateTime = curDateTime + ":0" + minutes;
    if (seconds > 9)
        curDateTime = curDateTime + ":" + seconds;
    else
        curDateTime = curDateTime + ":0" + seconds;
    var weekday = "";
    if (week == 0)
        weekday = "������";
    else if (week == 1)
        weekday = "����һ";
    else if (week == 2)
        weekday = "���ڶ�";
    else if (week == 3)
        weekday = "������";
    else if (week == 4)
        weekday = "������";
    else if (week == 5)
        weekday = "������";
    else if (week == 6)
        weekday = "������";
    curDateTime = curDateTime + " " + weekday;
    return curDateTime;
}
   