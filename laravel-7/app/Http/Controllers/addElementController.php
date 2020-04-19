<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\crud;

class addElementController extends Controller
{
    //
    function add(Request $req){

    	$name = $req->input('name');
    	$email = $req->input('email');
    	$password = $req->input('password');

    	$crud = new crud();
    	$crud->name = $name;
    	$crud->email = $email;
    	$crud->password = $password;
    	$crud->save();
    	return $crud;

    }
    function getData(){
    	$element = crud::all() ;
    	return response()->json($element);
    }
    function delete(Request $req){
		$delId = $req->input('id');

		$record = crud::find($delId);
		$record->delete();

		return $record; 
    }
    function update(Request $req){
    	$id = $req->input('id');
    	$element = crud::find($id);
    	$element->name = $req->input('name');
    	$element->email = $req->input('email');
    	$element->password = $req->input('password');
		$element->save();
		return [
			'success' => true,
			'message' => 'successfully updated'
		];
    }
}
