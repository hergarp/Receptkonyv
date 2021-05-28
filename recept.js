var receptTomb = [];

$(function () {
    $("article").on("click", "tr", megjelenit);
    $("#bal").click(megjelenitNext);
    $.ajax(
            {url: "receptek.json",
                success: function (result) {
                    receptTomb = (result);
                    console.log(receptTomb);
//                  $("article").append(receptTomb+"");
                    tablazatbaKiir();
                }
            });

});
function megjelenitRecept(recept) {
    $("section").empty();
    //adott recept adatainak megjelenitese
    //Section h2-be a Recept neve
    $("section").append("<h2></h2>");
    $("section h2").append(recept.Név);
    //Section P-be a leírása
    $("section").append("<p></p>");
    $("section p").append(recept.Leírás);
    //Section Divbe a hozzávalók
    $("section").append("<div></div>");
////    $("section div").append(recept.img src="Elérési_út");
//    $("section").append("<img></img>");
//    $("section div").append("<img />").attr(recept.Elérési_út);
        var img = $('<img />').attr({
            'src': recept.Elérési_út,
            'alt': recept.Név,
            'title': recept.Név,
            'width': 250
        }).appendTo('section div');


    //Sectoin imagebe a képet

}

function megjelenit() {
    var ID = Number($(this).attr("id"));
    console.log(ID);
    megjelenitRecept(receptTomb[ID-1]);
}
function megjelenitNext() {
//    var ID = Number($().attr("id"));
//    console.log(ID);
    megjelenitRecept(receptTomb[(ID-1)+1]);
}

function tablazatbaKiir() {
    csakFejlec();
    for (var i = 0; i < receptTomb.length; i++) {
        $("table").append("<tr id='" + (i + 1) + "'></tr>");
        for (var item in receptTomb[i]) {
            if (item === "Hozzávalók") {
                for (var item2 in receptTomb[i][item]) {
                    // console.log(receptTomb[i][item]);
                    for (var item3 in receptTomb[i][item][item2]) {
                        $("table tr").eq(i + 1).append("<ul><li>" + item3 + " " + receptTomb[i][item][item2][item3] + " </li></ul>");

                    }
                }
            } else {
                $("table tr").eq(i + 1).append("<td>" + receptTomb[i][item] + "</td>");
            }


        }

    }

}
;
function csakFejlec() {
    $("article").append("<table></table>");
    $("article table").append("<tr id='0'>\n\
<th>Név</th>\n\
<th>Elkészítési idő</th>\n\
<th>Elérési út</th>\n\
<th>Leírás</th>\n\
<th>Hozzávalók</th>\n\
</tr>");

}