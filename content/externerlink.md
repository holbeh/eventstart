---
title: "Externerlink"
date: 2021-01-31T18:37:02+01:00
draft: false
---

 
<script>
 function onOpenClick(self) {
     const url = window.location.hash.substring(1);
     // TODO: open in new tab button
     console.log(url);
     console.log(self ? "_self" : "_blank");
     //window.location.assign(url);
     window.open(url, self ? "_self" : "_blank");
 }
</script>



<button type="button" onclick="onOpenClick(true)">
Go to external site
</button>
<button type="button" onclick="onOpenClick(false)">
open external site
</button>
