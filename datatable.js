// ページ読み込み後の処理
window.onload = function(){
	// 【main-script】 を実行
	getJsonp_GAS();
}

var array = ['Year','Month','Day','Minute','Place','Benefits','Holiday','a','b','c','d','e','f'];

// 【main-script】 スプレッドシート内の記述をjsonデータとして読み込み html 内へ入れ込む
function getJsonp_GAS() {
	$.ajax({
		type: 'GET',
		url: 'https://script.google.com/macros/s/AKfycbyemQYjn5d076WRnyLNn6_JQJpGJlTNeInmlleVOdjLoRZK-5m7/exec',
		dataType: 'jsonp',
        jsonpCallback: 'jsondata',
		success: function(json){
            var wak = "";
            for (i = 0; i < json.length; i++) {
                wak += "<tr>\n";
                for (j = 0; j < 13; j++) {
                    wak += "<td>";
                    wak += json[i][array[j]];
                    wak += "</td>\n";
                }
            wak += "</tr>\n";
            }
            $("#whole").append(wak);
		}
    });
  

$(document).ajaxComplete(function() {
    $.extend( $.fn.dataTable.defaults, { 
        language: {
            url: "http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Japanese.json"
        } 
    }); 
        $('#whole').DataTable();
    })
};
