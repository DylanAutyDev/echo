<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\Echoe;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class EchoController extends Controller
{
    use AuthorizesRequests;
    
    public function index(){
        $echoes = Echoe::with('user')->latest()->take(50)->get();

        return Inertia::render('home', [ 'echoes' => $echoes ]);
    }

    public function store(Request $request){
        $validated = $request->validate([
            'message' => 'required|string|max:255'
        ]);

        auth()->user()->echoes()->create($validated);

        return redirect('/')->with('success', "Echo created!");
    }

    public function edit(Echoe $echo){
        $this->authorize('update', $echo);
        return Inertia::render("edit", ["echoe" => $echo]);
    }

    public function update(Request $request, Echoe $echo){
        $this->authorize('update', $echo);

        $validated = $request->validate([
            "message" => "required|string|max:255"
        ]);

        $echo->update($validated);

        return redirect('/')->with('success', "Echo updated!");
    }

    public function destroy(Request $request, Echoe $echo){
        $this->authorize('update', $echo);

        $echo->delete();

        return redirect('/')->with('success', "Echo deleted!");
    }
}
