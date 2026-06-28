"""Simple starter Python script."""

from argparse import ArgumentParser


def build_parser() -> ArgumentParser:
    parser = ArgumentParser(description="Run a simple Python script.")
    parser.add_argument(
        "--name",
        default="world",
        help="Name to greet.",
    )
    return parser


def main() -> None:
    args = build_parser().parse_args()
    print(f"Hello, {args.name}!")


if __name__ == "__main__":
    main()
