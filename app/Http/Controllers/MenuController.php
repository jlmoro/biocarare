<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Menu;

class MenuController extends Controller
{
  public function listar_menu()
  {
    try {

      $menu = Menu::select('id','nombre_item','ruta','icono','posicion')
      ->whereNull('id_padre')
      ->orderBy('posicion','ASC')
      ->get();

      foreach ($menu as $key => $value) {
        $value->subItems = Menu::select('id','nombre_item','id_padre','ruta','icono','posicion')
        ->where('id_padre',$value->id)
        ->orderBy('posicion','ASC')
        ->get();
      }

      return $menu;

    } catch (\Exception $e) {
      return $this->captura_error($e,"error al listar menu");
    }
  }
}
