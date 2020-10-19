// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["531463271"] = [{"values":[{"sourceSpan":{"start":[64,1],"name":".spago/variant/v6.0.1/src/Data/Variant.purs","end":[71,8]},"score":3,"packageInfo":{"values":["variant"],"tag":"Package"},"name":"prj","moduleName":"Data.Variant","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ForAll","contents":["r2",{"tag":"ForAll","contents":["r1",{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["sym",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim","Row"],"Cons"],"constraintArgs":[{"tag":"TypeVar","contents":"sym"},{"tag":"TypeVar","contents":"a"},{"tag":"TypeVar","contents":"r1"},{"tag":"TypeVar","contents":"r2"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Symbol"],"IsSymbol"],"constraintArgs":[{"tag":"TypeVar","contents":"sym"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Alternative"],"Alternative"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Symbol"],"SProxy"]},{"tag":"TypeVar","contents":"sym"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Variant"],"Variant"]},{"tag":"TypeVar","contents":"r2"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]}]}]}]}]},null]},null]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Attempt to read a variant at a given label.\n```purescript\ncase prj (SProxy :: SProxy \"foo\") intAtFoo of\n  Just i  -> i + 1\n  Nothing -> 0\n```\n"}],"tag":"SearchResult"}]