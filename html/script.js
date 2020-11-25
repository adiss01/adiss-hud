window.addEventListener('message', function (event) {

	switch (event.data.action) {
        case 'updateStatusHud':
            $("body").css("display", event.data.show ? "block" : "none");
            $("#boxSetHealth").css("width", event.data.health + "%");
            $("#boxSetArmour").css("width", event.data.armour + "%");

            widthHeightSplit(event.data.hunger, $("#boxSetHunger"));
            widthHeightSplit(event.data.thirst, $("#boxSetThirst"));
            widthHeightSplit(event.data.stamina, $("#boxSetStamina"));
            widthHeightSplit(event.data.oxygen, $("#boxSetOxygen"));

            if (event.data.talking == true) {
                $('#rect1').css('fill', 'rgba(234,255,3,0.74)')
                $('#rect2').css('fill', 'rgba(234,255,3,0.74)')
                $('#rect3').css('fill', 'rgba(234,255,3,0.74)')
            } else {
                $('#rect1').css('fill', '#FFFFFF')
                $('#rect2').css('fill', '#FFFFFF')
                $('#rect3').css('fill', '#FFFFFF')
            }

			if (event.data.health < 49) {
                $('#boxSetHealth').css('background', '#DD2C00')
            } else if (event.data.health < 75) {
                $('#boxSetHealth').css('background', '#F57F17')
            } else  {
                $('#boxSetHealth').css('background', '#3bb174')
            }
			
			if (event.data.armour < 49) {
                $('#boxSetArmour').css('background', '#DD2C00')
            } else if (event.data.armour < 75) {
                $('#boxSetArmour').css('background', '#F57F17')
            } else  {
                $('#boxSetArmour').css('background', '#4289ff')
            }
			
			if (event.data.hunger < 49) {
                $('#boxSetHunger').css('background', '#DD2C00')
		    } else if (event.data.hunger < 75) {
                $('#boxSetHunger').css('background', '#F57F17')
            } else  {
                $('#boxSetHunger').css('background', '#d29b43')
            }
			
			if (event.data.thirst < 49) {
                $('#boxSetThirst').css('background', '#DD2C00')
		    } else if (event.data.thirst < 75) {
                $('#boxSetThirst').css('background', '#F57F17')
            } else  {
                $('#boxSetThirst').css('background', '#507db5')
            }
			
			if (event.data.stamina < 25) {
                $('#boxSetStamina').css('background', '#DD2C00')
		    } else if (event.data.stamina < 50) {
                $('#boxSetStamina').css('background', '#F57F17')
            } else  {
                $('#boxSetStamina').css('background', '#4c5b75')
            }

            if (event.data.state == 0) {
                $('#rect1').css('visibility', 'hidden')
                $('#rect2').css('visibility', 'hidden')
                $('#rect3').css('visibility', 'hidden')
            } else if (event.data.state == 1){
                $('#rect1').css('visibility', 'hidden')
                $('#rect2').css('visibility', 'visible')
                $('#rect3').css('visibility', 'visible')
            } else if (event.data.state == 2){
                $('#rect1').css('visibility', 'hidden')
                $('#rect2').css('visibility', 'hidden')
                $('#rect3').css('visibility', 'visible')
            } else if (event.data.state == 3){
                $('#rect1').css('visibility', 'visible')
                $('#rect2').css('visibility', 'visible')
                $('#rect3').css('visibility', 'visible')
            }
    }
});

function widthHeightSplit(value, ele) {
    let width = 25.5;
    let eleHeight = (value / 100) * width;

    ele.css("width", eleHeight + "px");
};

function Left(value, ele) {
    let height = 25.0;
    let eleHeight = (value / 100) * height;
    let leftOverHeight = height - eleHeight;

    ele.css("right", eleHeight + "px");
    ele.css("right", leftOverHeight + "px");
};