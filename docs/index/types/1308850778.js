// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1308850778"] = [{"values":[{"sourceSpan":{"start":[54,1],"name":".spago/exists/v4.0.0/src/Data/Exists.purs","end":[54,63]},"score":2,"packageInfo":{"values":["exists"],"tag":"Package"},"name":"runExists","moduleName":"Data.Exists","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"ForAll","contents":["f",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"ParensInType","contents":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeVar","contents":"r"}]},null]}}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Exists"],"Exists"]},{"tag":"TypeVar","contents":"f"}]}]},{"tag":"TypeVar","contents":"r"}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"The `runExists` function is used to eliminate a value of type `Exists f`. The rank 2 type ensures\nthat the existentially-quantified type does not escape its scope. Since the function is required\nto work for _any_ type `a`, it will work for the existentially-quantified type.\n\nFor example, we can write a function to obtain the head of a stream by using `runExists` as follows:\n\n```purescript\nhead :: forall a. Stream a -> a\nhead = runExists head'\n  where\n  head' :: forall s. StreamF a s -> a\n  head' (StreamF s f) = snd (f s)\n```\n"}],"tag":"SearchResult"}]