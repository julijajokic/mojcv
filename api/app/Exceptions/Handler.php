public function render($request, Throwable $exception)
{
    if ($request->expectsJson()) {
        return response()->json([
            'error' => 'Something went wrong.'
        ], 500);
    }

    return parent::render($request, $exception);
}

