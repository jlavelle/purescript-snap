// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1830463427"] = [{"values":[{"sourceSpan":{"start":[10,1],"name":".spago/prelude/v4.1.1/src/Record/Unsafe.purs","end":[10,70]},"score":62,"packageInfo":{"values":["prelude"],"tag":"Package"},"name":"unsafeHas","moduleName":"Record.Unsafe","info":{"values":[{"type":{"tag":"ForAll","contents":["r1",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"r1"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Checks if a record has a key, using a string for the key.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[29,1],"name":".spago/react/v8.0.0/src/React/DOM/Props.purs","end":[29,79]},"score":0,"packageInfo":{"values":["react"],"tag":"Package"},"name":"unsafePrefixProps","moduleName":"React.DOM.Props","info":{"values":[{"type":{"tag":"ForAll","contents":["vals",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"vals"}]}]},{"tag":"TypeConstructor","contents":[["React","DOM","Props"],"Props"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[27,1],"name":".spago/react/v8.0.0/src/React/DOM/Props.purs","end":[27,79]},"score":0,"packageInfo":{"values":["react"],"tag":"Package"},"name":"unsafeUnfoldProps","moduleName":"React.DOM.Props","info":{"values":[{"type":{"tag":"ForAll","contents":["vals",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"TypeVar","contents":"vals"}]}]},{"tag":"TypeConstructor","contents":[["React","DOM","Props"],"Props"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[188,1],"name":".spago/foreign-object/v2.0.3/src/Foreign/Object.purs","end":[188,50]},"score":5,"packageInfo":{"values":["foreign-object"],"tag":"Package"},"name":"member","moduleName":"Foreign.Object","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Foreign","Object"],"Object"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Test whether a `String` appears as a key in a map\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[215,1],"name":".spago/strings/v4.0.2/src/Data/String/NonEmpty/Internal.purs","end":[215,83]},"score":8,"packageInfo":{"values":["strings"],"tag":"Package"},"name":"joinWith1","moduleName":"Data.String.NonEmpty.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Semigroup","Foldable"],"Foldable1"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]},{"tag":"TypeConstructor","contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Joins possibly empty strings in a non-empty container together as a new\nnon-empty string, inserting a non-empty string as a separator between them.\nThe result is guaranteed to be non-empty.\n\n```purescript\n-- array syntax is used for demonstration here, it would need to be a real `Foldable1`\njoinWith1 (NonEmptyString \", \") [\"apple\", \"banana\"] == NonEmptyString \"apple, banana\"\njoinWith1 (NonEmptyString \"/\") [\"a\", \"b\", \"\", \"c\", \"\"] == NonEmptyString \"a/b//c/\"\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[203,1],"name":".spago/strings/v4.0.2/src/Data/String/NonEmpty/Internal.purs","end":[203,83]},"score":8,"packageInfo":{"values":["strings"],"tag":"Package"},"name":"join1With","moduleName":"Data.String.NonEmpty.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Semigroup","Foldable"],"Foldable1"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeConstructor","contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]}]},{"tag":"TypeConstructor","contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Joins non-empty strings in a non-empty container together as a new\nnon-empty string, inserting a possibly empty string as separator between\nthem. The result is guaranteed to be non-empty.\n\n```purescript\n-- array syntax is used for demonstration here, it would need to be a real `Foldable1`\njoin1With \", \" [NonEmptyString \"apple\", NonEmptyString \"banana\"] == NonEmptyString \"apple, banana\"\njoin1With \"\" [NonEmptyString \"apple\", NonEmptyString \"banana\"] == NonEmptyString \"applebanana\"\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[188,1],"name":".spago/strings/v4.0.2/src/Data/String/NonEmpty/Internal.purs","end":[188,73]},"score":8,"packageInfo":{"values":["strings"],"tag":"Package"},"name":"joinWith","moduleName":"Data.String.NonEmpty.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["f",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Foldable"],"Foldable"],"constraintArgs":[{"tag":"TypeVar","contents":"f"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeVar","contents":"f"},{"tag":"TypeConstructor","contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Joins the strings in a container together as a new string, inserting the\nfirst argument as separator between them. The result is not guaranteed to\nbe non-empty.\n\n```purescript\njoinWith \", \" [NonEmptyString \"apple\", NonEmptyString \"banana\"] == \"apple, banana\"\njoinWith \", \" [] == \"\"\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[117,1],"name":".spago/ordered-collections/v1.6.1/src/Data/Set.purs","end":[117,51]},"score":4,"packageInfo":{"values":["ordered-collections"],"tag":"Package"},"name":"member","moduleName":"Data.Set","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set"],"Set"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Test if a value is a member of a set\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[106,1],"name":".spago/ordered-collections/v1.6.1/src/Data/Set/NonEmpty.purs","end":[106,59]},"score":4,"packageInfo":{"values":["ordered-collections"],"tag":"Package"},"name":"member","moduleName":"Data.Set.NonEmpty","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set","NonEmpty"],"NonEmptySet"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Test if a value is a member of a set.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[242,1],"name":".spago/maybe/v4.0.1/src/Data/Maybe.purs","end":[242,41]},"score":33,"packageInfo":{"values":["maybe"],"tag":"Package"},"name":"fromMaybe","moduleName":"Data.Maybe","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeVar","contents":"a"}]}]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Takes a default value, and a `Maybe` value. If the `Maybe` value is\n`Nothing` the default value is returned, otherwise the value inside the\n`Just` is returned.\n\n``` purescript\nfromMaybe x Nothing == x\nfromMaybe x (Just y) == y\n```\n"}],"tag":"SearchResult"}]