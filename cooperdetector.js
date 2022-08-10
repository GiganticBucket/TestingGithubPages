registerPlugin({
    name: "Cooper Detector",
    TryHandle(emoteSource, message) {
        if (message.toLowerCase().includes("cooper")) {
            emoteSource.startOverlayEmotes([new FloatingEmote("https://giganticbucket.github.io/TestingGithubPages/CooperCute.jpg")]);
            return true;
        }

        return false;
    }
});
