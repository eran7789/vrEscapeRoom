var thePlayer:Transform;
var distance:float;
var distanceDecrease:float=5;//How much the change in distance affects the color
var opactiy:float;
var rend: Renderer;
var startColor:Color;

function Start() {
	rend = GetComponent.<Renderer>();
	startColor=rend.material.GetColor("_TintColor");
}

function Update () {
	distance=Vector3.Distance(Vector3(thePlayer.position.x,thePlayer.position.z, 0),Vector3(transform.position.x,transform.position.z, 0));
//	opacity=distance/distanceDecrease;
	rend.material.SetColor("_TintColor",Color(startColor.r,startColor.g,startColor.b,1));
}