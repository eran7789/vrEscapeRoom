private var rend: Renderer;
var hoverColor:Color;
var isHovering:boolean=false;
var levelNumber:int=1;//Load this level on click. 0 is quit, 1 is load level, 2 is options
var optionsBox:GameObject;
var startText:GameObject;
var quitText:GameObject;
var optionsUp:boolean=false;
var timeLookedUppon:int=0;

function Start() {
	rend = GetComponent.<Renderer>();
	UnityEngine.Cursor.visible = true;
}

function Update(){
 	var seen:RaycastHit;
    var rayDirection:Ray;
    rayDirection = new Ray(transform.position, transform.forward);
    if (Physics.Raycast(rayDirection, seen)) {
        if (seen.collider.tag == "MainMenu") {
            print("This is a button");
            if (isHovering) {
            	timeLookedUppon+=Time.deltaTime;
            	Debug.Log(String.Format('time: {0}', timeLookedUppon));
            } else {
            	isHovering=true;
            }
        }
        else {
        	isHovering = false;
        	timeLookedUppon=0;
        }
    }
    Debug.DrawRay(transform.position, transform.forward, Color.black, 1); //unless you allow debug to be seen in game, this will only be viewable in the scene view

    if (isHovering) {
    	rend.material.color=Color.blue;
    } else {
    	rend.material.color=Color.white;
    }


	if((timeLookedUppon==5)&&optionsUp){
		optionsUp=false;
		startText.SetActive(true);
		quitText.SetActive(true);
		rend.material.color=Color.white;
		optionsBox.SetActive(false);
	}else if((timeLookedUppon==5)&&isHovering){
		if(levelNumber==1){
			Application.LoadLevel(levelNumber);
		}else if(levelNumber==2){//Pop up the options box
			startText.SetActive(false);
			quitText.SetActive(false);
			rend.material.color=Color(0,0,0,0);
			optionsBox.SetActive(true);
			optionsUp=true;
		}else if(levelNumber==0){//Quit the game
			Application.Quit();
		}
	}
}