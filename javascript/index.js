$(function(){
    $('#searchButton').on('click',function(){

        console.log("click!")
        
        // 郵便番号作成
        var zipcode7 = $('#zipcode3').val() + $('#zipcode4').val()

        // Web API実行
        $.ajax({
            url: "http://zipcloud.ibsnet.co.jp/api/search",
            data: {
                zipcode: zipcode7
            },
            dataType: "jsonp",
            success: function(data){
                setDisplay(data.results[0])
            }
        });    
    
        // Web API取得結果を画面に表示
        function setDisplay(result) {
            $('#todoufuken').text(result.address1);
            $('#shikutyoson').text(result.address2);
            $('#tyoiki').text(result.address3);
        }
    
    });
});

