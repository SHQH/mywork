/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = [
    ["北京", 90],
    ["上海", 40]
];
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {

    var cityName = document.getElementById('aqi-city-input').value.trim();
    var value = document.getElementById('aqi-value-input').value.trim();
    var re1 = /^[a-zA-Z\u4e00-\u9fa5 ]+$/;
    var re2 = /^\d+$/
    if (!re1.test(cityName)) {
        alert('城市名必须为中文或英文字符');
    } else {
        if (!re2.test(value)) {
            alert('空气质量指数必须为整数');
        } else {
            var tempData = [cityName, value];
            aqiData.push(tempData);
        }
    }

}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {

    var table = document.getElementById('aqi-table');
    var html = '<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>';
    for (var i = 0; i < aqiData.length; i++) {
        html += '<tr><td>' + aqiData[i][0] + '</td><td>' + aqiData[i][1] + '</td><td><button onClick=delBtnHandle(' + i + ',this)>删除</button></td></tr>'
    }
    table.innerHTML = html;
}
/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(index, obj) {
    // do sth.
    aqiData.splice(index, 1);
    var tr = obj.parentNode.parentNode;
    var tbody = tr.parentNode;
    tbody.removeChild(tr);

    renderAqiList();
}

function init() {
    renderAqiList()
        // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    var bnt = document.getElementById('add-btn').addEventListener("click", addBtnHandle);

}

init();
