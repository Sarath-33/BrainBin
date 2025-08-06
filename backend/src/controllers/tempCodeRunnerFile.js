console.error("Error in getNoteById controller", error);
        res.status(500).json({ message: "Internal server error" })