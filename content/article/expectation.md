# 確率変数の期待値
***
<br />

## 定義

確率変数 $X$ が実現値 $X_1,X_2,\ldots,X_n$ をとるとき，**期待値** $E(X)$は次のようにあらわされる．

$$
E(X)=\sum_{i=1}^n X_i ~~~~~ \text{（離散確率変数）}
$$

$$
E(X)=\int_{-\infty}^{\infty} Xf(X)~dX ~~~~~ \text{（連続確率変数）}
$$

<br />

## 期待値の性質

期待値は線形性が成り立つ．すなわち，任意の定数$k$に対し，

$$
E(kX)=kE(X)
$$

である．また，確率変数 $X,Y$ が独立であるかどうかによらず，

$$
E(X+Y)=E(X)+E(Y)
$$

が成り立つ．加えて，$X,Y$ が独立ならば，

$$
E(XY)=E(X)E(Y)
$$

が成り立つ．