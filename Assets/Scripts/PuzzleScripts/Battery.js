﻿var inventoryScript:Inventory;
var batteryNumber:int=1;

function Activate () {
	inventoryScript.items[batteryNumber]+=1;
	GetComponent("BoxCollider").gameObject.active=false;
	Destroy(transform.Find("Battery").gameObject);
	Destroy(transform.Find("SelectGUI").gameObject);
	GetComponent.<AudioSource>().Play();
}
