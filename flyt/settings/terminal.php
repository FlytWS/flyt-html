<div class="slideout-manual" id="sm-terminal">
        <header>
		  <div id="page-title-left"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bolt"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><circle cx="12" cy="12" r="4"/></svg></div>         
		  <div id="page-title-center"><h1>Terminal</h1></div>
		  <div id="page-title-right" onclick="menumanual('sm-terminal')" class="slideout-manual-toggle"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
        </header>
		<div class="menuBoundry">
		
		
		
		<section id="menu-body" style="width:100%;">
				

			<header style="flex-direction: column;">
			
				<div class="page-title"  style="display: flex; width:100%; margin-bottom:2rem; color:#fbfbfb80; font-size:0.75rem;">
					<div style="font-weight:600; white-space: nowrap;">Terminal</div>&emsp;<div style="width: calc(100% - 6rem);    word-wrap: break-word;    display: inline-block;">Use with absolute caution, you may brick your device</div>
				</div>
				
				
				<div class="page-title-center" style="width: 100%; height: calc(100% - 5rem); flex-grow:1; margin-bottom:2rem; color:#fbfbfb80; font-size:0.75rem;">
					<header style="    height: 100%;    width: 100%; margin-top:1rem; border-radius:0.75rem; flex-direction: column; padding:0rem; overflow:hidden; ">
					
					
					
				<div id="terminal">
					<div id="terminalhistory" style="white-space: pre;"></div>

					> 

					<div id="terminalinput" contenteditable="true"></div><button id="terminalcaret" for="terminalinput">&nbsp;</button>
				</div>
				
				
					</header>
				</div>

			</header>

	
		</section>
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

			
		</div>
</div>




<style type="text/css">

#terminal {
  background: #ffffff10;
  color: #0F0;
  font-family: monospace;
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;
  word-break: break-all;
  margin: 0;
  padding: 16px;
  width:100%;
}

#terminalinput {
  display: inline;
  outline: none;
  visibility: visible;
}

/*
  If you press the Insert key, the vertical line caret will automatically
  be replaced by a one-character selection.
*/
#terminalinput::selection {
  color: #000;
  background: #0F0;
}

#terminalinput:empty::before {
  content: ' ';
}

@keyframes blink {
  to {
    visibility: hidden;
  }
}

#terminalinput:focus + #caret {
  animation: blink 1s steps(5, start) infinite;
}

#terminalinput.noCaret + #caret {
  visibility: hidden;
}

#terminalcaret {
  border: 0;
  padding: 0;
  outline: none;
  background-color: #0F0;
  display: inline-block;
  font-family: monospace;
}


</style>


<script>




const history = document.getElementById('terminalhistory');
const input = document.getElementById('terminalinput');
const cursor = document.getElementById('cursor');





function focusAndMoveCursorToTheEnd(e) {  
  input.focus();
  
  const range = document.createRange();
  const selection = window.getSelection();
  const { childNodes } = input;
  const lastChildNode = childNodes && childNodes.length - 1;
  
  range.selectNodeContents(lastChildNode === -1 ? input : childNodes[lastChildNode]);
  range.collapse(false);

  selection.removeAllRanges();
  selection.addRange(range);
}

function handleCommand(command) {
	
	
	const longscripts = ["install-tar1090", "install-graphs1090"];
	
	
	console.log(command);
	
		$.ajax({
		url: 'ajax.php',
		type: 'POST',
		cache: false,
		data: { request: 'terminal-command', data: command },
		success: function(response) {
			console.log(response);
			var resParse = JSON.parse(response);
			console.log(resParse);
			if (resParse.length > 0) {
				
				if (longscripts.includes(command)) {
					var innerline = document.createElement('DIV');
					innerline.textContent = `> Please wait...`;
					history.appendChild(innerline);
				}
				
				resParse.forEach(function(responseline){
					

						console.log(responseline);

						var innerline = document.createElement('DIV');

						innerline.textContent = `> ${ responseline }`;

						history.appendChild(innerline);
						
						var terminalDiv = document.getElementById('terminal');
						terminalDiv.scrollTop = terminalDiv.scrollHeight;
					

					  
				});
			} else {
				console.log("No Output");
			}			
		},
		error: function(err) {
			console.log(err);
			
		}
	});
	
	
	
  const line = document.createElement('DIV');
  
  line.textContent = `> ${ command }`;
  
  history.appendChild(line);
}


document.addEventListener('selectionchange', () => {
  if (document.activeElement.id !== 'input') return;
  
  const range = window.getSelection().getRangeAt(0);
  const start = range.startOffset;
  const end = range.endOffset;
  const length = input.textContent.length;
  
  if (end < length) {
    input.classList.add('noCaret');
  } else {
    input.classList.remove('noCaret');
  }
});

input.addEventListener('input', () => {    

  if (input.childElementCount > 0) {
    const lines = input.innerText.replace(/\n$/, '').split('\n');
    const lastLine = lines[lines.length - 1];
    
    for (let i = 0; i <= lines.length - 2; ++i) {
      handleCommand(lines[i]);
    }
  
    input.textContent = lastLine;
    
    focusAndMoveCursorToTheEnd();
  }
  

  if (input.innerText.length === 0) {
    input.classList.remove('noCaret');  
  }  
});

document.addEventListener('keydown', (e) => {   

  if (e.target !== input) focusAndMoveCursorToTheEnd();
});

input.addEventListener('keydown', (e) => {    
  if (e.key === 'Enter') {
    e.preventDefault();
        
    handleCommand(input.textContent);    
    input.textContent = '';
    focusAndMoveCursorToTheEnd();

	
  }
});


input.focus();


</script>