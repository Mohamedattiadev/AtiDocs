from pygments.style import Style
from pygments.token import (
    Text, Comment, Keyword, Name, String, Number, Operator,
    Punctuation, Generic, Whitespace, Literal, Error, Other
)

class DoomOneStyle(Style):
    background_color = "#282c34"
    default_style = ""

    styles = {
        # Base
        Text:                      "#bbc2cf",
        Whitespace:                "#5b6268",
        Error:                     "#ff6c6b",
        Other:                     "#ff6c6b",

        # Comments
        Comment:                   "italic #5b6268",

        # Keywords
        Keyword:                   "bold #c678dd",
        Keyword.Constant:          "#a9a1e1",
        Keyword.Declaration:       "bold #c678dd",
        Keyword.Namespace:         "bold #c678dd",
        Keyword.Pseudo:            "#c678dd",
        Keyword.Reserved:          "#c678dd",
        Keyword.Type:              "#c678dd",

        # Names
        Name:                      "#bbc2cf",
        Name.Attribute:            "#dcaeea",
        Name.Builtin:   "#51afef",    # <--- highlight 'sudo' here
        Name.Namespace: "#c678dd",    # <--- e.g., commands like `apt`Name.Builtin:              "#c678dd",
        Name.Builtin.Pseudo:       "#c678dd",
        Name.Class:                "bold #a9a1e1",
        Name.Constant:             "#dcaeea",
        Name.Decorator:            "#c678dd",
        Name.Entity:               "#ff6c6b",
        Name.Exception:            "#da8548",
        Name.Function:             "#51afef",
        Name.Property:             "#98be65",
        Name.Label:                "#ecbe7b",
        # Name.Namespace:            "#a9a1e1",
        Name.Tag:                  "#51afef",
        Name.Variable:             "#ecbe7b",
        Name.Variable.Magic:       "#c678dd",

        # Strings
        String:                    "#98be65",
        String.Backtick:           "#98be65",
        String.Char:               "#98be65",
        String.Doc:                "italic #5b6268",
        String.Double:             "#98be65",
        String.Escape:             "#c678dd",
        String.Interpol:           "#98be65",
        String.Other:              "#98be65",
        String.Regex:              "#98be65",
        String.Single:             "#98be65",
        String.Symbol:             "#98be65",

        # Numbers
        Number:                    "#dcaeea",
        Number.Float:              "#dcaeea",
        Number.Hex:                "#dcaeea",
        Number.Integer:            "#dcaeea",
        Number.Oct:                "#dcaeea",

        # Operators
        Operator:                  "#56b6c2",
        Operator.Word:             "#c678dd",

        # Punctuation
        Punctuation:               "#abb2bf",

        # Generics
        Generic.Heading:           "bold #bbc2cf",
        Generic.Subheading:        "bold #bbc2cf",
        Generic.Deleted:           "#ff6c6b",
        Generic.Inserted:          "#98be65",
        Generic.Error:             "#ff6c6b",
        Generic.Emph:              "italic",
        Generic.Strong:            "bold",
        Generic.Prompt:            "#5b6268",
        Generic.Output:            "#bbc2cf",
        Generic.Traceback:         "#ff6c6b",
    }
