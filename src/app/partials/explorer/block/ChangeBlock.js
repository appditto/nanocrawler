import React from "react";

import AccountLink from "../../AccountLink";
import BlockLink from "../../BlockLink";

import "./Block.css";

export default function ChangeBlock({ block }) {
  return (
    <div className="Block">
      <h4 className="mb-0">
        Account{" "}
        <small>
          <AccountLink
            account={block.block_account}
            className="text-muted break-word"
          />
        </small>
      </h4>
      <p>
        <small>The account that changed their representative</small>
      </p>

      <h4 className="mb-0">
        Representative{" "}
        <small>
          <AccountLink
            account={block.contents.representative}
            className="text-muted break-word"
          />
        </small>
      </h4>
      <p>
        <small>The account's new representative</small>
      </p>

      <h5 className="mb-0">
        Previous Block{" "}
        <small>
          <BlockLink
            hash={block.contents.previous}
            className="text-muted break-word"
          />
        </small>
      </h5>
      <p>
        <small>The previous block in this account's chain</small>
      </p>

      <h5>
        Proof of Work{" "}
        <small className="text-muted break-word">{block.contents.work}</small>
      </h5>
      <h5>
        Signature{" "}
        <small className="text-muted break-word">
          {block.contents.signature}
        </small>
      </h5>
    </div>
  );
}
