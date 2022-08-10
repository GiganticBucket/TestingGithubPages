registerPlugin("hello", { TryHandle(message) { alert("The plugin on github pages was notified of the message: " + message); return true; } });
