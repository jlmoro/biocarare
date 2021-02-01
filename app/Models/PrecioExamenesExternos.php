<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PrecioExamenesExternos extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table="precios_examen_externo";
    protected $primary_key="id";
    protected $guarded = ['estado'];
    // protected $dates = ['deleted_at'];

}
