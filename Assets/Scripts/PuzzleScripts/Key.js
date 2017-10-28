var inventoryScript:Inventory;
var myGameObject:GameObject;

function Start() {
	myGameObject=GameObject.Find("Key");
}

function Activate () {
	inventoryScript.items[0] = 1;

	myGameObject.GetComponent("BoxCollider").gameObject.active = false;
	Destroy(transform.Find("Key").gameObject);
	Destroy(transform.Find("SelectGUI").gameObject);
	GetComponent.<AudioSource>().Play();
}