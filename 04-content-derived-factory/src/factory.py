# 04-content-derived-factory/src/factory.py
# A content-derived factory. Fill in create() and derive(). No framework required.
# Run with: python3 src/factory.py



def create(content):
    """content is a dict of string fields, e.g. {"title": ..., "body": ..., "author": ...}.
    Return {"content": content, "id": <id>}, where id is derived from the content alone.
    """
    # TODO: return an item holding the content and an id derived from its content (use derive).
    raise NotImplementedError


def derive(content):
    """Recompute the id from the content alone, with no registry and no shared state,
    so the demo passes.
    """
    # TODO
    raise NotImplementedError


def demo():
    content = {
        "title": "Quarterly report",
        "body": "Revenue held steady.",
        "author": "avery",
    }

    item = create(content)

    # Second party holds only the content, in a different field order, and derives the id itself.
    same_content = {
        "author": "avery",
        "body": "Revenue held steady.",
        "title": "Quarterly report",
    }
    assert derive(same_content) == item["id"], "same content must derive the same id"

    # Tamper with one field. The derived id must no longer match the original.
    tampered = {**content, "body": "Revenue tripled."}
    assert derive(tampered) != item["id"], "changed content must change the id"

    print("ok:", item["id"])


if __name__ == "__main__":
    demo()
