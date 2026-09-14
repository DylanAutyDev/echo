<?php

namespace App\Policies;

use App\Models\Echoe;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class EchoePolicy
{

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Echoe $echoe): bool
    {
        return $echoe->user()->is($user);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Echoe $echoe): bool
    {
        return $echoe->user()->is($user);
    }
}
