param(
    [Parameter(Position=0,mandatory=$true)]
    [boolean] $cleanBuild,

    [Parameter(Position=1,mandatory=$true)]
    [boolean] $verbose,

    [Parameter(Position=2,mandatory=$true)]
    [boolean] $run
)

function Run {
    node "dist/src/index.js"
}

tsc "$(&{If($cleanBuild) {"--clean"} })"

If($run) { Run }