<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrecioExamenesExternos extends Model
{
    use HasFactory;

    protected $table="precios_examen_externo";
    protected $primary_key="id";
    protected $guarded = ['estado'];

}
