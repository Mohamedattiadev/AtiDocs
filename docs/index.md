---
comments: true
---

Lorem ipsum dolor sit amet, (1) consectetur adipiscing elit.
{ .annotate }

1.  :man_raising_hand: I'm an annotation! I can contain `code`, **formatted
    text**, images, ... basically anything that can be expressed in Markdown.

??? danger

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

??? note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

!!! note

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

=== "C"

    ``` c
    #include <stdio.h>

    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```

=== "C++"

    ``` c++
    #include <iostream>

    int main(void) {
      std::cout << "Hello world!" << std::endl;
      return 0;
    }
    ```

| Method   | Description                          |
| -------- | ------------------------------------ |
| `GET`    | :material-check: Fetch resource      |
| `PUT`    | :material-check-all: Update resource |
| `DELETE` | :material-close: Delete resource     |

[Send :fontawesome-solid-paper-plane:](#){ .md-button }

$$
\cos x=\sum_{k=0}^{\infty}\frac{(-1)^k}{(2k)!}x^{2k}
$$

++ctrl+alt+del++

# 🧪 Doom One Theme Test Page

Welcome to the **Doom One Theme Tester** for MkDocs! This page includes a wide range of Markdown elements to test your color scheme.

---

## 📝 Headings

### H3

#### H4

##### H5

---

## 🔤 Text Styles

- _Italic_
- **Bold**
- ~~Strikethrough~~
- ==Highlight==
- `Inline code`
- [Link to MkDocs](https://www.mkdocs.org)

---

## 🔢 Lists

### Unordered

- Apple
- Banana
  - Nested
    - Very Nested

### Ordered

1. First
2. Second
   1. Sub
   2. Sub

---

## 📦 Code Blocks

```python
# Python example
class Doom:
    def __init__(self, mode="dark"):
        self.mode = mode

    def activate(self):
        print(f"Activating Doom One in {self.mode} mode!")
```

```ts
function greet(name) {
  console.log(`Hello, ${name}!`);
}
```

```Js
function greet(name) {
    console.log(`Hello, ${name}!`);
}



```

```sh
echo "Welcome to Doom One"
sudo apt update && sudo apt upgrade


```
