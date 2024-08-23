function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Inavlid input" });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    console.log(newComment);

    res.status(202).json({ message: "Added comment", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      {
        id: "c1",
        name: "Vin",
        text: "The first comment",
      },
      {
        id: "c2",
        name: "Anjiri",
        text: "The Second comment",
      },
    ];
    res.status(200).json({ comments: dummyList });
  }
}

export default handler;
