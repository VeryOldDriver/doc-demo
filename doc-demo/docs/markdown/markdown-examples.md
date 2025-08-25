# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## 语法高亮

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:
### 语法高亮三级标题
### 语法高亮三级标题2
**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 自定义容器
### 自定义容器3级2
#### 自定义容器四级标题3
### 自定义容器3
**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## 更多

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
