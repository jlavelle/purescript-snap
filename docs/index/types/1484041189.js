// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1484041189"] = [{"values":[{"sourceSpan":{"start":[59,1],"name":".spago/profunctor-extra/v0.1.0/src/Data/Profunctor/Monoidal.purs","end":[59,98]},"score":0,"packageInfo":{"values":["profunctor-extra"],"tag":"Package"},"name":"divide","moduleName":"Data.Profunctor.Monoidal","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["x",{"tag":"ForAll","contents":["p",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Profunctor","Monoidal"],"Semigroupal"],"constraintArgs":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"x"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"x"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Tuple","Nested"],"/\\"]},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeVar","contents":"x"}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[47,1],"name":".spago/profunctor-extra/v0.1.0/src/Data/Profunctor/Monoidal.purs","end":[47,98]},"score":0,"packageInfo":{"values":["profunctor-extra"],"tag":"Package"},"name":"fanin","moduleName":"Data.Profunctor.Monoidal","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["x",{"tag":"ForAll","contents":["p",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Profunctor","Monoidal"],"Semigroupal"],"constraintArgs":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"x"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"x"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"ParensInType","contents":{"tag":"BinaryNoParensType","contents":[{"tag":"TypeOp","contents":[["Data","Either","Nested"],"\\/"]},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeVar","contents":"x"}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[74,1],"name":".spago/profunctor/v4.1.0/src/Data/Profunctor/Choice.purs","end":[80,22]},"score":3,"packageInfo":{"values":["profunctor"],"tag":"Package"},"name":"fanin","moduleName":"Data.Profunctor.Choice","info":{"values":[{"type":{"tag":"ForAll","contents":["c",{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["p",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Category"],"Category"],"constraintArgs":[{"tag":"TypeVar","contents":"p"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Profunctor","Choice"],"Choice"],"constraintArgs":[{"tag":"TypeVar","contents":"p"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"c"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeVar","contents":"c"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"p"},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Either"],"Either"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeVar","contents":"c"}]}]}]}]}]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Compose a value which eliminates a sum from two values, each eliminating\none side of the sum.\n\nThis combinator is useful when assembling values from smaller components,\nbecause it provides a way to support two different types of input.\n\nSpecializing `(|||)` to function application would look like this:\n```\n(|||) :: forall a b c d. (a -> c) -> (b -> c) -> Either a b -> c\n```\nWe take two functions, `f` and `g`, which both return the same type `c` and we transform them into a\nsingle function which takes an `Either` value with the parameter type of `f` on the left side and\nthe parameter type of `g` on the right side. The function then runs either `f` or `g`, depending on\nwhether the `Either` value is a `Left` or a `Right`.\nThis allows us to bundle two different computations which both have the same result type into one\nfunction which will run the approriate computation based on the parameter supplied in the `Either` value.\n"}],"tag":"SearchResult"}]