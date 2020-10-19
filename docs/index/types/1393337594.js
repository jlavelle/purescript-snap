// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1393337594"] = [{"values":[{"sourceSpan":{"start":[52,1],"name":".spago/profunctor-lenses/v6.3.0/src/Data/Lens/Traversal.purs","end":[52,70]},"score":1,"packageInfo":{"values":["profunctor-lenses"],"tag":"Package"},"name":"traversed","moduleName":"Data.Lens.Traversal","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["t",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Traversable"],"Traversable"],"constraintArgs":[{"tag":"TypeVar","contents":"t"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Lens","Types"],"Traversal"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"t"},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A `Traversal` for the elements of a `Traversable` functor.\n\n```purescript\nover traversed negate [1, 2, 3] == [-1,-2,-3]\nover traversed negate (Just 3) == Just -3\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[36,1],"name":".spago/profunctor-lenses/v6.3.0/src/Data/Lens/Grate.purs","end":[36,69]},"score":1,"packageInfo":{"values":["profunctor-lenses"],"tag":"Package"},"name":"cotraversed","moduleName":"Data.Lens.Grate","info":{"values":[{"type":{"tag":"ForAll","contents":["b",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Distributive"],"Distributive"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Lens","Types"],"Grate"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"b"}]}}]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]