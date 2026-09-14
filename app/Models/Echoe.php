<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable(['message'])]
class Echoe extends Model
{
    protected $appends = ['can'];

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }

    protected function can() : Attribute {
        return Attribute::make(
            function() {
                return [
                    'update' => auth()->user() ? auth()->user()->can('update', $this) : false
                ];
            }
        );
    }
}
